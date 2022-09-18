import logo from "../../Assets/Images/favicon.jpg";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="bg-[#2d2c3c] sticky top-0 z-20 flex justify-between pr-5 align-middle place-items-center">
      <div className="flex flex-row align-middle place-items-center">
        <img src={logo} className="w-16"></img>
        <span className="text-lg capitalize text-transparent bg-gradient-to-r from-[#dfbd69] to-[#926f34] bg-clip-text font-bold  decoration-white decoration-dotted underline-offset-4 transition ">
          BLOGS
        </span>
      </div>
      <div className="gap-x-5 flex">
        <Link
          to="/"
          className="text-transparent bg-gradient-to-r from-[#dfbd69] to-[#926f34] bg-clip-text font-bold hover:underline decoration-white decoration-dotted underline-offset-4 transition "
        >
          Home
        </Link>
        <Link
          to="/form"
          className="text-transparent bg-gradient-to-r from-[#dfbd69] to-[#926f34] bg-clip-text font-bold  hover:underline decoration-white decoration-dotted underline-offset-4 transition"
        >
          Form
        </Link>
      </div>
    </div>
  );
}
