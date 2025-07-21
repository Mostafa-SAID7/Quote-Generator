"use client"

import { useQuotes } from "@/context/quotes-context"
import { useLang } from "@/context/lang-context"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Trash2, Copy, Share2, Twitter, Facebook, Linkedin, Search, X } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function FavoritesList() {
  const { favorites, removeFromFavorites } = useQuotes()
  const { toast } = useToast()
  const { t, lang } = useLang()
  const [searchTerm, setSearchTerm] = useState("")

  const handleCopyToClipboard = (content: { en: string; ar: string }, author: { en: string; ar: string }) => {
    const quoteText = `"${content[lang]}" - ${author[lang]}`

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

  const handleShare = (
    platform: "twitter" | "facebook" | "linkedin",
    content: { en: string; ar: string },
    author: { en: string; ar: string },
  ) => {
    const quoteText = `"${content[lang]}" - ${author[lang]}`
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

  const handleRemoveFavorite = (id: string) => {
    removeFromFavorites(id)
    toast({
      title: "Removed from favorites",
      description: "Quote removed from your favorites",
    })
  }

  const filteredFavorites = favorites.filter(
    (quote) =>
      quote.content[lang].toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.author[lang].toLowerCase().includes(searchTerm.toLowerCase()) ||
      (quote.tags && quote.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))),
  )

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={t("searchFavorites")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-8 pr-8"
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3"
            onClick={() => setSearchTerm("")}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Clear search</span>
          </Button>
        )}
      </div>

      {favorites.length === 0 ? (
        <Alert>
          <AlertDescription>{t("noFavorites")}</AlertDescription>
        </Alert>
      ) : filteredFavorites.length === 0 ? (
        <Alert>
          <AlertDescription>{t("noMatchingFavorites")}</AlertDescription>
        </Alert>
      ) : (
        <AnimatePresence>
          {filteredFavorites.map((quote) => (
            <motion.div
              key={quote._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="mb-4">
                <CardContent className="pt-6">
                  <blockquote className={`text-lg italic mb-2 ${lang === "ar" ? "rtl font-noto-kufi-arabic" : "ltr"}`}>
                    "{quote.content[lang]}"
                  </blockquote>
                  <cite className={`text-sm block ${lang === "ar" ? "font-noto-kufi-arabic" : ""}`}>
                    — {quote.author[lang]}
                  </cite>
                  {quote.tags && quote.tags.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {quote.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-end gap-2 flex-wrap">
                  <Button
                    onClick={() => handleCopyToClipboard(quote.content, quote.author)}
                    size="sm"
                    variant="outline"
                  >
                    <Copy className="mr-2 h-4 w-4" />
                    {t("copy")}
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="sm" variant="outline">
                        <Share2 className="mr-2 h-4 w-4" />
                        {t("share")}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => handleShare("twitter", quote.content, quote.author)}>
                        <Twitter className="mr-2 h-4 w-4" />
                        Twitter/X
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleShare("facebook", quote.content, quote.author)}>
                        <Facebook className="mr-2 h-4 w-4" />
                        Facebook
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleShare("linkedin", quote.content, quote.author)}>
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button onClick={() => handleRemoveFavorite(quote._id)} size="sm" variant="destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    {t("remove")}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      )}
    </div>
  )
}

