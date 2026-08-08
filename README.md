# YNF Frontend

Standalone marketing website for Your Next Festival with a `/demo` entrypoint that proxies role login into the festival application demo environment.

## Why this exists

- Keep marketing/website iteration separate from product app changes.
- Deploy content and design updates without touching core festival app code.
- Provide a clean `demo` experience that points to the live demo environment.

## Local setup

1. `cp .env.example .env.local`
2. Set `YNF_DEMO_BASE_URL` to your demo app URL (for local backend use `http://localhost:8000`).
3. Set `YNF_DEMO_SHARED_KEY` if backend demo login routes are key-protected.
4. `npm install`
5. `npm run dev`

## Demo flow

- `GET /demo` renders role buttons.
- Buttons call `GET /api/demo-login/{role}` in this frontend.
- The API route redirects to `${YNF_DEMO_BASE_URL}/demo/login/{role}` and appends `?key=` when configured.

## Git repository split

This project should live as a sibling directory to the backend repository, for example:

- `/Users/robhowdle/Sites/festival-schedule`
- `/Users/robhowdle/Sites/ynf-frontend`

To initialize as an independent repo:

1. `cd /Users/robhowdle/Sites/ynf-frontend`
2. `git init`
3. `git add .`
4. `git commit -m "Initial ynf frontend scaffold"`
5. Create remote repository and push.

## Deployment model

- Deploy this repo to your marketing host (e.g., Vercel/Netlify).
- Deploy `festival-schedule` repo to dedicated app environments (demo/staging/prod).
- Keep only environment URLs and access keys shared between repos.
