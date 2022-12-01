declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CONTENTFUL_SPACE_ID: string
      CONTENTFUL_ACCESS_TOKEN: string
      CONTENTFUL_MANAGEMENT_TOKEN: string
      CONTENTFUL_ENVIRONMENT: string
      SENDGRID_API_KEY: string
    }
  }
}

export {}
