import * as Contentful from 'contentful'

export interface TypeCaseStudyFields {
  titleImage: Contentful.Asset
  title: Contentful.EntryFields.Symbol
  slug: Contentful.EntryFields.Symbol
  description: Contentful.EntryFields.Symbol
  companyName: Contentful.EntryFields.Symbol
  companyLogo: Contentful.Asset
  product: Contentful.EntryFields.Symbol
  industry: Contentful.EntryFields.Symbol
  results: Contentful.EntryFields.Symbol
  problemHeader: Contentful.EntryFields.Symbol
  problemText: Contentful.EntryFields.Text
  solutionHeader: Contentful.EntryFields.Symbol
  solutionText: Contentful.EntryFields.Text
  conclusionHeader: Contentful.EntryFields.Symbol
  conclusionText: Contentful.EntryFields.Text
}

export type TypeCaseStudy = Contentful.Entry<TypeCaseStudyFields>

export interface TypeIndustryPageFields {
  name: Contentful.EntryFields.Symbol
  slug: Contentful.EntryFields.Symbol
  subheader: Contentful.EntryFields.Symbol
  descriptionImage: Contentful.Asset
  description: Contentful.EntryFields.Text
  callToAction: Contentful.EntryFields.Symbol
  callToActionButton: Contentful.EntryFields.Symbol
  caseStudyImage: Contentful.Asset
  caseStudies: Contentful.Entry<Record<string, any>>[]
  testimonials: Contentful.Entry<Record<string, any>>[]
}

export type TypeIndustryPage = Contentful.Entry<TypeIndustryPageFields>

export interface TypeJobPostsFields {
  location: Contentful.EntryFields.Symbol
  time: 'Full Time' | 'Part Time'
  role: Contentful.EntryFields.Symbol
  department: Contentful.EntryFields.Symbol
}

export type TypeJobPosts = Contentful.Entry<TypeJobPostsFields>

export interface TypeTeamMemberFields {
  name: Contentful.EntryFields.Symbol
  role: Contentful.EntryFields.Symbol
  photo: Contentful.Asset
}

export type TypeTeamMember = Contentful.Entry<TypeTeamMemberFields>

export interface TypeTestimonialFields {
  fullName: Contentful.EntryFields.Symbol
  role: Contentful.EntryFields.Symbol
  company: Contentful.EntryFields.Symbol
  testimonial: Contentful.EntryFields.Text
}

export type TypeTestimonial = Contentful.Entry<TypeTestimonialFields>
