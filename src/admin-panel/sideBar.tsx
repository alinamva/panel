import dashboard from "../assets/dashboard.svg";
import chat from "../assets/chat.svg";
import email from "../assets/email.svg";
import settings from "../assets/settings.svg";
import products from "../assets/products.svg";
import { Link } from "react-router-dom";
const SideBar = () => {
  const Navs = [
    { name: "Dashboard", icon: dashboard, link: "/panel" },
    { name: "Products", icon: products, link: "/cards" },
    { name: "Chat", icon: chat, link: "/panel" },
    { name: "Email", icon: email, link: "/panel" },
    { name: "Settings", icon: settings, link: "/panel" },
  ];
  return (
    <div className="h-dvh bg-midnightBlue w-full p-8 flex flex-col gap-8 text-mainText ">
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
