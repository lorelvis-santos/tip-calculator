import type { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
    <li>
      <button
        className="border-2 border-teal-400 cursor-pointer transition-colors hover:bg-teal-200 w-full py-3 flex justify-between px-2"
        onClick={() => addItem(item)}
      >
        <p>{item.name}</p>
        <p className="font-extrabold">${item.price}</p>
      </button>
    </li>
  )
}
