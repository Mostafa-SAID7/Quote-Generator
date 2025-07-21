"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Lang = "en" | "ar"

interface Translations {
  [key: string]: {
    en: string
    ar: string
  }
}

const translations: Translations = {
  siteName: {
    en: "Quote Generator",
    ar: "مولد الاقتباسات",
  },
  darkMode: {
    en: "Dark Mode",
    ar: "الوضع المظلم",
  },
  copyright: {
    en: "Copyright",
    ar: "حقوق النشر",
  },
  allRightsReserved: {
    en: "All rights reserved.",
    ar: "جميع الحقوق محفوظة.",
  },
  quoteOfMoment: {
    en: "Quote of the Moment",
    ar: "اقتباس اللحظة",
  },
  newQuote: {
    en: "New Quote",
    ar: "اقتباس جديد",
  },
  copy: {
    en: "Copy",
    ar: "نسخ",
  },
  favorite: {
    en: "Favorite",
    ar: "المفضلة",
  },
  unfavorite: {
    en: "Unfavorite",
    ar: "إزالة من المفضلة",
  },
  share: {
    en: "Share",
    ar: "مشاركة",
  },
  quotes: {
    en: "Quotes",
    ar: "الاقتباسات",
  },
  favorites: {
    en: "Favorites",
    ar: "المفضلة",
  },
  loading: {
    en: "Loading your quote...",
    ar: "جاري تحميل الاقتباس...",
  },
  tryAgain: {
    en: "Try Again",
    ar: "حاول مرة أخرى",
  },
  searchFavorites: {
    en: "Search favorites...",
    ar: "البحث في المفضلة...",
  },
  noFavorites: {
    en: "You haven't saved any favorites yet. Click the heart icon on quotes you like to save them here.",
    ar: "لم تقم بحفظ أي مفضلات بعد. انقر على أيقونة القلب على الاقتباسات التي تعجبك لحفظها هنا.",
  },
  noMatchingFavorites: {
    en: "No favorites match your search. Try a different search term.",
    ar: "لا توجد مفضلات تطابق بحثك. جرب مصطلح بحث مختلف.",
  },
  remove: {
    en: "Remove",
    ar: "إزالة",
  },
  pageNotFound: {
    en: "Page Not Found",
    ar: "الصفحة غير موجودة",
  },
  pageNotFoundDesc: {
    en: "Sorry, the page you are looking for doesn't exist or has been moved.",
    ar: "عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
  },
  backToHome: {
    en: "Back to Home",
    ar: "العودة إلى الصفحة الرئيسية",
  },
}

interface LangContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string) => string
  dir: string
}

const LangContext = createContext<LangContextType | undefined>(undefined)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")
  const [mounted, setMounted] = useState(false)

  // Set the direction attribute on the html element
  useEffect(() => {
    if (!mounted) {
      setMounted(true)
      return
    }

    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr")

    // Store the language preference
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lang)
    }
  }, [lang, mounted])

  // Load the language preference on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLang = localStorage.getItem("lang") as Lang
      if (storedLang && (storedLang === "en" || storedLang === "ar")) {
        setLang(storedLang)
      }
    }
    setMounted(true)
  }, [])

  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation missing for key: ${key}`)
      return key
    }
    return translations[key][lang]
  }

  return (
    <LangContext.Provider
      value={{
        lang,
        setLang,
        t,
        dir: lang === "ar" ? "rtl" : "ltr",
      }}
    >
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const context = useContext(LangContext)
  if (context === undefined) {
    throw new Error("useLang must be used within a LangProvider")
  }
  return context
}

