import React from "react";
import style from "./style/Portfolio.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//커뮤니티 사이트
import CommunityDocs from "../../img/CommunityDocs.JPG";
import CommunityHome from "../../img/CommunityHome.JPG";
// 포트폴리오 사이트
import PortfolioHome from "../../img/PortfolioHome.JPG";
import PortfolioCode from "../../img/PortfolioCode.JPG";
// 공차
import GongchaHome from "../../img/GongchaHome.JPG";
import GongchaDocs from "../../img/GongchaDocs.JPG";
const Portfolio = () => {
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
      <h1 className={style.Title}>Portfolio</h1>
      <div className={style.Portfolio}>
        <Slider {...settings}>
          <div>
            <div className={style.ContentsWrap}>
              <div className={style.ImgWrap}>
                <a href="http://www.noh.world:3000/">
                  <img alt="홈페이지" src={CommunityHome} />
                </a>
                <a href="https://wiken.io/b/11146/11146">
                  <img alt="기술문서" src={CommunityDocs} />
                </a>
              </div>
              <div className={style.Category}>Team-Project</div>
              <div className={style.Subject}>투자 커뮤니티 사이트</div>
            </div>
          </div>
          <div>
            <div className={style.ContentsWrap}>
              <div className={style.ImgWrap}>
                <a href="/">
                  <img alt="홈페이지" src={PortfolioHome} />
                </a>
                <a href="https://github.com/kei781/Portfolio">
                  <img alt="코드사진(깃허브링크)" src={PortfolioCode} />
                </a>
              </div>
              <div className={style.Category}>Solo-Project</div>
              <div className={style.Subject}>포트폴리오 사이트</div>
            </div>
          </div>
          <div>
            <div className={style.ContentsWrap}>
              <div className={style.ImgWrap}>
                <a href="https://github.com/kei781/gongChaHeaderFotter">
                  <img alt="홈페이지" src={GongchaHome} />
                </a>
                <a href="https://wiken.io/ken/9957">
                  <img alt="코드사진" src={GongchaDocs} />
                </a>
              </div>
              <div className={style.Category}>Team-Project</div>
              <div className={style.Subject}>공차 클론코딩</div>
            </div>
          </div>
          <div>
            <div className={style.ContentsWrap}>
              <div className={style.ImgWrap}>진행중</div>
              <div className={style.Category}>Solo-Project</div>
              <div className={style.Subject}>카카오 결제Api 구현</div>
            </div>
          </div>
          <div>
            <div className={style.ContentsWrap}>
              <div className={style.ImgWrap}>준비중입니다.</div>
              <div className={style.Category}>준비중입니다.</div>
              <div className={style.Subject}>준비중입니다.</div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Portfolio;
