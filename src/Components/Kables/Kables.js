import React from 'react'
import Header from '../Header/Header'
import Cart from '../Cart/Cart'
import Toast from '../Toast/Toast'
import KableProducts from './KableProducts/KableProducts'
export default function Kables() {
  return (
    <div>
         <Header />
      <div className="main">
        <Cart />
       <KableProducts/>
        <Toast />
      </div>
    </div>
  )
}
