export interface Quote {
  _id: string
  content: {
    en: string
    ar: string
  }
  author: {
    en: string
    ar: string
  }
  tags?: string[]
  authorSlug?: string
  length?: number
  dateAdded?: string
  dateModified?: string
}

