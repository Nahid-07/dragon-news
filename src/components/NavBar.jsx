import { useContext, useState } from "react";
import { Menu, X, User } from "lucide-react";
import { Link } from "react-router";
import { AuthContext } from "../provider/Context";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  return (
    <nav className="w-full z-50">
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between h-16 items-center">
          {/* Left Side - Empty */}
          <div className="w-20 whitespace-nowrap font-bold">{user?.displayName}</div>

          {/* Center Menu - Desktop */}
          <div className="hidden md:flex space-x-8 text-gray-800 font-medium">
            <Link to={"/"} className="hover:text-blue-500">
              Home
            </Link>
            <Link href="#about" className="hover:text-blue-500">
              About
            </Link>
            <Link href="#career" className="hover:text-blue-500">
              Career
            </Link>
          </div>
          {/* Right Side - Profile & Login */}
          <div className="flex items-center gap-3">
            {
              user?.photoURL ? <img className="w-10 h-10 text-gray-700 rounded-full" src={user?.photoURL} alt="user image" /> : <User className="w-6 h-6 text-gray-700" />
            }
            {user && user?.email ? (
              <button
                onClick={() => logOut()}
                className="px-4 py-1 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
              >
                Log out
              </button>
            ) : (
              <Link
                to={"/auth/login"}
                className="px-4 py-1 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
              >
                Login
              </Link>
            )}

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="px-4 py-3 space-y-2 text-gray-700 font-medium">
            <Link href="#home" className="block hover:text-blue-500">
              Home
            </Link>
            <Link href="#about" className="block hover:text-blue-500">
              About
            </Link>
            <Link href="#career" className="block hover:text-blue-500">
              Career
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
