# Turbo with Next.js

See below for mono-repo structure.

```bash
- apps
  - admin
    - app # include pages
    - components # common components
    - hooks # common hooks
    - mocks # related mocks (e.g. msw)
    - libs # external libraries. Typically managed in package.json
    - public # static resources
    - services # Typically api request...
    - store # global store
    - styles # style related component and settings
    - types # type declaration
    - utils # In general, set of pure functions.
- packages
  - eslint-config
  - typescript-config
  - ui
```

## Getting Started

First, install nvm, node.js and pnpm globally.

```bash
nvm use 18.18.0

node -v
# v18.18.0

npm install --global pnpm@8.15.4

pnpm setup

source ~/.zshrc
# or
source ~/.bashrc
# or
source ~/.profile

```

Second, move project folder and install dependencies.

```bash
cd ./smilegate_fe

pnpm install
```

Third, run the development server:

```bash
# run express mock server for msw (ssr component)
pnpm mock
# develop in local
pnpm local
# test
pnpm test
# lint
pnpm lint
# prettier format
pnpm format
# build local|dev|stg|prod
pnpm build:local
# deploy
pnpm deploy
# clean or clean:build
pnpm clean
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
