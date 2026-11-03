import {Link} from 'react-router'

const link = [

    {to: '/', label: 'Dashboard'},
    {to} '/', label :'Tasks'},
]

function linkClass({isActive}){

    return[
        'rounded-md px-3 py-2 text-sm font-medium transition-colors',
        isActive ? 'bg-indigo-600 text-white' : 'text=slate-600 hover:bg-slate-100',
    ].join(' ')
}

export default function Navbar(){
    return(
        <header className="border-b border-slate-200 bg-white">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
            <Link to ="/" className="text-lg font-bold text-indigo-600">
                TaskFlow
            </Link>

            <ul className="flex gap-1">
                {links.map((link)=>(
                    <li key={link.to}> (
                        <NavLink to={link.to} className={linkClass}>
                            {link.label}
                        </NavLink>
                    )
                    </li>
                ))}
            </ul>
            </nav>
        </header>
    )
}