# Инструкция по настройке окружения

## Требования
- Node.js 18.17+
- npm или yarn
- PostgreSQL 14+ (опционально для разработки)

## Быстрый старт

### 1. Клонирование и установка зависимостей
```bash
git clone <repository-url>
cd yurgid-business
npm install
```

### 2. Настройка переменных окружения
```bash
cp .env.example .env.local
```

Отредактируйте `.env.local` при необходимости.

### 3. Запуск проекта
```bash
npm run dev
```

Откройте http://localhost:3000 в браузере.

## Работа с базой данных (опционально)

Для полной функциональности с БД:

```bash
# Установка PostgreSQL локально или использование Docker
docker run --name yurgid-postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres

# Применение схемы Prisma
npx prisma db push

# Открытие Prisma Studio
npm run db:studio
```

## Скрипты для разработки

- `npm run dev` — запуск в режиме разработки
- `npm run build` — сборка для продакшена
- `npm run lint` — проверка кода
- `npm run type-check` — проверка типов TypeScript

## Рекомендуемые расширения VSCode
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- Prisma
