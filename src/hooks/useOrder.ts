import { useState } from "react"
import { MenuItem, OrderItem } from '../types'

export default function useOrder(){
  
  const [order, setOrder] = useState<Array<OrderItem>>([]);
  const [tip, setTip] = useState(0);

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

  const removeItem = ( id: MenuItem['id'] ) => {
    setOrder(order.filter(
      item => item.id !== id
    ))
  }
  
  const placeOrder = () => {
    setOrder([]);
    setTip(0);
  }

  return{
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder,
  }
}