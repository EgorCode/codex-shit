import Link from 'next/link'
import WizardComponent from '@/components/WizardComponent'

export default function WizardPage() {
  return (
    <main className="min-h-screen bg-light-gray px-6 py-16 text-dark-graphite">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <header className="space-y-4">
          <Link href="/" className="inline-flex text-sm text-blue-accent hover:text-blue-accent/80">
            ← На главную
          </Link>
          <div className="space-y-3">
            <h1 className="text-4xl font-semibold">Мастер подбора формы бизнеса</h1>
            <p className="text-lg text-dark-graphite/70">
              Ответьте на несколько вопросов, чтобы получить персональную рекомендацию по оптимальной форме ведения бизнеса с пояснениями и чек-листами.
            </p>
          </div>
        </header>

        <WizardComponent />
      </div>
    </main>
  )
}
