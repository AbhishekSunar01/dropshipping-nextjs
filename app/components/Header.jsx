import { CiShop } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

export default function Header() {
  return (
    <div className="my-12 flex w-full justify-between">
      <div className="text-xl flex items-center gap-2 border-secondary  border-opacity-20 shadow-xl px-4 border-[1px] rounded-full py-2">
        Store001
        <div className="border-secondary border-opacity-20 rounded-full border-[1px] p-1">
          <CiShop />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[40px] h-[40px] bg-gray-100 rounded-full border-secondary border-[1px] border-opacity-20 shadow-lg"></div>
        <div className="text-xl flex items-center gap-2 border-secondary border-opacity-20 shadow-xl px-4 border-[1px]  rounded-full py-2">
          Profile
          <div className="border-secondary border-opacity-20 rounded-full border-[1px] p-1">
            <CgProfile />
          </div>
        </div>
      </div>
    </div>
  );
}
