import { Outlet } from "react-router-dom";
import CartTab from "./CartTab";
import Header from "./Header";

function Layout() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            <nav className="bg-[#BCC6A8] dark:bg-gray-800 p-4 shadow-md transition-colors">
                <Header />
            </nav>
            <main className="container mx-auto py-4 text-gray-900 dark:text-gray-100">
                <Outlet />
            </main>
            <CartTab />
        </div>
    );
}

export default Layout;