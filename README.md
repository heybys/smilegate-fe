# Smilegate FrontEnd

See below for mono-repo structure.

```bash
- apps
  - admin
- packages
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

Second, run the development server:

```bash
# develop
pnpm dev
# test
pnpm test
# lint
pnpm lint
# build
pnpm build
# deploy
pnpm deploy
# clean
pnpm clean
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
