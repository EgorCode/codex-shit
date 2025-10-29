import Link from 'next/link'
import { comparison } from '@/lib/wizard-data'

export default function ComparisonPage() {
  return (
    <main className="min-h-screen bg-light-gray px-6 py-16 text-dark-graphite">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <header className="space-y-4">
          <Link href="/" className="inline-flex text-sm text-blue-accent hover:text-blue-accent/80">
            ← На главную
          </Link>
          <div className="space-y-3">
            <h1 className="text-4xl font-semibold">Сравнение форм бизнеса</h1>
            <p className="text-lg text-dark-graphite/70">
              Детальное сравнение НПД, ИП и ООО по ключевым параметрам для быстрого принятия решений.
            </p>
          </div>
        </header>

        <div className="space-y-6 rounded-3xl bg-white p-8 shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-separate border-spacing-y-2">
              <thead className="text-left text-sm uppercase tracking-wide text-dark-graphite/60">
                <tr>
                  <th className="w-[30%] rounded-l-xl bg-light-gray/60 p-4 font-medium">Параметр</th>
                  <th className="bg-light-gray/60 p-4 font-medium">НПД</th>
                  <th className="bg-light-gray/60 p-4 font-medium">ИП</th>
                  <th className="rounded-r-xl bg-light-gray/60 p-4 font-medium">ООО</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="rounded-l-xl bg-light-gray/30 p-4 font-medium">Регистрация</td>
                  <td className="bg-light-gray/30 p-4 text-sm">{comparison[0].registration}</td>
                  <td className="bg-light-gray/30 p-4 text-sm">{comparison[1].registration}</td>
                  <td className="rounded-r-xl bg-light-gray/30 p-4 text-sm">{comparison[2].registration}</td>
                </tr>
                <tr>
                  <td className="rounded-l-xl bg-light-gray/30 p-4 font-medium">Налоги</td>
                  <td className="bg-light-gray/30 p-4 text-sm">{comparison[0].taxes}</td>
                  <td className="bg-light-gray/30 p-4 text-sm">{comparison[1].taxes}</td>
                  <td className="rounded-r-xl bg-light-gray/30 p-4 text-sm">{comparison[2].taxes}</td>
                </tr>
                <tr>
                  <td className="rounded-l-xl bg-light-gray/30 p-4 font-medium">Лимит оборота</td>
                  <td className="bg-light-gray/30 p-4 text-sm">{comparison[0].revenueLimit}</td>
                  <td className="bg-light-gray/30 p-4 text-sm">{comparison[1].revenueLimit}</td>
                  <td className="rounded-r-xl bg-light-gray/30 p-4 text-sm">{comparison[2].revenueLimit}</td>
                </tr>
                <tr>
                  <td className="rounded-l-xl bg-light-gray/30 p-4 font-medium">Наём сотрудников</td>
                  <td className="bg-light-gray/30 p-4 text-sm">{comparison[0].employees}</td>
                  <td className="bg-light-gray/30 p-4 text-sm">{comparison[1].employees}</td>
                  <td className="rounded-r-xl bg-light-gray/30 p-4 text-sm">{comparison[2].employees}</td>
                </tr>
                <tr>
                  <td className="rounded-l-xl bg-light-gray/30 p-4 font-medium">Бухгалтерия</td>
                  <td className="bg-light-gray/30 p-4 text-sm">{comparison[0].accounting}</td>
                  <td className="bg-light-gray/30 p-4 text-sm">{comparison[1].accounting}</td>
                  <td className="rounded-r-xl bg-light-gray/30 p-4 text-sm">{comparison[2].accounting}</td>
                </tr>
                <tr>
                  <td className="rounded-l-xl bg-light-gray/30 p-4 font-medium">Вывод средств</td>
                  <td className="bg-light-gray/30 p-4 text-sm">{comparison[0].withdrawal}</td>
                  <td className="bg-light-gray/30 p-4 text-sm">{comparison[1].withdrawal}</td>
                  <td className="rounded-r-xl bg-light-gray/30 p-4 text-sm">{comparison[2].withdrawal}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-dark-graphite">НПД</h3>
            <div className="space-y-2 text-sm text-dark-graphite/70">
              <p className="font-medium text-success-green">Подходит для:</p>
              <ul className="space-y-1">
                <li>• Фрилансеров и специалистов</li>
                <li>• Малого оборота (до 2,4 млн ₽)</li>
                <li>• Работы без найма сотрудников</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-dark-graphite">ИП</h3>
            <div className="space-y-2 text-sm text-dark-graphite/70">
              <p className="font-medium text-success-green">Подходит для:</p>
              <ul className="space-y-1">
                <li>• Малого и среднего бизнеса</li>
                <li>• Найма сотрудников (до 130)</li>
                <li>• Работы с юрлицами</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-dark-graphite">ООО</h3>
            <div className="space-y-2 text-sm text-dark-graphite/70">
              <p className="font-medium text-success-green">Подходит для:</p>
              <ul className="space-y-1">
                <li>• Крупного бизнеса</li>
                <li>• Партнёрских проектов</li>
                <li>• Защиты личного имущества</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-dark-graphite p-8 text-white">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold">Не уверены в выборе?</h2>
              <p className="text-white/70">
                Пройдите мастер подбора и получите персональную рекомендацию с учётом ваших целей и планов.
              </p>
            </div>
            <Link
              href="/wizard"
              className="inline-flex rounded-xl bg-blue-accent px-6 py-3 text-lg font-medium text-white transition hover:bg-blue-accent/90"
            >
              Пройти мастер
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
