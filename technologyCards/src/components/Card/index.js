import './index.css'

const TechCard = props => {
  const {cardData} = props
  const {id, title, description, imgUrl, className} = cardData
  return (
    <div className={`${className} card-dec`}>
      <h1 className="h2-dec">{title}</h1>
      <p className="p2-dec">{description}</p>
      <div className="img-holder">
        <img className="img-dec" src={imgUrl} />
      </div>
    </div>
  )
}

export default TechCard
