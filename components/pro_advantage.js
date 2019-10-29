import React from 'react'


const ProductAdvantage = () => (
  <advantage>
    <div className={"reg"}>
        <img className={"i-left"} src={"/2-right.png"} alt=""/>
        <span className={"title"}>产品优势</span>
        <img className={"i-right"} src={"/2-left.png"} alt=""/>
    </div>
    <div className={"adv-list"}>
      <div className={"adv-item power"}>
        <img src="/icon/power.svg" alt="power"/>
        <span className={"title"}>电力资源</span>
        <div className={"introduce"}>自建矿场，稳定的电力资源</div>
      </div>
      <div className={"adv-item"}>
        <img src="/icon/factory.svg" alt="power"/>
        <span className={"title"}>专业矿场</span>
        <div className={"introduce"}>严格按照设施要求施工，建设最安全的矿场</div>
      </div>
      <div className={"adv-item"}>
        <img src="/icon/machine.svg" alt="power"/>
        <span className={"title"}>矿机设备</span>
        <div className={"introduce"}>与个大矿机厂商合作，拥有大量的现货和期货矿机</div>
      </div>
      <div className={"adv-item"}>
        <img src="/icon/operations.svg" alt="power"/>
        <span className={"title"}>托管运维</span>
        <div className={"introduce"}>拥有专业的技术团队，更加专业和自动化的运维</div>
      </div>
      <div className={"adv-item"}>
        <img src="/icon/service.svg" alt="power"/>
        <span className={"title"}>一站式服务</span>
        <div className={"introduce"}>提供不同品类产品，为客户提供一站保姆式服务</div>
      </div>
      <div className={"adv-item"}>
        <img src="/icon/power.svg" alt="power"/>
        <span className={"title"}>战略合作</span>
        <div className={"introduce"}>与各大矿池深度合作，享受较低的矿池费用</div>
      </div>
    </div>
    <style jsx>{`
      advantage {
          width:100%;
      }
      
      advantage .reg {
         padding:100px,0px,0px,160px;
      }
      advantage .adv-list .adv-item {
        width:348px;
        
      }
      advantage .adv-list .title {
          height:25px;
          font-size:18px;
          font-family:PingFangSC-Medium,PingFang SC;
          font-weight:500;
          color:rgba(51,51,51,1);
          line-height:25px;
          padding:20px 0px 0px 138px;
      }
      advantage .adv-list .introduce {
          width:168px;
          height:20px;
          font-size:14px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(153,153,153,1);
          line-height:20px;
          padding:10px 0px 0px 90px;
      }
      advantage .i-left {
          width:20px;
          height:20px;
          border-radius:2px;
          margin:103px 0px 0px 611px;
      }
       advantage .title {
          width:150px;
          height:50px;
          font-size:36px;
          font-family:PingFangSC-Medium,PingFang SC;
          font-weight:500;
          color:rgba(248,68,68,1);
          line-height:50px;
          letter-spacing:1px;
          margin:100px 0px 0px 3px;
      }
       advantage .i-right {
          width:16px;
          height:16px;
          border-radius:2px;
          margin:123px 0px 0px 6px;
      }
      
      advantage .adv-list {
          padding-left:160px;
          padding-top:60px;
          max-width:1440px;
          padding-bottom:100px;
      }
      advantage .adv-list .power {
        float: left;
      }
      advantage .adv-list .adv-item{
        height:205px;
        width:346px;
        display:inline-block;
        margin-left:40px;
      }
      advantage .adv-list .adv-item img{
        width:68px;
        height:60px;
        margin-left:140px;
      }
    `}</style>
  </advantage>
)

export default ProductAdvantage;
