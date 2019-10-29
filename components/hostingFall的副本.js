import React from 'react'

const Hosting = () => (
  <hosting>
    <img className={"left"} src="/3-left.png" alt=""/>
    <span className={"h-t1"}>矿机托管流程</span>
    <img className={"right"} src="/3-right.png" alt=""/>
    <div className={"h-sum"}>简单四步，托管矿机</div>
    <div className={"fall"}>
      <div className={"step workfall1"}>
        <img src="/icon/workfall1.svg" alt=""/>
        <div className={"title"}>购买矿机</div>
        <div className={"sum"}>选择矿机托管</div>
      </div>
      <img className={"guide"} src="/icon/guide.svg" alt=""/>
      <div className={"step workfall2"}>
        <img src="/icon/workfall2.svg" alt=""/>
        <div className={"title"}>等待发货</div>
        <div className={"sum"}>等待矿机发货</div>
      </div>
      <img className={"guide"} src="/icon/guide.svg" alt=""/>
      <div className={"step workfall3"}>
        <img src="/icon/workfall3.svg" alt=""/>
        <div className={"title"}>矿机到货</div>
        <div className={"sum"}>由技术员上价</div>
      </div>
      <img className={"guide"} src="/icon/guide.svg" alt=""/>
      <div className={"step workfall4"}>
        <img src="/icon/workfall4.svg" alt=""/>
        <div className={"title"}>开始挖矿</div>
        <div className={"sum"}>获得矿机收益</div>
      </div>
    </div>
    <style jsx>{`
      hosting {
        width:1440px;
        height:477px;
        background:rgba(246,249,252,1);
        box-shadow:0px -1px 0px 0px rgba(0,0,0,0.04);
      }
      hosting .left {
          width:20px;
          height:20px;
          border-radius:2px;
          padding:103px 0px 0px 573px;
      }
      hosting .h-t1 {
          width:225px;
          height:50px;
          font-size:36px;
          font-family:PingFangSC-Medium,PingFang SC;
          font-weight:500;
          color:rgba(96,90,254,1);
          line-height:50px;
          letter-spacing:1px;
          text-align:center
      }
      hosting .right {
          width:16px;
          height:16px;
          background:rgba(96,90,254,1);
          border-radius:2px;
      }
      hosting .sum {
          height:22px;
          font-size:16px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(153,153,153,1);
          line-height:22px;
          text-align:center
      }
      hosting .h-sum {
          padding:10px 0px 0px 632px;
          height:22px;
          font-size:16px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(153,153,153,1);
          line-height:22px;
          text-align:center
      }
      hosting .workfall1 {
          padding-left:160px;
      }
      hosting .workfall1 img {
          padding-left:78px;
      }
      hosting .workfall2 img {
          padding-left:78px;
      }
      hosting .workfall3 img {
          padding-left:78px;
      }
      hosting .workfall4 img {
          padding-left:78px;
      }
      hosting .step .title {
          padding-left:82px;
      }
      hosting .guide{
          margin:61px 10px 59px 13px;
          width:30px;
          height:45px;
      }
      
      hosting .step {
          display:inline-block;
          width:253px;
      }
      hosting .step img {
          width:80px;
          height:80px;
      }
    `}</style>
  </hosting>
)

export default Hosting;
