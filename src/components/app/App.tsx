import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Global } from '@emotion/react'
import { globalStyles } from '../../styles/globalStyles'
import Path from '../data/path'
import Home from '../../pages/home'
// import Test from '../../pages/test'

function App() {
  return (
    <BrowserRouter>
      <Global styles={globalStyles} />
      <Routes>
        <Route path={Path.Home} element={<Home />} />
        {/* <Route path={Path.Home} element={<Test />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
