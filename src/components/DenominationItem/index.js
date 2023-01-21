// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationItem, deductFunction} = props

  const deductFunctionItem = value => {
    deductFunction(value)
  }

  return (
    <li>
      <button
        type="button"
        className="css-button-itself"
        onClick={() => deductFunctionItem(denominationItem.value)}
      >
        {denominationItem.value}
      </button>
    </li>
  )
}

export default DenominationItem
