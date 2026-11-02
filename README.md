# University of Sindh — LMS UI (Rose Quartz & Soft Blush)

A complete, responsive, frontend-only student portal built with **React 19, Vite, Tailwind CSS v4, Radix UI primitives, and reusable shadcn/ui-style components**.

## Theme direction

A polished student portal using a visible rose-pink accent, pale blush highlights, warm neutral surfaces and soft shadows.

- A clearly visible rose-pink accent for primary actions, selected navigation, links and key indicators.
- Soft blush surfaces for selected states and subtle highlights, not large saturated pink panels.
- Warm ivory neutrals, white cards, charcoal typography and subtle rose-tinted shadows.
- Muted sage, amber and terracotta remain reserved for success, warning and error states.

### Core theme tokens

| Token | Color | Use |
|---|---|---|
| Page background | `#FAF7F8` | Main application canvas |
| Surface | `#FFFFFF` | Cards, forms and panels |
| Primary | `#C45183` | Main buttons, links and active navigation |
| Soft accent | `#FCEAF1` | Selected states and highlights |
| Beige secondary | `#F3EDE3` | Supporting accents |
| Main text | `#302832` | Headings and body text |
| Border | `#EEE3E9` | Card and input boundaries |

## Screens and features

### Authentication
- Student login with Roll Number/CNIC and Passport modes
- Password visibility toggle
- Form validation and demo login feedback
- Consistent public-facing design with the student workspace

### Student workspace
- Responsive collapsible sidebar and top navigation
- Student overview with academic summary cards
- Weekly class schedule snapshot
- Upcoming assignment deadline
- Recent academic activity and notifications
- Profile menu and sign out interaction

### Learning and academic features
- Searchable course cards with attendance and progress indicators
- Course detail expansion with links to materials and assignments
- Weekday timetable with day switching and print action
- Assignment search and status filters
- Assignment submission-preview dialog (demo status only; no real upload)
- Attendance breakdown by course and CSV export
- Examination results with semester/year/exam-type filters and print action
- Announcements category filters and mark-as-read interaction

### Student services
- Fee and payment summary with sample payment history
- Downloadable sample receipt text files
- Eportal, degree programme, virtual classroom, admission, scholarship, downloads, library, profile and support screens


## Technology

- React 19
- Vite
- Tailwind CSS v4
- shadcn/ui-style reusable components
- Radix UI primitives
- Lucide React icons
- `clsx`, `tailwind-merge`, `class-variance-authority`

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Install and run

**Important:** After extracting the ZIP, open the exact folder containing `package.json`. The archive has `package.json` at its root; there is no extra nested project folder.

```powershell
npm install
npm run dev
```

Open the URL printed by Vite, normally `http://localhost:5173`.

## Production build

```powershell
npm run build
npm run preview
```

Vite writes the production output to `dist/`.

## Demo login

Enter any non-empty student ID and password. The UI opens the student dashboard. No credentials are transmitted and no backend is connected.

## GitHub and Vercel deployment

1. Create an empty GitHub repository.
2. In this folder, run `git init`, `git add .`, `git commit -m "Initial LMS theme"`, and `git branch -M main`.
3. Add your GitHub remote and run `git push -u origin main`.
4. Import the repository in Vercel using the **Vite** framework preset.
5. Build command: `npm run build`; output directory: `dist`.

## Demo data and integration notes

All student names, course records, timetable entries, grades, attendance, announcements, fee amounts and payment references are illustrative. They are not official university records. This package is frontend-only.

Before production use, connect the university authentication and APIs, add secure server-side authorization, implement actual file upload and payment verification, replace the placeholder emblem with the official logo, and test accessibility and mobile layouts.

## Project structure

```text
university-lms-pink/
├── public/
├── src/
│   ├── components/
│   │   ├── dashboard/
│   │   ├── layout/
│   │   └── ui/
│   ├── lib/
│   ├── pages/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── components.json
├── index.html
├── package.json
├── vite.config.js
└── README.md
```
