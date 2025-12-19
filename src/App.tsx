import { menuItems } from "./data/db"
import MenuItem from "./components/MenuItem";
import OrderContent from "./components/OrderContent";
import OrderTotal from "./components/OrderTotal";
import TipPercentageForm from "./components/TipPercentageForm";
import useOrder from "./hooks/useOrder";

function App() {
  const { order, addItem, removeItem, placeOrder, tip, setTip, isEmpty } = useOrder();

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-bold">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-w-6xl mx-auto px-5 py-16 grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-3xl font-black">Menu</h2>

          <ul className="flex flex-col gap-2 mt-5">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </ul>
        </div>

        <div className="border border-slate-300 p-5 rounded-lg space-y-10 flex flex-col justify-between">
          <OrderContent 
            order={order}
            removeItem={removeItem}
          />

          { isEmpty ? "" : (
            <>
              <TipPercentageForm
                setTip={setTip}
              />

              <OrderTotal
                order={order}
                tip={tip}
                placeOrder={placeOrder}
              />
            </>
          )}
        </div>
      </main>
    </>
  )
}

export default App
