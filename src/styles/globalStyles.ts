import { css } from '@emotion/react'
import CherryBombOneWoff2 from '../fonts/CherryBombOne-Regular.woff2'
import DeliusWoff2 from '../fonts/Delius-Regular.woff2'

export const globalStyles = css`
  @font-face {
    font-family: 'CherryBombOne';
    src: url(${CherryBombOneWoff2}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Delius';
    src: url(${DeliusWoff2}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  body {
    font-family: 'CherryBombOne', 'Arial', 'Helvetica', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin: 0 auto;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('../src/assets/background.jpg');
    width: 320px;

    /* @media (min-width: 768px) {
      width: 768px;
    }

    @media (min-width: 1366px) {
      width: 1366px;
    } */
  }
`
