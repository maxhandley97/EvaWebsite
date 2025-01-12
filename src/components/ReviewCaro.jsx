
import ImageCarousel from "./ImageCarousel"
import fb1 from '../assets/EvaImages/CARDS/1.png';
import fb2 from '../assets/EvaImages/CARDS/2.png';
import fb3 from '../assets/EvaImages/CARDS/3.png';
import fb4 from '../assets/EvaImages/CARDS/4.png';
import fb5 from '../assets/EvaImages/CARDS/5.png'

const ReviewCaro = () => {
    const imageArray = [fb1, fb2, fb3, fb4, fb5];
  return (
    <div>
        <div className="carousel-wrapper">
            <ImageCarousel images={imageArray} />
        </div>
    </div>
  )
}

export default ReviewCaro