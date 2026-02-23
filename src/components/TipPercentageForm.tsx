import type { Dispatch } from "react"
import type { OrderActions } from "../reducers/order-reducer"

type TipPercentageFormProps = {
  dispatch: Dispatch<OrderActions>
}

export default function TipPercentageForm({dispatch} : TipPercentageFormProps) {
  const tipOptions = [
    {
      id: 'tip-10',
      value: 10/100, // 0.1
      label: '10%'
    },
    {
      id: 'tip-20',
      value: 20/100, // 0.2
      label: '20%'
    },
    {
      id: 'tip-50',
      value: 50/100, // 0.5
      label: '50%'
    },
  ]

  return (
    <div>
      <h3 className="font-black text-xl">Propina</h3>

      <form className="mt-5">
        {tipOptions.map(tip => (
          <div 
            key={tip.id}
            className="flex gap-2"
          >
            <label htmlFor={tip.id}>{tip.label}</label>
            <input 
              id={tip.id}
              type="radio"
              name="tip"
              value={tip.value}
              onChange={() => dispatch({type: "add-tip", payload: { value: tip.value }})}
            />
          </div>
        ))}
      </form>
    </div>
  )
}
