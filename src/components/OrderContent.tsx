import type { Dispatch } from "react";
import { formatCurrency } from "../helpers";
import type { OrderActions } from "../reducers/order-reducer";
import type { OrderItem } from "../types"

type OrderContentProps = {
  order: OrderItem[],
  dispatch: Dispatch<OrderActions>
}

export default function OrderContent({order, dispatch} : Readonly<OrderContentProps>) {
  return (
    <div>
        <h2 className="font-black text-3xl">Consumo</h2>

        <div className="space-y-3 mt-5 h-full max-h-[250px] overflow-auto">
          {order.length === 0 ? (
            <p className="text-center">La orden está vacía</p>
          ) : (
            order.map(item => (
              <div 
                key={item.id}
                className="flex justify-between px-2 items-center border-t border-gray-200 py-5 last-of-type:border-b"
              >
                <div>
                  <p>
                    {item.name} - { formatCurrency(item.price) }
                  </p>
                  <p className="font-bold">
                    Cantidad: {item.quantity} - Total: {formatCurrency(item.quantity*item.price)}
                  </p>
                </div>
                <button
                  className="text-white rounded-full font-black bg-red-600 h-8 w-8 cursor-pointer"
                  onClick={() => dispatch({type: "remove-item", payload: { id: item.id}})}
                >
                  X
                </button>
              </div>
            ))
          )}
        </div>
    </div>
  )
}
