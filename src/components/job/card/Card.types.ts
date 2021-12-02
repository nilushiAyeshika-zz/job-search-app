export interface CardProps {
  id: string
  className?: string
  jobTitle: string
  company: string
  description: string
  location: string
  jobPostedDay: string
  isApplied?: boolean
  callbackValue: string
  onClick?: (callbackValue: any) => any
}
