import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {

    function next () {
        console.log("Prevuiious")
        // slider.slickNext();
      }

    function previous  ()   {
        console.log("Next")
        // slider.slickPrev();
      }

      

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows:true,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
     var myStyle = {
         width: "1200px",
         marginLeft: "100px"
     }

    return (
        <div>

            <Slider {...settings} style={myStyle}>
                <div>
                    <img src="https://www-europe.nissan-cdn.net/content/dam/Nissan/nissan_europe/vehicles/2019_NEW_NISSAN_JUKE/Push/UNVEIL/HOMEPAGE/19TDIEURHD_JUKE_HOMEPAGE_PUSH_UVEIL_001.jpg.ximg.full.hero.jpg"/>
                </div>
                <div>
                    <img src="//www-europe.nissan-cdn.net/content/dam/Nissan/gb/homepage/001456_NISS_HOMEPG%20CAROUSEL%20BNR_3000x1300.jpg.ximg.full.hero.jpg" />

                </div>
                <div>
                    <img src="//www-europe.nissan-cdn.net/content/dam/Nissan/gb/homepage/001962_NISS_RETAIL%20EVENT_LANDINGPAGE_3000x1300_1a.jpg.ximg.full.hero.jpg" />

                </div>
                <div>
                    <img src="//www-europe.nissan-cdn.net/content/dam/Nissan/gb/homepage/800605_NISS_DCO_HOMEPG%20CAROUSEL%20BNR_3000x1300%20-%20NAVARA%20N-GUARD%20%2B%20NIM.jpg.ximg.full.hero.jpg" />

                </div>
                <div>
                    <img src="//www-europe.nissan-cdn.net/content/dam/Nissan/gb/homepage/NIM_HP_PUSH_DESKTOP_V1.jpg.ximg.full.hero.jpg" />

                </div>
                <div>
                    <img src="//www-europe.nissan-cdn.net/content/dam/Nissan/nissan_europe/vehicles/2019_NEW_NISSAN_JUKE/Push/UNVEIL/HOMEPAGE/19TDIEURHD_JUKE_HOMEPAGE_PUSH_UVEIL_001.jpg.ximg.full.hero.jpg" />

                </div>
               
            </Slider>
            
            
        </div>
    )
}

export default Carousel