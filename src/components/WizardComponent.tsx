'use client'

import { useState } from 'react'
import type { BusinessForm } from '@/types'
import { calculateWizardResult, questions } from '@/lib/wizard-data'

export default function WizardComponent() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [result, setResult] = useState<ReturnType<typeof calculateWizardResult> | null>(null)

  const currentQuestion = questions[step]
  const isLastStep = step === questions.length - 1

  const handleAnswer = (questionId: string, optionValue: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionValue }))
  }

  const handleNext = () => {
    if (!answers[currentQuestion.id]) return

    if (isLastStep) {
      const scores: Record<BusinessForm, number> = {
        'НПД': 0,
        'ИП': 0,
        'ООО': 0,
      }

      questions.forEach((q) => {
        const answerValue = answers[q.id]
        const option = q.options.find((opt) => opt.value === answerValue)
        if (option) {
          scores['НПД'] += option.score['НПД']
          scores['ИП'] += option.score['ИП']
          scores['ООО'] += option.score['ООО']
        }
      })

      const finalResult = calculateWizardResult(scores)
      setResult(finalResult)
    } else {
      setStep((prev) => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (step > 0) setStep((prev) => prev - 1)
  }

  const handleReset = () => {
    setStep(0)
    setAnswers({})
    setResult(null)
  }

  if (result) {
    return (
      <div className="w-full max-w-3xl space-y-6 rounded-3xl bg-white p-8 shadow-lg">
        <div className="space-y-3">
          <span className="inline-flex rounded-full bg-success-green/10 px-4 py-1 text-sm font-medium text-success-green">
            Результаты готовы
          </span>
          <h2 className="text-3xl font-semibold text-dark-graphite">
            Рекомендуем вам форму: <span className="text-blue-accent">{result.form}</span>
          </h2>
        </div>

        <div className="space-y-6 rounded-2xl border border-light-gray bg-light-gray/60 p-6">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-dark-graphite">Почему именно {result.form}?</h3>
            <ul className="space-y-2">
              {result.reasons.map((reason, idx) => (
                <li key={idx} className="flex items-start gap-2 text-dark-graphite/80">
                  <span className="mt-1 text-success-green">✓</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-dark-graphite">Обязательные действия</h3>
            <ul className="space-y-2">
              {result.obligations.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-dark-graphite/80">
                  <span className="text-warning-orange">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-dark-graphite">Документы для регистрации</h3>
            <ul className="space-y-2">
              {result.documents.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2 text-dark-graphite/80">
                  <span className="text-blue-accent">📄</span>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="w-full rounded-xl border border-blue-accent py-3 text-blue-accent transition hover:bg-blue-accent/10"
        >
          Пройти заново
        </button>
      </div>
    )
  }

  return (
    <div className="w-full max-w-3xl space-y-6 rounded-3xl bg-white p-8 shadow-lg">
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm text-dark-graphite/60">
          <span>
            Вопрос {step + 1} из {questions.length}
          </span>
          <span>{Math.round(((step + 1) / questions.length) * 100)}% завершено</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-light-gray">
          <div
            className="h-full rounded-full bg-blue-accent transition-all duration-300"
            style={{ width: `${((step + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-dark-graphite">{currentQuestion.question}</h2>

        <div className="space-y-3">
          {currentQuestion.options.map((option) => {
            const isSelected = answers[currentQuestion.id] === option.value
            return (
              <button
                key={option.value}
                onClick={() => handleAnswer(currentQuestion.id, option.value)}
                className={`w-full rounded-xl border-2 p-4 text-left transition ${
                  isSelected
                    ? 'border-blue-accent bg-blue-accent/10'
                    : 'border-light-gray bg-light-gray/30 hover:border-blue-accent/30'
                }`}
              >
                <span className="text-dark-graphite">{option.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="flex gap-3">
        {step > 0 && (
          <button
            onClick={handlePrevious}
            className="rounded-xl border border-blue-accent px-6 py-3 text-blue-accent transition hover:bg-blue-accent/10"
          >
            Назад
          </button>
        )}
        <button
          onClick={handleNext}
          disabled={!answers[currentQuestion.id]}
          className="flex-1 rounded-xl bg-blue-accent px-6 py-3 text-white transition hover:bg-blue-accent/90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLastStep ? 'Получить результат' : 'Далее'}
        </button>
      </div>
    </div>
  )
}
