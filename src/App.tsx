
import MenuItem from "./components/MenuItem";
import { menuItems } from "./data/db";

function App() {
  
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <section className="p-5">
          <h2>Menu</h2>
          <div className="space-y-3">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section>
          <h2>Consumo</h2>
        </section>
      </main>
    </>
  );
}

export default App
