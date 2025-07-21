"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"
import { useLang } from "@/context/lang-context"

// This component needs to be client-side since it uses hooks
export default function NotFound() {
  const { t } = useLang()

  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-8 text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <div>
        <h2 className="text-2xl font-semibold mb-2">{t("pageNotFound")}</h2>
        <p className="text-muted-foreground">{t("pageNotFoundDesc")}</p>
      </div>
      <Link href="/" className="mt-6">
        <Button>
          <Home className="mr-2 h-4 w-4" />
          {t("backToHome")}
        </Button>
      </Link>
    </div>
  )
}

