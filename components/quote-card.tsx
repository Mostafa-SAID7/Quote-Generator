"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/components/ui/use-toast"
import { useQuotes } from "@/context/quotes-context"
import { useLang } from "@/context/lang-context"
import { RefreshCw, Copy, Heart, Share2, Twitter, Facebook, Linkedin, HeartOff } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { motion, AnimatePresence } from "framer-motion"

export default function QuoteCard() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()
  const { currentQuote, fetchNewQuote, addToFavorites, removeFromFavorites, favorites } = useQuotes()
  const { t, lang } = useLang()

  const isFavorite = favorites.some((fav) => fav._id === currentQuote?._id)

  useEffect(() => {
    if (!currentQuote) {
      handleNewQuote()
    }
  }, [currentQuote])

  const handleNewQuote = async () => {
    setIsLoading(true)
    setError(null)
    try {
      await fetchNewQuote()
    } catch (err) {
      setError("Failed to load a new quote. Please try again.")
      toast({
        title: "Error",
        description: "Failed to load a new quote. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopyToClipboard = () => {
    if (!currentQuote) return

    const quoteText = `"${currentQuote.content[lang]}" - ${currentQuote.author[lang]}`

    try {
      navigator.clipboard.writeText(quoteText)
      toast({
        title: "Copied!",
        description: "Quote copied to clipboard",
      })
    } catch (err) {
      console.error("Failed to copy to clipboard:", err)
      toast({
        title: "Copy failed",
        description: "Could not copy to clipboard. Your browser may not support this feature.",
        variant: "destructive",
      })
    }
  }

  const handleToggleFavorite = () => {
    if (!currentQuote) return

    if (isFavorite) {
      removeFromFavorites(currentQuote._id)
      toast({
        title: "Removed from favorites",
        description: "Quote removed from your favorites",
      })
    } else {
      addToFavorites(currentQuote)
      toast({
        title: "Added to favorites",
        description: "Quote added to your favorites",
      })
    }
  }

  const handleShare = (platform: "twitter" | "facebook" | "linkedin") => {
    if (!currentQuote) return

    const quoteText = `"${currentQuote.content[lang]}" - ${currentQuote.author[lang]}`
    const encodedQuote = encodeURIComponent(quoteText)

    let shareUrl = ""

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodedQuote}`
        break
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodedQuote}`
        break
      case "linkedin":
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodedQuote}`
        break
    }

    try {
      window.open(shareUrl, "_blank")
    } catch (err) {
      console.error("Failed to open share window:", err)
      toast({
        title: "Share failed",
        description: "Could not open share window. Your browser may be blocking popups.",
        variant: "destructive",
      })
    }
  }

  return (
    <Card className="w-full">
      <CardHeader className="text-center">
        <h2 className="text-2xl font-bold">{t("quoteOfMoment")}</h2>
      </CardHeader>
      <CardContent className="min-h-[200px] flex items-center justify-center">
        {isLoading ? (
          <div className="space-y-4 w-full">
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-3/4 mx-auto" />
            <Skeleton className="h-4 w-1/2 mx-auto" />
          </div>
        ) : error ? (
          <div className="text-center text-red-500">
            <p>{error}</p>
            <Button onClick={handleNewQuote} variant="outline" className="mt-4">
              {t("tryAgain")}
            </Button>
          </div>
        ) : currentQuote ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuote._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <blockquote
                className={`text-xl md:text-2xl italic mb-4 ${lang === "ar" ? "rtl font-noto-kufi-arabic" : "ltr"}`}
              >
                "{currentQuote.content[lang]}"
              </blockquote>
              <cite className={`text-lg block ${lang === "ar" ? "font-noto-kufi-arabic" : ""}`}>
                — {currentQuote.author[lang]}
              </cite>
              {currentQuote.tags && currentQuote.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {currentQuote.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        ) : (
          <p className="text-center text-muted-foreground">{t("loading")}</p>
        )}
      </CardContent>
      <CardFooter className="flex justify-center gap-2 flex-wrap">
        <Button onClick={handleNewQuote} disabled={isLoading} variant="outline">
          <RefreshCw className="mr-2 h-4 w-4" />
          {t("newQuote")}
        </Button>
        <Button onClick={handleCopyToClipboard} disabled={!currentQuote || isLoading} variant="outline">
          <Copy className="mr-2 h-4 w-4" />
          {t("copy")}
        </Button>
        <Button
          onClick={handleToggleFavorite}
          disabled={!currentQuote || isLoading}
          variant={isFavorite ? "default" : "outline"}
        >
          {isFavorite ? (
            <>
              <HeartOff className="mr-2 h-4 w-4" />
              {t("unfavorite")}
            </>
          ) : (
            <>
              <Heart className="mr-2 h-4 w-4" />
              {t("favorite")}
            </>
          )}
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button disabled={!currentQuote || isLoading} variant="outline">
              <Share2 className="mr-2 h-4 w-4" />
              {t("share")}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => handleShare("twitter")}>
              <Twitter className="mr-2 h-4 w-4" />
              Twitter/X
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleShare("facebook")}>
              <Facebook className="mr-2 h-4 w-4" />
              Facebook
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleShare("linkedin")}>
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardFooter>
    </Card>
  )
}

