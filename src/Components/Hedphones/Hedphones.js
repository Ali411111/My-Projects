import React from 'react'
import Header from '../Header/Header'
import Cart from '../Cart/Cart'
import Toast from '../Toast/Toast'
import HedphoneProducts from './HedphoneProducts/HedphoneProducts'
export default function Hedphones() {
  return (
    <div>
        <Header />
      <div className="main">
        <Cart />
        <HedphoneProducts/>
        <Toast />
      </div>
    </div>
  )
}
