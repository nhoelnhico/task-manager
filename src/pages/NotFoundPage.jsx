import {Link} from 'react-router'

export default function NotFoundPage(){
    return (
        <section className="py-12 text-center">
        <p className="text-5xl font-bold text-indigo-600">404</p>
        <h1 className="mt-4 text-2xl font-bold text-slate-900">Page not found</h1>
        <Link
            to="/"
            className="mt-6 inline block rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                Go to Dashboard
            </Link>
        </section>
    )
}