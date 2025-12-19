import { useState, useMemo } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);
  const isEmpty = useMemo(() => order.length === 0, [order]);

  function addItem(item: MenuItem) {
    const exists = order.find(orderItem => orderItem.id === item.id);

    if (exists) {
        setOrder(order.map(orderItem => {
            if (orderItem.id === exists.id) {
                return {
                    ...orderItem,
                    quantity: orderItem.quantity + 1
                }
            }

            return orderItem;
        }))
        
        return;
    }

    const newItem = {
        ...item,
        quantity: 1
    }

    setOrder([...order, newItem]);
  }

  function removeItem(itemId: MenuItem["id"]) {
    const updatedOrder = order.filter(item => item.id !== itemId);
    setOrder(updatedOrder);
    
    if (updatedOrder.length === 0) {
      setTip(0);
    }
  }

  function placeOrder() {
    setOrder([]);
    setTip(0);
  }

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder,
    isEmpty
  }
}