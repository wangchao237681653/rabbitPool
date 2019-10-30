import React from 'react'

const PowBanner = () => (
  <powerbar>
    <div className={"pban"}>
      <div className={"pban-reg"}>
        <div className={"pban-title"}>国内矿机托管电价</div>
        <div className={"pban-sum"}>
          <div>丰水期：0.25/度</div>
          <div>全年电：0.38/度</div>
          <div>合同要求: 预付一个月度电费</div>
          <div className={"content"}>国内高算力矿机托管：蚂蚁矿机托管，阿瓦隆矿机，神马矿机，芯动矿机托管</div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .pban {
          height:480px;
          background:url('./banner.jpg') no-repeat;
          overflow: hidden;
          background-size:100% 480px;
      }
      
      .pban-reg {
         padding:70px 0px 0px 120px;
      }
      .pban-title {
          width:400px;
          height:60px;
          font-size:48px;
          font-family:PingFangSC-Semibold,PingFang SC;
          font-weight:600;
          color:rgba(255,255,255,1);
          line-height:60px;
          letter-spacing:2px;
      }
      .pban-sum {
          height:34px;
          font-size:24px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(255,255,255,1);
          line-height:34px;
          padding-top:60px;
      }
      .pban-sum .content {
          width:436px;
          height:52px;
          font-size:16px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(255,255,255,1);
          line-height:26px;
      }
    `}</style>
  </powerbar>
)

export default PowBanner;
