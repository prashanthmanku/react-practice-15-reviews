// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onleftreview = () => {
    this.setState(prevState => {
      const {index} = prevState
      const newIndex = index > 0 ? index - 1 : index
      return {index: newIndex}
    })
  }

  onRightClick = () => {
    const {reviewsList} = this.props
    const lengthOfList = reviewsList.length - 1
    this.setState(prevState => {
      const {index} = prevState
      const newIndex = index < lengthOfList ? index + 1 : index
      return {index: newIndex}
    })
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const {imgUrl, description, username, companyName} = reviewsList[index]
    return (
      <div className="app-container">
        <div className="bg-container">
          <h1 className="heading">Reviews</h1>
          <img src={imgUrl} alt={username} className="fofile-img" />
          <div className="arrows-container">
            <button
              type="button"
              data-testid="leftArrow"
              onClick={this.onleftreview}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt=" left arrow"
                className="Arrow-img"
              />
            </button>
            <p className="name">{username}</p>
            <button
              type="button"
              data-testid="rightArrow"
              onClick={this.onRightClick}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt=" right arrow"
                className="Arrow-img"
              />
            </button>
          </div>
          <p className="company">{companyName}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
