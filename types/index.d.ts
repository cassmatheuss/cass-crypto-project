export type SiteConfig = {
  name: string
  author: string
  description: string
}

export type ContactConfig = {
  email: string
}

export type Settings = {
  themeToggleEnabled: boolean
}

export type Layout = {
  heroHeader: string
  featureCards: string
  headers: {
    featureCards: string
    features: string
  }
}
