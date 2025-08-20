# Streamfi Community

Welcome to the **Streamfi Community** repo — the companion project to the [main Streamfi app](https://github.com/StreamFi-x/streamfi-frontend). This repo is focused on building the community layer of the Streamfi ecosystem — features like social interactions, user discussions, DAO governance, rewards, and other decentralized engagement tools.

---

## 🌐 What is Streamfi?

Streamfi is a decentralized, Web3-powered streaming platform that empowers creators and viewers through token incentives, NFTs, and transparent monetization.

The **Community** side of Streamfi focuses on creating a dynamic and collaborative environment where users can:

- Participate in DAO voting
- Join creator communities
- Engage in fan discussions
- Earn rewards for participation
- Help shape the future of Streamfi

---

## 📦 Tech Stack

- Framework: Next.js / React
- Blockchain: Ethereum / Polygon / Other EVM chain
- Smart Contracts: Solidity (if applicable)
- Styling: Tailwind CSS / ShadCN
- State: Wagmi, Zustand
- Wallet: RainbowKit / Web3Modal

---

## 🚀 Getting Started

```bash

git clone https://github.com/StreamFi-x/streamfi-community.git
cd streamfi-community


npm install


npm run dev

```

## 🛠️ Development Tools

This project uses several development tools to maintain code quality:

### Code Quality

- **ESLint**: Code linting and error detection
- **Prettier**: Code formatting
- **lint-staged**: Run linters on staged files before commits

### Commit Message Validation

- **Husky**: Git hooks for pre-commit and commit-msg validation
- **commitlint**: Enforces conventional commit message format

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Run ESLint with auto-fix
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

### Commit Message Format

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification. See [COMMIT_GUIDE.md](./COMMIT_GUIDE.md) for detailed information.

**Format**: `type: description`

**Examples**:

- `feat: add user authentication`
- `fix: resolve login button issue`
- `docs: update README with setup guide`
- `style: format code with prettier`

Invalid commit messages will be rejected with a helpful error message.
