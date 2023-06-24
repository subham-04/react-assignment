import React from 'react'
import './transaction.css'
import User from '../../Images/user.jpg'
import transactions from './transactionsMade'


const transaction = () => {

    



  return (
    <div className='container'>
        <h3>Completed</h3>
        <p>This week</p>
        {/* <div className="transaction">
            <div className="user">
                <img src={User} alt="" className="user-pic" />
                <div className="payment-info">
                    <h4 className="payment-org">Sam Corp Inc.</h4>
                    <p className="info">Jun 22 · Automatic Payment</p>
                </div>
            </div>
            <h4 className="amount">-$9.56</h4>
        </div> */}

        {transactions.map((transaction) => (
        <div key={transaction.id} className="transaction">
          <div className="user">
            <img src={transaction.user.image} alt="" className="user-pic" />
            <div className="payment-info">
              <h4 className="payment-org">{transaction.user.name}</h4>
              <p className="info">{transaction.paymentInfo.date} · {transaction.paymentInfo.type}</p>
            </div>
          </div>
          <h4 className="amount">{transaction.amount}</h4>
        </div>
        ))}
    </div>
  )
}

export default transaction