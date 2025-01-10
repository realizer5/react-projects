import { NavLink, Link } from "react-router-dom"

export default function Header() {
    return (
        <>
            <nav className="flex p-4 shadow-md sticky mb-8">
                <div>
                    <Link to="/" >
                        <img src="https://avatars.pfptown.com/559/cyberpunk-pfp-1666.png" alt="Logo"
                            className="h-10 rounded-full" />
                    </Link>
                </div>
                <ul className="flex space-x-4 items-center ms-auto">
                    <li>
                        <NavLink to="/" className={({ isActive }) => `${isActive ? "text-orange-700"
                            : "text-gray-700"}`} >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => `${isActive ? "text-orange-700"
                            : "text-gray-700"}`}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => `${isActive ? "text-orange-700"
                            : "text-gray-700"}`}>Contact</NavLink></li>
                    <li>
                        <NavLink to="/github" className={({ isActive }) => `${isActive ? "text-orange-700"
                            : "text-gray-700"}`}>Github</NavLink>
                    </li>
                </ul>
            </nav >
        </>
    )
}

