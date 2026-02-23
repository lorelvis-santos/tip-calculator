import { useReducer, useMemo } from "react";
import { menuItems } from "./data/db";
import MenuItem from "./components/MenuItem";
import OrderContent from "./components/OrderContent";
import OrderTotal from "./components/OrderTotal";
import TipPercentageForm from "./components/TipPercentageForm";
import { initialState, orderReducer } from "./reducers/order-reducer";

function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  const isEmpty = useMemo(() => state.order.length === 0, [state.order]);

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
                dispatch={dispatch}
              />
            ))}
          </ul>
        </div>

        <div className="border border-slate-300 p-5 rounded-lg space-y-10 flex flex-col justify-between">
          <OrderContent 
            order={state.order}
            dispatch={dispatch}
          />

          { isEmpty ? "" : (
            <>
              <TipPercentageForm
                dispatch={dispatch}
              />

              <OrderTotal
                order={state.order}
                tip={state.tip}
                dispatch={dispatch}
              />
            </>
          )}
        </div>
      </main>
    </>
  )
}

export default App
