import {
  ChevronLeftIcon,
  ChevronRightIcon  } from '@chakra-ui/icons'

import './style.css'

function Header() {
  return (
    <div className="header-main">
      <div className="header-main-container">
        <div className="header-title-container">
          <p className="header-title">
            Tech Pokedex
          </p>
        </div>
        <button>
          <ChevronLeftIcon w={6} h={6} color='#FFFFFF' />
        </button>
        <p className="header-letter-option-filter">
          Letra
        </p>
        <p className="header-number-option-filter">
          Número
        </p>
        <button>
          <ChevronRightIcon w={6} h={6} color='#FFFFFF' />
        </button>
      </div>
    </div>
  )
}

export default Header;