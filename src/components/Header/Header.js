import { FaCaretDown } from 'react-icons/fa';
import { FiAlignLeft } from 'react-icons/fi';
import { ReactComponent as PizzaLogo } from '../../assets/pizza-logo.svg';


import "./header.scss";


export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-logo">
          <FiAlignLeft size={28} />
          <div className="logo-div">
            <PizzaLogo className='logo-svg' />
            <h3>CANTINHO DA MARI</h3>
          </div>
        </div>
        <div className='delivery-button'>
          <h4>Delivery</h4>
          <FaCaretDown />
        </div>
      </div>
    </header>
  )
}
