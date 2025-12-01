import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]);

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

    return {
        addItem
    }
}