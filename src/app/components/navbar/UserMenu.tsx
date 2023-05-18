'use client';

import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import Avatar from "../Avatar"
import { AiOutlineMenu } from "react-icons/ai"
import MenuItem from "./MenuItem";

const UserMenu = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const authenticatedMenuList = [
    {
      name: "My Trips",
      to: '/trips'
    },
    {
      name: "My Favourites",
      to: '/favourites'
    },
    {
      name: "My Reservations",
      to: '/reservations'
    },
    {
      name: "My Properties",
      to: '/properties'
    }
  ]

  const unauthenticatedMenuList = [
    { name: "Sign Up", to: '/signup' },
    { name: "Log In", to: '/login' }
  ]

  const goTo = (to: string) => {
    router.push(to)
  }

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
          onClick={toggleOpen}
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

        {isOpen && (

          <div
            className="
              absolute 
              rounded-xl 
              shadow-md
              w-[40vw]
              md:w-3/4 
              bg-white 
              overflow-hidden 
              right-0 
              top-12 
              text-sm
            "
          >
            <div className="flex flex-col">
              {unauthenticatedMenuList.map((item, index) =>
                <MenuItem
                  key={index}
                  title={item.name}
                  onClick={() => goTo(item.to)}
                />)}
            </div>
          </div>
        )}
      </div>

    </div>
  )
}
export default UserMenu
