
import MenuItem from "./components/MenuItem";
import OrderContent from "./components/OrderContent";
import OrderTotals from "./components/OrderTotals";
import TipPercentage from "./components/TipPercentage";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {
  
  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder();

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <section className="p-5">
          <h2 className="font-black text-4xl">Menu</h2>

          <div className="mt-10 space-y-3">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </section>

        <section className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length ? (
            <>
              <OrderContent order={order} removeItem={removeItem} />
              <TipPercentage setTip={setTip} tip={tip} />
              <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <p className="text-center font-bold text-4xl">La Orden está Vacía</p>
          )}
        </section>
      </main>
    </>
  );
}

export default App
