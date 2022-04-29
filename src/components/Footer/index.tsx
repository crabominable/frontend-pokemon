import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import './style.css'

import Context from '../../context/AppContext'

const Footer = () => {
  const {
    offsetReqNum,
    setOffsetRedNum } = useContext(Context)

  return (
    <div className='footer-main-container'>
      <div className='footer-container'>
        <Link to={'/'} className='footer-go-back-button'>
          <FontAwesomeIcon icon={faChevronLeft as IconProp} />
          <p>Voltar</p>
        </Link>
        <div onClick={() => setOffsetRedNum(offsetReqNum + 1)} className='footer-go-back-button'>
          <FontAwesomeIcon icon={faPlus as IconProp} />
          <p>+ 10</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
