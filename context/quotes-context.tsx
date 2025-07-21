"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Quote } from "@/types/quote"
import { fetchQuote } from "@/lib/api"

interface QuotesContextType {
  currentQuote: Quote | null
  favorites: Quote[]
  fetchNewQuote: () => Promise<void>
  addToFavorites: (quote: Quote) => void
  removeFromFavorites: (id: string) => void
}

const QuotesContext = createContext<QuotesContextType | undefined>(undefined)

export function QuotesProvider({ children }: { children: ReactNode }) {
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null)
  const [favorites, setFavorites] = useState<Quote[]>([])
  const [cachedQuotes, setCachedQuotes] = useState<Quote[]>([])
  const [isInitialized, setIsInitialized] = useState(false)

  // Load favorites from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedFavorites = localStorage.getItem("quotesFavorites")
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites))
        }
      } catch (error) {
        console.error("Failed to parse favorites from localStorage:", error)
      } finally {
        setIsInitialized(true)
      }
    } else {
      // If window is not defined, we're in a server context, so just mark as initialized
      setIsInitialized(true)
    }
  }, [])

  // Save favorites to localStorage when they change
  useEffect(() => {
    if (typeof window !== "undefined" && isInitialized) {
      try {
        localStorage.setItem("quotesFavorites", JSON.stringify(favorites))
      } catch (error) {
        console.error("Failed to save favorites to localStorage:", error)
      }
    }
  }, [favorites, isInitialized])

  const fetchNewQuote = async () => {
    try {
      // Use a cached quote if available, otherwise fetch a new one
      if (cachedQuotes.length > 0) {
        const quote = cachedQuotes[0]
        setCachedQuotes(cachedQuotes.slice(1))
        setCurrentQuote(quote)
      } else {
        const quote = await fetchQuote()
        setCurrentQuote(quote)

        // Fetch additional quotes for the cache in the background
        fetchQuotesForCache()
      }
    } catch (error) {
      console.error("Error in fetchNewQuote:", error)
      // If all else fails, set a hardcoded quote
      setCurrentQuote({
        _id: "emergency-quote",
        content: {
          en: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
          ar: "المجد الأعظم في الحياة لا يكمن في عدم السقوط أبداً، بل في النهوض في كل مرة نسقط فيها.",
        },
        author: {
          en: "Nelson Mandela",
          ar: "نيلسون مانديلا",
        },
        tags: ["resilience", "life", "perseverance"],
      })
    }
  }

  // Fetch quotes for the cache
  const fetchQuotesForCache = async () => {
    try {
      const quotes = []
      // Fetch 5 quotes for the cache
      for (let i = 0; i < 5; i++) {
        try {
          const quote = await fetchQuote()
          quotes.push(quote)
        } catch (error) {
          console.error(`Error fetching cache quote ${i}:`, error)
          // Continue with the next quote even if one fails
        }
      }
      setCachedQuotes((prev) => [...prev, ...quotes])
    } catch (error) {
      console.error("Error in fetchQuotesForCache:", error)
    }
  }

  // Prefetch quotes for the cache on initial load
  useEffect(() => {
    if (isInitialized && !currentQuote) {
      fetchNewQuote().catch((error) => {
        console.error("Failed to fetch initial quote:", error)
      })
    }
  }, [isInitialized, currentQuote])

  const addToFavorites = (quote: Quote) => {
    setFavorites((prev) => {
      // Check if the quote is already in favorites
      if (prev.some((fav) => fav._id === quote._id)) {
        return prev
      }
      return [...prev, quote]
    })
  }

  const removeFromFavorites = (id: string) => {
    setFavorites((prev) => prev.filter((quote) => quote._id !== id))
  }

  return (
    <QuotesContext.Provider
      value={{
        currentQuote,
        favorites,
        fetchNewQuote,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </QuotesContext.Provider>
  )
}

export function useQuotes() {
  const context = useContext(QuotesContext)
  if (context === undefined) {
    throw new Error("useQuotes must be used within a QuotesProvider")
  }
  return context
}

