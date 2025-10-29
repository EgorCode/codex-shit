export type BusinessForm = 'НПД' | 'ИП' | 'ООО'

export interface WizardQuestion {
  id: string
  question: string
  options: WizardOption[]
}

export interface WizardOption {
  value: string
  label: string
  score: Record<BusinessForm, number>
}

export interface WizardResult {
  form: BusinessForm
  score: number
  reasons: string[]
  obligations: string[]
  documents: string[]
}

export interface BusinessFormComparison {
  form: BusinessForm
  registration: string
  taxes: string
  revenueLimit: string
  employees: string
  accounting: string
  withdrawal: string
}
