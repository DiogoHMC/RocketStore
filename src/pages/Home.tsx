import Menu from "../components/Menu";

function Home() {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold text-[#555555] mb-6">Welcome to Rocket Store</h1>
            <p className="text-xl text-gray-600 mb-8">Discover our amazing products</p>
            <Menu />
        </div>
    );
}

export default Home;