
const Total = (props) =>{
  const total = props.parts.reduce((sum,part) =>{
    return sum + part.exercises
  },0)
  return(
    <>
      <p><strong>total of {total} exercies</strong></p>
    </>
  )

}

export default Total