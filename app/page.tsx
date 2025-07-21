import QuoteCard from "@/components/quote-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FavoritesList from "@/components/favorites-list"
import { useLang } from "@/context/lang-context"

export default function Home() {
  return (
    <div className="container py-8 md:py-12">
      <div className="w-full max-w-3xl mx-auto">
        <Tabs defaultValue="quotes" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="quotes">
              <LangAwareText textKey="quotes" />
            </TabsTrigger>
            <TabsTrigger value="favorites">
              <LangAwareText textKey="favorites" />
            </TabsTrigger>
          </TabsList>
          <TabsContent value="quotes" className="mt-6">
            <QuoteCard />
          </TabsContent>
          <TabsContent value="favorites" className="mt-6">
            <FavoritesList />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

// This is a server component that will be rendered on the server
// We need to use a client component to access the language context
function LangAwareText({ textKey }: { textKey: string }) {
  "use client"
  const { t } = useLang()
  return <>{t(textKey)}</>
}

