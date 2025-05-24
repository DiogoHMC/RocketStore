import { Outlet } from "react-router-dom";
import CartTab from "./CartTab";
import Header from "./Header";
function Layout() {
    return (
        <div>
            <nav className="bg-[#BCC6A8] p-4 shadow-md">
                <Header />
            </nav>
            <main className="container mx-auto py-4">
                <Outlet />
            </main>
            <CartTab />
        </div>
    );
}

export default Layout;