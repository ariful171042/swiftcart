import { useState } from "react";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserResponce } from "../types/api-types";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";

const Header = ({ user }: UserResponce) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);



  const logoutHandler = async() => {
    try {
      await signOut(auth)
      
      toast.success("Sign Out successfully")
      setIsOpen(false);
    } catch (error) {
      toast.error("Sign Out Faild")
    }
  };
  return (
    <nav className="header">
      <Link to={"/"} onClick={() => setIsOpen(false)}>
        Home
      </Link>
      <Link to={"/search"} onClick={() => setIsOpen(false)}>
        <FaSearch />
      </Link>
      <Link to={"/cart"} onClick={() => setIsOpen(false)}>
        <FaShoppingBag />
      </Link>

      {user?._id ? (
        <>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <FaUser />
          </button>
          <dialog open={isOpen}>
            <div>
              {user.role === "admin" && (
                <Link to={"/admin/dashboard"}>Admin</Link>
              )}

              <Link to={"orders"} onClick={() => setIsOpen(false)}>
                Orders
              </Link>
              <button onClick={logoutHandler}>
                <FaSignOutAlt />
              </button>
            </div>
          </dialog>
        </>
      ) : (
        <Link to={"/login"} onClick={() => setIsOpen(false)}>
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;
