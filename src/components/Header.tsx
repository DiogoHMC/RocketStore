import { Link } from "react-router-dom";

function Header() {
    return(
        <header className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold text-[#333333]">
                    <Link to="/">Rocket Store</Link>
                </div>
        </header>
    )
}

export default Header;