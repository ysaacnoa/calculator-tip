import { useState } from "react"
import { MenuItem, OrderItem } from '../types'

export default function useOrder(){
  
  const [order, setOrder] = useState<Array<OrderItem>>([]);

  const addItem = (item: MenuItem) => {
    const itemExists = order.find(orderItem => orderItem.id === item.id)
    
    if (itemExists) {
      const updateOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updateOrder);
    } else {
      const newItem: OrderItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
    
  }
  
  return{
    order,
    addItem,
  }
}