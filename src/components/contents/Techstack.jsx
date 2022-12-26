import React from "react";
import style from "./style/Techstack.module.css";
// Language in
import JAVA from "../../img/JAVA.png";
import MY_SQL from "../../img/MY_SQL.png";
import HTML_CSS_JavaScript from "../../img/HTML_CSS_JavaScript.png";
// Language out
// Front in
import react from "../../img/React.png";
import BootStrap from "../../img/BootStrap.png";
// Front out
// Back in
import SpringBoot from "../../img/SpringBoot.png";
import JPA from "../../img/JPA.png";
// back out
// others in
import GIT from "../../img/GIT.png";
import GitHub from "../../img/GitHub.png";
import Slider from "react-slick";
// others out
const Techstack = () => {
  // 기술스택
  const settings = {
    arrows: true,
    className: "center",
    infinite: true,
    dots: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 1,
    swipeToSlide: true,
    // focusOnSelect: true,
    variableWidth: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <>
      <h1 className={style.Title}>TechStack</h1>
      {/* // 상위 레이아웃 */}
      <div className={style.TechStack}>
        <Slider {...settings}>
          <div>
            <div className={style.Contents}>
              <h3 className={style.Subject}>Language</h3>
              <div className={style.ContentsInner}>
                <div className={style.Contents_Line}>
                  <img className={style.img_longheight} src={JAVA} alt="JAVA" />
                  <img className={style.img_box} src={MY_SQL} alt="MY SQL" />
                </div>
                <div className={style.Contents_Line}>
                  <img
                    className={style.img_longwidth}
                    src={HTML_CSS_JavaScript}
                    alt="HTML, CSS, JavaScript"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={style.Contents}>
              <h3 className={style.Subject}>Front-End</h3>
              <div className={style.ContentsInner}>
                <div className={style.Contents_Line}>
                  <img
                    className={style.img_longwidth}
                    src={react}
                    alt="React"
                  />
                </div>
                <div className={style.Contents_Line}>
                  <img
                    className={style.img_box}
                    src={BootStrap}
                    alt="BootStrap"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={style.Contents}>
              <h3 className={style.Subject}>Back-End</h3>
              <div className={style.ContentsInner}>
                <div className={style.Contents_Line}>
                  <img
                    className={style.img_longwidth}
                    src={SpringBoot}
                    alt="SpringBoot"
                  />
                </div>
                <div className={style.Contents_Line}>
                  <img className={style.img_box} src={JPA} alt="JPA" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={style.Contents}>
              <h3 className={style.Subject}>Others</h3>
              <div className={style.ContentsInner}>
                <div className={style.Contents_Line}>
                  <img className={style.img_box} src={GIT} alt="GIT" />
                  <img className={style.img_GitHub} src={GitHub} alt="GitHub" />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Techstack;
