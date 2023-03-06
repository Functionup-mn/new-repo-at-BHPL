

const Movie = (props) => {
  return (
    <div className="movie">
      <img src={props.img} />
      <p>{props.title}</p>
      <p>{props.year}</p>
      <p>{props.time}</p>
    </div>
  )
}

export default Movie
