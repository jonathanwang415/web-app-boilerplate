export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <p className="text-center text-sm leading-loose text-muted-foreground">
          Built with Next.js, React, and Radix UI. The source code is available
          on{" "}
          <a
            href="https://github.com/jonathanwang415/web-app-boilerplate"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4 hover:text-primary transition-colors"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
