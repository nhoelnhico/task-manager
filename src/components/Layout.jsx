import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import ErrorBoundary from "./ErrorBoundary";
import Navbar from "./Navbar";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-slate-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-indigo-700 focus:shadow"
      >
        Skip to main content
      </a>
      <Navbar />
      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto max-w-5xl px-4 py-6 focus:outline-none sm:py-8"
      >
        <ErrorBoundary key={pathname}>
          <Outlet />
        </ErrorBoundary>
      </main>
    </div>
  );
}
