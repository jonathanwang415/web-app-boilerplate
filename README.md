# Web App Boilerplate

A modern, full-stack web application boilerplate built with Next.js, React, Radix UI, Redis, and SQLite. This project is optimized for rapid development with Cursor AI assistance and includes everything you need to build production-ready web applications.

## 🚀 Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled UI components

### Backend

- **Next.js API Routes** - Serverless API endpoints
- **SQLite** - Lightweight database for development
- **Redis** - In-memory data store for caching and sessions
- **JWT** - JSON Web Tokens for authentication

### Development Tools

- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **Husky** - Git hooks for code quality
- **TypeScript** - Static type checking

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication endpoints
│   │   └── users/         # User management endpoints
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   ├── button.tsx    # Button component
│   │   ├── card.tsx      # Card component
│   │   ├── dialog.tsx    # Dialog component
│   │   └── input.tsx     # Input component
│   └── layout/           # Layout components
│       ├── header.tsx    # Header component
│       └── footer.tsx    # Footer component
├── database/             # Database configuration
│   ├── redis.ts          # Redis client and utilities
│   └── sqlite.ts         # SQLite database setup
├── lib/                  # Utility functions
│   ├── utils.ts          # Common utilities
│   └── validations.ts    # Zod validation schemas
├── middleware/           # Custom middleware
│   └── auth.ts           # Authentication middleware
├── types/                # TypeScript type definitions
│   └── index.ts          # Common types
├── constants/            # Application constants
│   └── index.ts          # App constants
└── hooks/                # Custom React hooks
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- Redis server (for caching and sessions)

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd web-app-boilerplate
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp env.example .env.local
   ```

   Edit `.env.local` with your configuration:

   ```env
   DATABASE_URL=sqlite:./database.sqlite
   REDIS_URL=redis://localhost:6379
   JWT_SECRET=your-super-secret-jwt-key
   JWT_EXPIRES_IN=7d
   NODE_ENV=development
   ```

4. **Start Redis server**

   ```bash
   # On macOS with Homebrew
   brew services start redis

   # On Ubuntu/Debian
   sudo systemctl start redis

   # Or using Docker
   docker run -d -p 6379:6379 redis:alpine
   ```

5. **Initialize the database**

   ```bash
   npm run db:init
   ```

6. **Start the development server**

   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📚 Available Scripts

```bash
# Development
npm run dev              # Start development server with Turbopack
npm run build            # Build for production
npm run start            # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint errors
npm run format           # Format code with Prettier
npm run format:check     # Check code formatting
npm run type-check       # Run TypeScript type checking

# Database
npm run db:init          # Initialize SQLite database
npm run redis:start      # Start Redis server

# Git Hooks
npm run prepare          # Install Husky git hooks
```

## 🔧 Configuration

### Database Setup

The project uses SQLite for development and includes automatic table creation. The database file will be created at `./database.sqlite` when you first run the application.

**Tables created automatically:**

- `users` - User accounts and profiles
- `sessions` - User sessions and tokens

### Redis Configuration

Redis is used for:

- Session management
- API response caching
- Temporary data storage

Make sure Redis is running on `localhost:6379` or update the `REDIS_URL` in your environment variables.

### Authentication

The project includes JWT-based authentication with:

- User registration and login
- Session management with Redis
- Protected API routes
- Middleware for route protection

## 🎨 UI Components

The project includes a comprehensive set of UI components built with Radix UI:

- **Button** - Various button styles and sizes
- **Card** - Content containers with header, body, and footer
- **Dialog** - Modal dialogs and overlays
- **Input** - Form input fields
- **And more...**

All components are fully typed with TypeScript and styled with Tailwind CSS.

## 🔌 API Endpoints

### Authentication

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Users

- `GET /api/users` - Get all users (with pagination)
- `POST /api/users` - Create a new user

### Example API Usage

```typescript
// Register a new user
const response = await fetch("/api/auth/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: "user@example.com",
    password: "password123",
    name: "John Doe",
  }),
});

const data = await response.json();
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

**Note:** For production deployments, consider using PostgreSQL instead of SQLite and a managed Redis service.

## 🧪 Development with Cursor

This project is optimized for development with Cursor AI. It includes:

- **`.cursorrules`** - Comprehensive rules for AI assistance
- **`.cursorignore`** - Files to ignore during AI analysis
- **Type-safe patterns** - Full TypeScript support
- **Consistent code structure** - Predictable file organization

### Cursor-Specific Features

- AI-powered code generation following project patterns
- Intelligent refactoring suggestions
- Context-aware debugging assistance
- Automated test generation

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Radix UI Documentation](https://www.radix-ui.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [TypeScript Documentation](https://www.typescriptlang.org)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) team for the amazing framework
- [Radix UI](https://www.radix-ui.com) for accessible components
- [Tailwind CSS](https://tailwindcss.com) for the utility-first approach
- [Vercel](https://vercel.com) for the deployment platform
