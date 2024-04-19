import { Dispatch, SetStateAction } from 'react'
import { tipOptions } from '../data/db'

type TipPercentageProps = {
  setTip: Dispatch<SetStateAction<number>>,
  tip: number,
}

export default function TipPercentage( {setTip, tip}: TipPercentageProps ) {
  return (
    <div>
      <h3 className="font-bold text-2xl">Propina: </h3>
      <form>
        {tipOptions.map((tipOption) => (
          <div key={tipOption.id}>
            <label>
              {tipOption.label}
              <input
                type="radio"
                name="tip"
                value={tipOption.value}
                onChange={(e) => setTip(Number(e.target.value))}
                checked={tipOption.value === tip}
              />
            </label>
          </div>
        ))}
      </form>
    </div>
  );
}
