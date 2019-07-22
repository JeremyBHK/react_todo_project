import React from 'react'
import Button from '../button/Button'

const NavTask = () => {
  return(
    <div className="NavTask">
      <div>
        <p>Rémunération</p>
        <p className="priceTask">4.20€</p>
      </div>
      <div>
        <Button>
          ACCEPTER
        </Button>
      </div>
    </div>
  )
}
export default NavTask