import { useState } from "react"
import { Link } from 'react-router-dom'
function Sidebar() {
    const [navToggel, setNavToggel] = useState(false)
    return <>

    {/* sidebar toggle */}
        <div className={`${navToggel ? 'lg:hidden md:hidden' : "hidden"}`}>
            <div className=" bg-slate-800 p-4 text-slate-100">
                <ul className="flex gap-4 items-center justify-end ">
                    <li>
                        <Link to="/"> 1) Charts and map</Link>
                    </li>
                    <li>
                        <Link to="/contact"> 2) Contact</Link>
                    </li>
                </ul>
            </div>

        </div>

        {/* hamburger menu */}
        <button onClick={e => setNavToggel(!navToggel)} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only ">Open sidebar</span>
            <i className="bi bi-list"></i>
        </button>

        {/* Links for pages */}
        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-[15%]   h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidenav">
            <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-blue-950 dark:border-gray-700">
                <ul className="space-y-2">
                    <li>
                        <Link to="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:font-bold dark:text-white hover:bg-gray-100 dark:hover:bg-green-500 group">
                            <i className="bi bi-person"></i>
                            <span className="ml-3">Contact</span>
                        </Link>
                    </li>
              
                    <li>
                        <Link to="/chart" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:font-bold dark:text-white hover:bg-gray-100 dark:hover:bg-green-500 group">
                         <i className="bi bi-map"></i>
                            <span className="ml-3">Charts & Maps</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    </>

}

export default Sidebar