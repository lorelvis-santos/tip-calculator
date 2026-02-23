import type { MenuItem } from "../types";
import { formatCurrency } from "../helpers";
import type { Dispatch } from "react";
import type { OrderActions } from "../reducers/order-reducer";

type MenuItemProps = {
  item: MenuItem;
  dispatch: Dispatch<OrderActions>
}

export default function MenuItem({item, dispatch} : MenuItemProps) {
  return (
    <li>
      <button
        className="border-2 border-teal-400 cursor-pointer transition-colors hover:bg-teal-200 w-full py-3 flex justify-between px-2"
        onClick={() => dispatch({type: "add-item", payload: { item }})}
      >
        <p>{item.name}</p>
        <p className="font-extrabold">{formatCurrency(item.price)}</p>
      </button>
    </li>
  )
}
