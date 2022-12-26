import React from "react";
import style from "./style/Contact.module.css";
import { AiFillHome, AiFillMail, AiOutlineLink } from "react-icons/ai";
import { IoMan } from "react-icons/io5";
const Contact = () => {
  return (
    <>
      <h1 className={style.Title}>Contact</h1>
      <div className={style.Contact}>
        <div className={style.ContentsWrap}>
          <ul className={style.MyContentsWrap}>
            <li>
              <div className={style.Icons}>
                <IoMan />
              </div>
              Noh Sang Un, Full-Stack
            </li>
            <li>
              <div className={style.Icons}>
                <AiFillHome />
              </div>
              DeaJeon, Republic of Korea
            </li>
            <li>
              <div className={style.Icons}>
                <AiFillMail />
              </div>
              kei781@naver.com
            </li>
            <li>
              <div className={style.Icons}>
                <AiOutlineLink />
              </div>
              github.com/kei781
            </li>
          </ul>
          <div className={style.UrContentsWrap}>
            <form
              class="gform"
              method="POST"
              data-email="shtkddns5395@gmail.com"
              action="https://script.google.com/macros/s/AKfycbwBKGYxdZvqkEvEjDlHMDhMX5o8nGqdDRF2zeou0fqZqZqAfraPUaVTc5plBHXRkcx1/exec"
              target="iframe"
            >
              <div className={style.SingleBoxWrap}>
                <h4>Name</h4>
                <input name="name" placeholder="성함을 입력하여주세요." />
              </div>
              <div className={style.SingleBoxWrap}>
                <h4>Email</h4>
                <input
                  name="email"
                  placeholder="회신받으실 이메일을 입력하여 주세요."
                />
              </div>
              <div className={style.SingleBoxWrap}>
                <h4>Message</h4>
                <textarea
                  name="message"
                  placeholder="문의하실 내용을 작성하여 주세요."
                />
              </div>
              <div className={style.ButtonWrap}>
                <button>전송</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
