import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () =>{
    setGood(good+1)
  }

  const handleNeutral = () => {
    setNeutral(neutral+1)
  }

  const handleBad = () => {
    setBad(bad+1)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button action={handleGood} btnName={'good'}/>
      <Button action={handleNeutral} btnName={'neutral'}/>
      <Button action={handleBad} btnName={'bad'}/>
      <h2>Statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

const Statistics = ({good,neutral,bad}) =>{
  const total = good+neutral+bad
  const average = (good - bad)/total
  const positivePercentage = (good/total)* 100
  console.log(average)
  console.log(positivePercentage)

  if(good > 0 || neutral > 0 || bad > 0){
    return(
      <div>
      <table>
        <tbody>
          <StatisticLine text={'good'} value={good} />
          <StatisticLine text={'neutral'} value={neutral}/>
          <StatisticLine text={'bad'} value={bad}/>
          <StatisticLine text={'average'} value={average}/>
          <StatisticLine text={'positive'} value={`${positivePercentage} %`}/>
        </tbody>
      </table>

    </div>
    )
  }else{
  return(
    <>
      <p>No feedback given</p>
    </>
  )
}

}

const StatisticLine = ({text,value}) =>{
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}


const Button = ({action,btnName}) =>{
  return(
    <>
    <button onClick={action}>{btnName}</button>

    </>
  )
}
export default App