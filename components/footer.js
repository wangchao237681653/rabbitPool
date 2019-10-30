import React from 'react'


const Footer = () => (
  <footer>

    <div className={"f-left"}>
        <div className={"f-l-top"}>
            <ul>
              <li className={"f-logo"}>
                <img src={"./f-logo.svg"} alt=""/>
              </li>
              <li className={"f-item f-phone"}>
                <img src={"./icon/phone.svg"} alt=""/>
                <span className={"f-font"}>联系电话 186 8888 8888</span>
              </li>

              <li  className={"f-item"}>
                <img src={"./icon/email.svg"} alt=""/>
                <span className={"f-font"}>联系邮箱 BTC@word.com</span>
              </li>

              <li  className={"f-item f-telegram"}>
                <img src={"./icon/telegram.svg"} alt=""/>
                <span className={"f-font"}>Telegram </span>
                <button>加入群组</button>
              </li>
            </ul>
        </div>
        <div className={"f-l-bottom"}>
            <div className={"f-line"}></div>
            <span className={"f-b"}>Copyright © 2019 RabbitPool - 鄂ICP备16005435号-1 鄂公网安备 鄂公网安备 42018502001134号</span>
            <div></div>
        </div>
    </div>
    <div className={"f-right"}>

    </div>

    <style jsx>{`
      footer {
        width:100%;
        height:217px;
        background:rgba(246,249,252,1);
        box-shadow:0px 1px 0px 0px rgba(0,0,0,0.04);
      }

      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
      }
      li {
        float: left;
      }
      .f-left {
        padding:64px 0px 60px 120px;
      }
      .f-item {
        padding:0px 23px 0px 77px
      }
      .f-font {
        height:24px;
        font-size:12px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(138,148,166,1);
        line-height:24px;
      }
      .f-logo img{
          width:166px;
          height:24px;
      }
      .f-telegram button {
          width:68px;
          height:24px;
          background:rgba(248,68,68,1);
          box-shadow:0px 12px 25px -13px rgba(0,75,255,0.58);
          border-radius:4px;
      }
      li a {
          display: block;
          text-align: center;
          padding: 19px 60px;
          text-decoration: none;
      }
     .f-line {
          width:945px;
          height:1px;
          background:rgba(0,0,0,0.06);
     }
     .f-b {
          width:539px;
          height:24px;
          font-size:12px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(138,148,166,1);
          line-height:24px;
          padding-top:20px;
          display:block;
     }

    `}</style>
  </footer>
)

export default Footer;
