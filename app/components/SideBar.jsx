import Link from "next/link";
import {
  MdOutlineDashboard,
  MdBorderColor,
  MdOutlineProductionQuantityLimits,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { TfiImport } from "react-icons/tfi";
import { CiSettings } from "react-icons/ci";
import { IoLanguage } from "react-icons/io5";

export default function SideBar() {
  const sidebarContent = [
    {
      id: 1,
      text: "Dashboard",
      icon: <MdOutlineDashboard />,
      href: "/pages/dashboard",
    },
    {
      id: 2,
      text: "Search Products",
      icon: <FaShoppingBag />,
      href: "/pages/searchproducts",
    },
    {
      id: 3,
      text: "Imports",
      icon: <TfiImport />,
      href: "/pages/imports",
    },
    {
      id: 4,
      text: "Orders",
      icon: <MdBorderColor />,
      href: "/pages/orders",
    },
    {
      id: 5,
      text: "Products",
      icon: <MdOutlineProductionQuantityLimits />,
      href: "/pages/products",
    },
  ];

  return (
    <div className="flex flex-col items-center h-screen justify-between border-r-[1px] border-secondary border-opacity-20 ${isMinimized ? 'w-16' : 'w-64'}">
      <div className="w-full">
        <div className="py-8 text-center text-3xl font-semibold text-[#333333] botder-b-[ddd] border-b-[1px]">
          <Link href="/">K Goods</Link>
        </div>
        <div className="flex flex-col gap-4 text-secondary pl-10 py-6">
          {sidebarContent.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex items-center gap-2 active:text-primary"
            >
              {item.icon}
              <span>{item.text}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col pl-10 mt-8 gap-4 text-secondary py-10 border-t-[1px]">
        <Link href="/" className="flex items-center gap-2">
          <CiSettings />
          Settings
        </Link>
        <Link href="" className="flex items-center gap-2">
          <IoLanguage />
          Language
        </Link>
        <Link href="" className="flex items-center gap-2">
          <MdOutlineSupportAgent />
          Support
        </Link>
      </div>
    </div>
  );
}
