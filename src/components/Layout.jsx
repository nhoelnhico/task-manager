import { Outlet, useLocation } from 'react-router'
import ErrorBoundary from './ErrorBoundary'
import Navbar from './Navbar'

export default function Layout() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-6 sm:py-8">
        <ErrorBoundary key={location.pathname}>
          <Outlet />
        </ErrorBoundary>
      </main>
    </div>
  )
}