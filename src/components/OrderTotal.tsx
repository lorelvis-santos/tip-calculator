import { useMemo } from "react";
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers";

type OrderTotalProps = {
  order: OrderItem[];
  tip: number,
  placeOrder: () => void;
}

export default function OrderTotal({order, tip, placeOrder} : Readonly<OrderTotalProps>) {
  const subTotalAmount = useMemo(
    () => order.reduce(
      // reduce: toma el total y va sumando el total de cada elemento. Inicia desde 0.
      (total, item) => total + (item.quantity * item.price), 0
    ),
    [order]
  );
  const tipAmount = useMemo(() => (subTotalAmount * tip), [tip, subTotalAmount]);
  const totalAmount = useMemo(() => subTotalAmount + tipAmount, [subTotalAmount, tipAmount]);

  return (
    <div>
      <div className="space-y-3">
          <h2 className="font-black text-xl">Totales y propina</h2>
          <p>Subtotal a pagar: <span className="font-bold">{formatCurrency(subTotalAmount)}</span></p>
          <p>Propina: <span className="font-bold">{formatCurrency(tipAmount)}</span></p>
          <p>Total a pagar: <span className="font-bold">{formatCurrency(totalAmount)}</span></p>
      </div>

      <button
        className="w-full py-2 bg-teal-300 rounded mt-8 font-black text-xl hover:cursor-pointer hover:bg-teal-400 disabled:opacity-10 transition-colors"
        disabled={totalAmount === 0}
        onClick={placeOrder}
      >
        Guardar orden
      </button>
    </div>
  )
}
