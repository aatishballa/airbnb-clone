import Container from "../Container"
import Logo from "./Logo"

export default function NavBar() {
  return (
    <div className="fixed w-full bg-white shadow-sm z-10">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="
              flex 
              flex-row 
              items-center 
              justify-between
              gap-3
              md:gap-0
            "
          >
            <Logo />
          </div>
        </Container>
      </div>
    </div>
  )
}