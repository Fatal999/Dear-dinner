/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import { css } from '@emotion/react'

const divStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1920px;
`

const buttonStyle = css`
  font-family: 'Delius', 'Arial', 'Helvetica', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  background-color: transparent;
  width: 350px;
  padding: 0;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin: 40px auto;
  text-transform: uppercase;
`

const tableStyle = css`
  width: 1000px;
  border: 2px solid black;
  border-radius: 10px;
  border-collapse: separate;
  border-spacing: 30px 10px;
  margin-bottom: 40px;
`

const tdStyle = css`
  font-weight: 800;
`

export default function Test() {
  const currentDate = new Date()

  const [docCreate, setDocCreate] = useState(false)
  const namesArr = [
    'Максим Иванов',
    'Артём Козлов',
    'Тимофей Мельников',
    'Иван Беляев',
    'Илья Гордеев',
    'Ева Смирнова',
    'София Павлова',
    'Лера Фёдорова',
  ]

  const docArr = [
    'Терапевт',
    'Оториноларинголог ',
    'Хирург',
    'Офтальмолог',
    'Стоматолог',
    'Психотерапевт',
    'Кардиолог',
    'Гастроэнтеролог',
  ]

  const timeSlots = [
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
  ]

  function toggleGenerator() {
    setDocCreate(!docCreate)
  }

  function randomIndex<T>(arr: T[]): number {
    return Math.floor(Math.random() * arr.length)
  }

  function DocGenerator() {
    return (
      <div>
        <table css={tableStyle}>
          <thead>
            <tr>
              <td css={tdStyle}>Специальность</td>
              <td css={tdStyle}>ФИО</td>
              <td css={tdStyle}>Часы приема</td>
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((time, id) => {
              return (
                <tr key={id}>
                  <td>{namesArr[randomIndex(namesArr)]}</td>
                  <td>{docArr[randomIndex(docArr)]}</td>
                  <td>{time}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div css={divStyle}>
      <h1>Расписание врачей на {currentDate.toLocaleDateString()}</h1>
      <button type="button" css={buttonStyle} onClick={toggleGenerator}>
        Показать
      </button>
      {docCreate && <DocGenerator></DocGenerator>}
    </div>
  )
}
