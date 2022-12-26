import React from "react";
import style from "./style/About.module.css";

const About = () => {
  return (
    <div className={style.About}>
      <div className={style.ContentsWrap}>
        <div className={style.ProfilImg} />
        <div className={style.Contents}>
          <h1 className={style.name}>노상운</h1>
          <h2 className={style.Subject}>
            Developer&nbsp;
            <span>Back-End</span>
          </h2>
          <ul className={style.ContentsText}>
            <li>
              &nbsp;방문해주셔서 감사합니다. 저는&nbsp;
              <span>주니어 개발자 노상운</span>입니다.
            </li>
            <li>
              &nbsp;저는 현재 Back-End 및 Front-End를 같이하는&nbsp;
              <span>풀스택과정</span>을 진행함과 동시에&nbsp;
              <span>Back-End</span>
              쪽에 비중 좀더 두고 있는 개발자입니다.
            </li>
            <li>
              &nbsp;상기의 과정을 진행하면서, 제작한 포트폴리오와 기술스택등을
              소개하고자 이 사이트를 제작하게 되었습니다.
            </li>
            <li>
              &nbsp;편안하게 감상해주세요. 질문이 있으시다면, 언제든 저에게
              연락해주시면 감사하겠습니다. <span>감사합니다.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
