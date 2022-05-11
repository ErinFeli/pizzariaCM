import { FiAlignLeft } from 'react-icons/fi'
import { ReactComponent as PizzaLogo } from '../../assets/pizza-logo.svg'
export default function Header() {
  return (
    <header>
      <div className="header-container">
        <FiAlignLeft size={33} />
        <div className="logo-div">
          <PizzaLogo />
          <h3>CantinhodaMari</h3>
        </div>
      </div>
    </header>
  )
}
