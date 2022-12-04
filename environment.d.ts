declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Contenful
      CONTENTFUL_SPACE_ID: string
      CONTENTFUL_ACCESS_TOKEN: string
      CONTENTFUL_MANAGEMENT_TOKEN: string
      CONTENTFUL_ENVIRONMENT: string

      // SendGrid
      SENDGRID_API_KEY: string
    }
  }
}

export {}
