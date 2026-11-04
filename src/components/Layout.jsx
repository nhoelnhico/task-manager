import { Outlet } from 'react-router'
import Navbar from './Navbar'

export default function Layout(){
return(
    <div className="min-h-screen bg-slate-50">
        <Navbar />
        <main className="mx-auto max-w-5xl px-4 py-6 sm:py-8">
            <Outlet />

        </main>
    </div>
)

}