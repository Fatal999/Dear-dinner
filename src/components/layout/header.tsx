/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react'
import MobileMenu from '../blocks/mobile-menu'

const headerStyle = css`
  width: 320px;
  display: flex;
  flex-direction: column;
`

const navStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const divStyle = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const iconStyle = css`
  border-radius: 5px;
  margin-left: 10px;
`

const titleStyle = css`
  font-size: 30px;
  line-height: 28px;
  margin-left: 10px;
`

const buttonStyle = css`
  background-color: transparent;
  width: 35px;
  height: 35px;
  padding: 0;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
`

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false)

  function toggleMobileMenu() {
    setMobileMenu(!mobileMenu)
  }

  return (
    <header css={headerStyle}>
      <nav css={navStyle}>
        <div css={divStyle}>
          <img
            css={iconStyle}
            src="/favicon.svg"
            width={35}
            height={35}
            alt="Logo."
          ></img>
          <h1 css={titleStyle}>Dear dinner</h1>
        </div>
        <button onClick={toggleMobileMenu} css={buttonStyle} type="button">
          -
        </button>
      </nav>
      {mobileMenu && <MobileMenu></MobileMenu>}
    </header>
  )
}
