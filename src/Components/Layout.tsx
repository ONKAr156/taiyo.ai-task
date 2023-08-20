import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function Layout() {
    // To run both Chart_map & contact jsx on a single column 
    return <>
        <Sidebar />
        <Outlet />
    </>
}

export default Layout