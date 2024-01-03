import dashboard from "../assets/dashboard.svg";
import chat from "../assets/chat.svg";
import email from "../assets/email.svg";
import settings from "../assets/settings.svg";
import products from "../assets/products.svg";
import { Link } from "react-router-dom";
const SideBar = () => {
  const Navs = [
    { name: "Dashboard", icon: dashboard, link: "/products" },
    { name: "Products", icon: products, link: "/products" },
    { name: "Chat", icon: chat, link: "/products" },
    { name: "Email", icon: email, link: "/products" },
    { name: "Settings", icon: settings, link: "/products" },
  ];
  return (
    <div className="h-dvh bg-midnightBlue w-80 p-8 flex flex-col gap-8 text-mainText ">
      <h2>Admin.</h2>
      <ul>
        {Navs.map((nav, index) => (
          <Link
            to={nav.link}
            key={index}
          >
            <li>
              <img src={nav.icon} />
              <label>{nav.name}</label>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
