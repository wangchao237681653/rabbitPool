import React from 'react'

const Banner = () => (
  <banner>
    <div className={"ban"}>
        <div className={"ban-reg"}>
            <div className={"ban-title"}>BTC 一站式挖矿服务</div>
            <div className={"ban-sum"}>全年稳定电力，专业运维，安全可靠的提取服务</div>
        </div>
    </div>
    <style jsx>{`
      .ban {
          height:480px;
          background:url('/banner.jpg') no-repeat;
          overflow: hidden;
          background-size:100%; 480px;
      }
      
      .ban-reg {
          padding:170px 0px 176px 120px;
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
          height:34px;
          font-size:24px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(255,255,255,1);
          line-height:34px;
          padding-top:60px;
      }
    `}</style>
  </banner>
)

export default Banner;
