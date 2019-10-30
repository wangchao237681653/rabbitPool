import React from 'react'
import ComponentLayout from "./componentLayout";
const style ={
  background:"rgba(18,77,255,1)"
};
const Banner = () => (
  <ComponentLayout
    leftStyle={style}
    rightStyle={style}
  >
    <banner>
      <div className={"ban"}>
        <div className={"ban-reg"}>
          <div className={"ban-title"}>BTC 一站式挖矿服务</div>
          <div className={"ban-sum"}>全年稳定电力，专业运维，安全可靠的提取服务</div>
        </div>
      </div>
    </banner>
    <style jsx>{`
      .ban {
          height:480px;
          background:url('./banner.jpg') no-repeat;
          overflow: hidden;
          background-size: 1440px 480px;
      }
      
      .ban-reg {
          padding:130px 0px 0px 120px;
      }
      .ban-title {
          width:472px;
          height:60px;
          font-size:48px;
          font-family:PingFangSC-Semibold,PingFang SC;
          font-weight:600;
          color:rgba(255,255,255,1);
          line-height:60px;
          letter-spacing:2px;
      }
      .ban-sum {
          width:520px;
          height:34px;
          font-size:24px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(255,255,255,1);
          line-height:34px;
          padding-top:60px;
          text-align:left;
      }
    `}</style>
  </ComponentLayout>

)

export default Banner;
