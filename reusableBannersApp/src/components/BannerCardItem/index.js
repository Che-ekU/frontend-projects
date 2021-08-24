import './index.css'

const BannerCardItem = props => {
  const {bannerData} = props
  const {headerText, description, className} = bannerData
  return (
    <div className={`${className} card-dec`}>
      <div>
        <h1 className="h-dec">{headerText}</h1>
        <p className="p-dec">{description}</p>
        <button className="btn-dec" type="button">
          Show More
        </button>
      </div>
    </div>
  )
}

export default BannerCardItem
