'use client';


import Avatar from "../Avatar"
import { AiOutlineMenu } from "react-icons/ai"
const UserMenu = () => {
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => { }}
          className="hidden md:block text-sm 
                font-semibold rounded-full
                hover:bg-neutral-100 
                px-4 py-3 transition cursor-pointer
                ">
          Airbnb your home
        </div>

        <div
          className="flex flex-row"
          onClick={() => { }}
        >
          <div
            className="
            p-4
            md:py-1
            md:px-2
            border-[1px] 
            border-neutral-200 
            flex 
            flex-row 
            items-center 
            gap-3 
            rounded-full 
            cursor-pointer 
            hover:shadow-md 
            transition
        "
          >
            <AiOutlineMenu />
            <div className="hidden md:block">
              <Avatar />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default UserMenu