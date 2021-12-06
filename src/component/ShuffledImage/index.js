import './index.css'

const ShuffledImage = props => {
  const {imageDetails} = props
  const {imageUrl} = imageDetails

  return (
    <li className="list-image">
      <img src={imageUrl} className="image-url" alt="match" />
    </li>
  )
}

export default ShuffledImage
