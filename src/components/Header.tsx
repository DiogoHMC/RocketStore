import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

function Header() {
    return(
        <header className="container mx-auto flex justify-between items-center">
            <div className="text-xl font-bold text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 bg-[#C1B8AD] dark:bg-gray-700 rounded-md p-2 transition-colors">
                <Link to="/">Rocket Store</Link>
            </div>
            <div className="flex items-center gap-4">
                <DarkModeToggle />
            </div>
        </header>
    )
}

export default Header;