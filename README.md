# UniCar — Tu viaje compartido

Carpooling app for the University of Almería (UAL) community. Find or offer rides, reduce your carbon footprint, and move around campus and the city in a simple way.

## Features

- **Browse rides** — Home and search with map; filter by date and route
- **Ride details** — Origin, destination, time, driver info, available seats
- **Request a seat** — Request to join a ride; see status (Pending / Accepted / Rejected)
- **My trips** — View rides you drive or requested
- **Create a ride** — Publish a trip as a driver
- **Profile** — Basic profile and verification badge
- **Chat** — In-app messaging (demo data; ready for backend)
- **Trust & reports** — Cancellation rate, reliability, report flow

## Tech stack

- **Frontend:** React 18, TypeScript, Vite
- **UI:** Tailwind CSS, shadcn/ui, Framer Motion, Leaflet (maps)
- **State:** React context + in-memory state (MVP); Supabase client wired for future backend
- **Auth:** Demo session (UAL email check); ready to plug Supabase Auth

## Getting started

### Prerequisites

- Node.js 18+ and npm (or [nvm](https://github.com/nvm-sh/nvm))

### Install and run

```bash
# Clone the repository
git clone <repository-url>
cd unicar-tu-viaje-compartido-main

# Install dependencies
npm install

# Configure environment (required for Supabase if you enable it)
cp .env.example .env
# Edit .env and set your VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

**Demo login:** Use any email ending in `@inlumine.ual.es` (e.g. `demo@inlumine.ual.es`) and any password (min. 6 characters). The app uses demo auth and in-memory data.

### Scripts

| Command        | Description              |
|----------------|--------------------------|
| `npm run dev`  | Start dev server         |
| `npm run build`| Production build         |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint               |
| `npm run test` | Run Vitest               |

## Project structure

```
src/
  components/   # Reusable UI (RideCard, BottomNav, maps, etc.)
  pages/        # Route-level screens (Home, Search, RideDetail, Auth, etc.)
  state/        # App state and context
  lib/          # Auth helpers, utils
  data/         # Demo/seed data
  integrations/ # Supabase client and types
public/         # Static assets
```

## Environment variables

| Variable                      | Description                    |
|------------------------------|--------------------------------|
| `VITE_SUPABASE_URL`          | Supabase project URL           |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Supabase anon/public key    |
| `VITE_SUPABASE_PROJECT_ID`   | Supabase project ID (optional) |

Copy `.env.example` to `.env` and fill in your values. **Do not commit `.env`** — it is listed in `.gitignore`.

## MVP status

- **Working:** Login (demo), home, search, ride detail, request seat, my trips, create ride, profile, chat UI, reports, trust indicators.
- **In-memory only:** Trips and requests are stored in React state; refresh loses new data. Supabase client is present for a future backend migration.

## License

Private / educational use (UAL project).
