import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"

type OrderContentProps = {
  order: Array<OrderItem>
}

export default function OrderContent( {order} : OrderContentProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className="space-y-3 mt-10">
        {order.length === 0 ? (
          <p>No existen pedidos</p>
        ) : (
          order.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-t border-gray-200 py-5 last-of-type:border-b"
            >
              <article>
                <p className="text-lg">
                  {item.name} - {formatCurrency(item.price)}
                </p>

                <p className="font-black">
                  Cantidad:
                  {item.quantity} - {formatCurrency(item.price * item.quantity)}
                </p>
              </article>

              <button className="bg-red-500 h-8 w-8 rounded-full text-white font-bold">
                X
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
