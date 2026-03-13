# UniCar — Final Presentation Reliability Report

**Purpose:** Maximize demo impact and minimize risk in front of judges. No new features or redesigns; presentation only.

---

## 1. Strongest demo flow (30–45 seconds)

Use this path for maximum impact and clarity:

| Step | Screen | Action | Why |
|------|--------|--------|-----|
| 1 | **Start at `/home`** | Open app already logged in (see §4) | Avoids auth form and shows product immediately. |
| 2 | **Home** | Briefly show: header (“Hola, Ana”), map, **Buscar plaza** / **Ofrecer mi viaje**, stats bar, “Cerca de ti” with ride cards. | Establishes value: find/offer rides, map, live stats, nearby rides. |
| 3 | **Tap “Buscar plaza”** | Go to Search. | Core action: find a ride. |
| 4 | **Search** | Show 6 results, maybe tap one origin pill (e.g. “Roquetas”). | Proves search works and list is full. |
| 5 | **Tap one RideCard** (e.g. Roquetas → UAL, Carlos) | Open Ride detail. | Shows trust (ratings, verification, route) and main CTA. |
| 6 | **Ride detail** | Point out: conductor card, ratings, route, “Solicitar plaza” or “Solicitud aceptada”. Optionally tap **Mensaje**. | Strongest screen: trust + action. |
| 7 | **Back to Home** | Tap **Mis viajes** in the secondary CTA. | Shows “my trips” hub. |
| 8 | **My Trips** | Show Próximos viajes + Solicitudes enviadas (and optionally Chat entry). | Proves the loop: requests and upcoming rides. |

**Optional shortcut (if time is tight):** Home → Buscar plaza → Ride detail (t1 or t2) → back to Home. That’s ~20–25 seconds and still tells the story.

---

## 2. Screens to show (reliable and strong)

- **`/home`** — Map, CTAs, stats, trust block, EcoImpact, “Cerca de ti”, “Rutas que encajan”. All populated with demo data.
- **`/search`** — 6 trips, filter pills, “Viajes disponibles”. Strong.
- **`/ride/:id`** (e.g. `t1`, `t2`, `t3`, `t4`) — Full driver card, ratings, route, plazas, notes. Use a ride where Ana already has “Solicitud aceptada” (e.g. t1) or “Solicitar plaza” (e.g. t3) to show both states.
- **`/trips`** — Próximos viajes, Solicitudes enviadas (and received if you ever show as driver). Looks full.
- **`/chat`** — 6 conversations. Strong.
- **`/chat/c1`** (or c2, c3) — Thread with messages. Good for “coordinate with driver”.
- **`/profile`** — Ana’s profile, trust stats, “Mis viajes” shortcut. Do **not** tap menu items that toast “Próximamente” (see §3).
- **`/create`** — Optional: one quick run (origin → next → next → publish) if you want to show “offer a ride”. Multi-step is clear but takes time.

---

## 3. Screens / actions to avoid

- **`/` (root)** — Redirects to `/auth` or `/home`. Start directly at **`/home`** with session set so judges never see login unless you choose to.
- **`/auth`** — Only show if you explicitly want to demonstrate “UAL-only sign-in”. Risk: wrong email, validation errors, “Próximamente” on “¿Olvidaste tu contraseña?”.
- **`/onboarding`** — Skip in the 30–45 s flow. Use only if you want to tell the product story with the three slides first.
- **`/ride/fake-id` or invalid `/chat/id`** — Leads to “Este viaje ya no está disponible” / “Esta conversación no existe”. Do not open invalid IDs.
- **Profile menu items** that only toast “Próximamente”: “Mis valoraciones”, “Centro de reportes”, “Mi impacto ambiental”, “Configuración”, “Ayuda y soporte”. Avoid clicking these during the main flow.
- **Home** — Do not tap the bell (Notificaciones) or “¿Olvidaste tu contraseña?” — both show “próximamente” toasts.
- **Search** — Do not apply a filter that returns 0 results (e.g. an origin with no trips) unless you want to show the empty state on purpose.
- **404** — Do not navigate to unknown routes (e.g. `/xyz`).

---

## 4. Weak or empty-looking spots (mitigated)

- **“Viajes hoy” on Home** — Was at risk of being 0 when demo trip dates didn’t match the presentation day. **Fixed:** first three demo trips now use “today” (`demoToday`) so “Viajes hoy” is always ≥ 3 when you run the app on the demo day.
- **EcoImpact (Home)** — Uses “accepted shared rides” (demo: 2). Numbers are small (2 coches, ~5 kg CO₂, ~9 L) but not empty; fine to show.
- **“Rutas que encajan contigo”** — With 6 trips, the first 3 go to “Cerca de ti” and the next 3 to “Rutas que encajan”, so the section is populated. No empty state in normal demo.
- **My Trips – Viajes pasados** — Empty in demo (all trips are today or future). Acceptable; you can say “here’s where past trips will appear.”
- **My Trips – Solicitudes recibidas** — Empty for Ana (she’s not a driver in demo data). Acceptable; same one-line explanation if asked.

---

## 5. Product story (visually clear?)

Yes, if you follow the recommended flow:

1. **Home** — “Find or offer a ride to UAL; here’s the map and today’s activity.”
2. **Search** — “See available rides and filter by origin.”
3. **Ride detail** — “See who’s driving, their ratings and trust signals, route, and request a seat or message.”
4. **My Trips** — “My upcoming rides and my requests (accepted/pending/rejected).”
5. **Chat** — “Coordinate with drivers/passengers from my trips.”

Trust and safety are visible on Home (“Viaja con confianza”), on Ride detail (verification, ratings, cancelación, report), and in Chat (banner). No need to open Report or deep settings.

---

## 6. Pre-presentation checklist

- [ ] **Session:** Open the app at **`/home`** or log in once (e.g. `ana.torres@inlumine.ual.es` + any password ≥ 6 chars) so the demo starts on Home.
- [ ] **Refresh:** Reload once before presenting so “Viajes hoy” and list data are fresh (demo data uses “today” for t1–t3).
- [ ] **Ride to show:** Prefer **`/ride/t1`** (Carlos, Roquetas → UAL, “Solicitud aceptada”) or **`/ride/t3`** (Alejandro, “Solicitar plaza”) so you don’t have to request during the demo.
- [ ] **Tabs:** Close or avoid tabs that might have logged-out or stale state; use one clean tab at `/home`.
- [ ] **Network:** If the map loads tiles from Carto, ensure connectivity so the map doesn’t stay blank (optional: test offline once to see fallback).
- [ ] **Don’t:** Tap “Notificaciones”, “Filtros avanzados”, “¿Olvidaste tu contraseña?”, or Profile “Próximamente” items during the main flow.

---

## 7. One-line summary

**Strongest 30–45 s flow:** Start at **`/home`** (logged in) → **Buscar plaza** → open one **Ride** (e.g. t1 or t3) → back → **Mis viajes**. Avoid auth, onboarding, invalid URLs, and any action that only shows “Próximamente”. “Viajes hoy” is now safe for any presentation day.
