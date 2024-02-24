import bannerImage from './../images/banner1-small.png'; 
import "./../css/banner.css"


const Banner = () => {
    return (
      <div className="banner">
        <img src={bannerImage} alt="Banner" className="banner-image" />
        <div className="banner-text">
          Chez vous, partout et ailleurs
        </div>
      </div>
    );
  }
  
  export default Banner;