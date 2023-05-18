
'use client';

interface MenuItemProps {
  title: string,
  onClick: () => void
}

const MenuItem: React.FC<MenuItemProps> = ({
  title,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className="
      px-4 
      py-3 
      hover:bg-neutral-100 
      transition
      font-semibold
    "
    >
      {title}
    </div>
  )
}
export default MenuItem