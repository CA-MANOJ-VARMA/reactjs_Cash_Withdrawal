// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  deductDenomination = value => {
    console.log(value)
    this.setState(prevState => ({
      amount: prevState.amount - value,
    }))
  }

  render() {
    const {amount} = this.state
    console.log(amount)
    const {denominationsList} = this.props
    return (
      <>
        <div className="css-bg-container">
          <div className="css-name-container">
            <p className="css-initial-text">S</p>
            <p>Sarah Williams</p>
          </div>
          <div className="css-amount-container">
            <p>Your Balance</p>
            <p>{amount}</p>
            <p>In Rupees</p>
          </div>
          <div className="css-denominations-container">
            <p>Withdraw</p>
            <p>CHOOSE SUM (IN RUPEES)</p>
            <ul className="css-Denomination-item-container">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  denominationItem={eachItem}
                  key={eachItem.id}
                  deductFunction={this.deductDenomination}
                />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default CashWithdrawal
