import { useSelector } from 'react-redux'
import type { RootState } from '../app/store'

export default function Main() {
  const numbers = useSelector((state: RootState) => state.numbers.numbers)

  return (
    <main>
      <h1>Main</h1>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </main>
  )
}
