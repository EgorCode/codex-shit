import Link from 'next/link'

const features = [
  {
    title: 'Мастер подбора формы бизнеса',
    description:
      'Интерактивный опросник из 5–7 вопросов, который помогает определить оптимальную форму бизнеса.',
  },
  {
    title: 'Сравнение форм бизнеса',
    description:
      'Фильтруемая таблица с ключевыми показателями по НПД, ИП и ООО для быстрого принятия решений.',
  },
  {
    title: 'Библиотека документов',
    description: 'Коллекция из 30+ шаблонов для регистрации, договоров и операционной деятельности.',
  },
  {
    title: 'Калькуляторы налогов',
    description: 'Расчёты для НПД, УСН и страховых взносов с учётом актуальных ставок.',
  },
  {
    title: 'База знаний',
    description: 'Статьи, гайды и чек-листы по запуску и ведению бизнеса для разных сценариев.',
  },
  {
    title: 'Персонализация',
    description: 'Сохранение результатов, подбор подборок материалов и работа с избранным.',
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-light-gray text-dark-graphite">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16">
        <section className="rounded-3xl bg-white p-10 shadow-sm">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full bg-blue-accent/10 px-4 py-1 text-sm font-medium text-blue-accent">
              Для начинающих предпринимателей
            </span>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Выбирайте форму бизнеса уверенно и запускайте дело без рисков
            </h1>
            <p className="text-lg text-dark-graphite/70">
              Платформа помогает выбрать оптимальную организационно-правовую форму, подготовить документы и рассчитать обязательные платежи.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/wizard"
                className="rounded-xl bg-blue-accent px-6 py-3 text-white transition hover:bg-blue-accent/90"
              >
                Пройти мастер подбора
              </Link>
              <Link
                href="/comparison"
                className="rounded-xl border border-blue-accent px-6 py-3 text-blue-accent transition hover:bg-blue-accent/10"
              >
                Сравнить формы бизнеса
              </Link>
            </div>
          </div>
        </section>

        <section id="features" className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Основные возможности</h2>
            <p className="text-dark-graphite/70">
              Сервис покрывает все ключевые шаги: от выбора формы до подготовки документов и расчёта налогов.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-dark-graphite">{feature.title}</h3>
                <p className="mt-3 text-dark-graphite/70">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="wizard" className="grid gap-8 rounded-3xl bg-white p-10 shadow-sm md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Как работает мастер подбора</h2>
            <p className="text-dark-graphite/70">
              Ответьте на несколько вопросов о вашей деятельности, обороте и планах нанимать сотрудников — сервис предложит оптимальную форму ведения бизнеса.
            </p>
            <ul className="space-y-2 text-dark-graphite/80">
              <li>• Финальная рекомендация по НПД, ИП или ООО</li>
              <li>• Перечень обязательных платежей и сроков</li>
              <li>• Список документов для запуска</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-light-gray bg-light-gray/60 p-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-dark-graphite">Пример вопросов мастера</h3>
              <ol className="space-y-3 text-dark-graphite/70">
                <li>1. Какой ожидаемый оборот за первый год?</li>
                <li>2. Планируете работать с юрлицами или физлицами?</li>
                <li>3. Есть ли найм сотрудников в первый год?</li>
                <li>4. Требуется ли сдавать НДС?</li>
                <li>5. Есть ли партнёры или соучредители?</li>
              </ol>
            </div>
          </div>
        </section>

        <section id="comparison" className="rounded-3xl bg-white p-10 shadow-sm">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Сравнение форм бизнеса</h2>
            <p className="text-dark-graphite/70">
              Ключевые показатели по основным формам ведения бизнеса. Подробная таблица доступна в приложении.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-separate border-spacing-y-3">
              <thead className="text-left text-sm uppercase tracking-wide text-dark-graphite/60">
                <tr>
                  <th className="rounded-l-xl bg-light-gray/60 p-4 font-medium">Параметр</th>
                  <th className="bg-light-gray/60 p-4 font-medium">НПД</th>
                  <th className="bg-light-gray/60 p-4 font-medium">ИП</th>
                  <th className="rounded-r-xl bg-light-gray/60 p-4 font-medium">ООО</th>
                </tr>
              </thead>
              <tbody className="text-sm text-dark-graphite/80">
                <tr>
                  <td className="rounded-l-xl bg-light-gray/30 p-4">Регистрация</td>
                  <td className="bg-light-gray/30 p-4">Через приложение &quot;Мой налог&quot;</td>
                  <td className="bg-light-gray/30 p-4">Госпошлина 800 ₽</td>
                  <td className="rounded-r-xl bg-light-gray/30 p-4">Госпошлина 4000 ₽</td>
                </tr>
                <tr>
                  <td className="rounded-l-xl bg-light-gray/30 p-4">Налоги</td>
                  <td className="bg-light-gray/30 p-4">4% с физлиц / 6% с юрлиц</td>
                  <td className="bg-light-gray/30 p-4">УСН 6% или 15%</td>
                  <td className="rounded-r-xl bg-light-gray/30 p-4">УСН / ОСНО / НП</td>
                </tr>
                <tr>
                  <td className="rounded-l-xl bg-light-gray/30 p-4">Предел оборота</td>
                  <td className="bg-light-gray/30 p-4">2,4 млн ₽ / год</td>
                  <td className="bg-light-gray/30 p-4">до 200 млн ₽</td>
                  <td className="rounded-r-xl bg-light-gray/30 p-4">нет ограничений</td>
                </tr>
                <tr>
                  <td className="rounded-l-xl bg-light-gray/30 p-4">Наём сотрудников</td>
                  <td className="bg-light-gray/30 p-4">нет</td>
                  <td className="bg-light-gray/30 p-4">до 130 сотрудников</td>
                  <td className="rounded-r-xl bg-light-gray/30 p-4">нет ограничений</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-dark-graphite">Библиотека документов</h2>
            <p className="mt-3 text-dark-graphite/70">
              Шаблоны заявлений, договоров и регламентов для быстрого запуска. Лёгкий поиск по категориям и жизненным ситуациям.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-dark-graphite">Калькуляторы</h2>
            <p className="mt-3 text-dark-graphite/70">
              Расчёт налогов и обязательных платежей с учётом актуального законодательства и индивидуальных параметров бизнеса.
            </p>
          </div>
        </section>

        <section className="rounded-3xl bg-dark-graphite p-10 text-white">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold">Готовы начать?</h2>
              <p className="text-white/70">
                Заполните мастер подбора и получите персональный план запуска бизнеса — бесплатно.
              </p>
            </div>
            <Link
              href="/wizard"
              className="inline-flex rounded-xl bg-blue-accent px-6 py-3 text-lg font-medium text-white transition hover:bg-blue-accent/90"
            >
              Пройти мастер
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
