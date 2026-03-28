const Part = (props) =>{
  return(
      <p key={props.id}>{props.part} {props.exercise}</p>
  )
}

export default Part