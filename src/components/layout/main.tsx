// import { useSelector } from 'react-redux'
// import type { RootState } from '../app/store'

export default function Main() {
  // const numbers = useSelector((state: RootState) => state.numbers.numbers)

  return (
    <main>
      <h1>
        Choose your favorite dishes and share your wishes with your loved ones
      </h1>
      <img
        src="../src/assets/main-pic.jpeg"
        width={320}
        height={300}
        alt="Your dish."
      ></img>
      <button type="button">Try</button>
      {/* <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
       </ul> */}
    </main>
  )
}
