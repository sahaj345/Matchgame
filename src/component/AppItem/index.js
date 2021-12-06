import './index.css'

const AppItem = props => {
  const {projectDetails, onClickImage} = props
  const {thumbnailUrl} = projectDetails

  const onClickImageCard = () => {
    onClickImage(thumbnailUrl)
  }

  return (
    <>
      <li className="project-item-container">
        <button type="button">
          <img
            className="project-item-image"
            src={thumbnailUrl}
            alt="thumbnail"
            onClick={onClickImageCard}
          />
        </button>
      </li>
    </>
  )
}
export default AppItem
