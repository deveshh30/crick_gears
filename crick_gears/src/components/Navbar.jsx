import { Link } from "react-router-dom";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="bg-green-700 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        🏏 Crik.Gears
      </Link>

      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/products" className="hover:underline">Products</Link>
        <Link to="/" className="hover:underline">Bats</Link>
        <Link to="/" className="hover:underline">Balls</Link>
        <Link to="/" className="hover:underline">Accessories</Link>

        {!user ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register" className="bg-white text-green-700 px-3 py-1 rounded">
              Register
            </Link>
          </>
        ) : (
          <span className="font-semibold">Hi, {user.name}</span>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
