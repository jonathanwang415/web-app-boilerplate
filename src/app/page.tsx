import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Database, Palette, Zap, Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Web App Boilerplate
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A modern, full-stack web application boilerplate built with Next.js,
            React, Radix UI, Redis, and SQLite. Ready for rapid development.
          </p>
        </section>

        {/* Features Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Next.js 15</CardTitle>
                <CardDescription>
                  Latest Next.js with App Router, Server Components, and
                  Turbopack
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Palette className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Radix UI</CardTitle>
                <CardDescription>
                  Accessible, unstyled UI components with full customization
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Database className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Database Ready</CardTitle>
                <CardDescription>
                  SQLite for development, Redis for caching and sessions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Rocket className="h-8 w-8 text-primary mb-2" />
                <CardTitle>TypeScript</CardTitle>
                <CardDescription>
                  Full TypeScript support with strict type checking
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
