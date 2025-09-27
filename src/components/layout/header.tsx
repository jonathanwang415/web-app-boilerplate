"use client";

import { Button } from "@/components/ui/button";
import { Menu, User, Settings } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-14 items-center justify-between">
        <div className="flex items-center">
          <Link className="flex items-center space-x-2" href="/">
            <span className="font-bold">Web App Boilerplate</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </nav>
      </div>
    </header>
  );
}
