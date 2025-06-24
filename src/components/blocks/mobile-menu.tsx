/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export default function MobileMenu() {
  const listStyle = css`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    width: 320px;
  `

  const itemStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
  `

  const buttonStyle = css`
    width: 300px;
    min-height: 35px;
    padding: 0;
    margin-bottom: 10px;
    background-color: transparent;
    cursor: pointer;
    border-radius: 5px;
    font-family: 'Delius', 'Arial', 'Helvetica', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  `

  return (
    <ul css={listStyle}>
      <li css={itemStyle}>
        <button css={buttonStyle} type="button">
          Log In
        </button>
      </li>
      <li css={itemStyle}>
        <button css={buttonStyle} type="button">
          Registration
        </button>
      </li>
    </ul>
  )
}
