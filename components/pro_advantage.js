import React from 'react'
import ComponentLayout from "./componentLayout";
import TitleComp from "./titleComp";
const colorStyle ={
  color:"rgba(248,68,68,1)"
}
const titleStyle = {
  paddingTop:"100px"
}

const ProductAdvantage = () => (
  <ComponentLayout>
    <advantage>
      <TitleComp
        leftCoin={"./2-right.png"}
        rightCoin={"./2-left.png"}
        title={"产品优势"}
        titleCol={colorStyle}
        style={titleStyle}
      />
      <div className={"adv-list"}>
        <div className={"adv-item power"}>
          <img src="./icon/power.svg" alt="power"/>
          <div className={"title"}>电力资源</div>
          <div className={"introduce"}>自建矿场，稳定的电力资源</div>
        </div>
        <div className={"adv-item"}>
          <img src="./icon/factory.svg" alt="power"/>
          <div className={"title"}>专业矿场</div>
          <div className={"introduce"}>严格按照设施要求施工，建设最安全的矿场</div>
        </div>
        <div className={"adv-item"}>
          <img src="./icon/machine.svg" alt="power"/>
          <div className={"title"}>矿机设备</div>
          <div className={"introduce"}>与个大矿机厂商合作，拥有大量的现货和期货矿机</div>
        </div>
        <div className={"adv-item"}>
          <img src="./icon/operations.svg" alt="power"/>
          <div className={"title"}>托管运维</div>
          <div className={"introduce"}>拥有专业的技术团队，更加专业和自动化的运维</div>
        </div>
        <div className={"adv-item"}>
          <img src="./icon/service.svg" alt="power"/>
          <div className={"title"}>一站式服务</div>
          <div className={"introduce"}>提供不同品类产品，为客户提供一站保姆式服务</div>
        </div>
        <div className={"adv-item"}>
          <img src="./icon/power.svg" alt="power"/>
          <div className={"title"}>战略合作</div>
          <div className={"introduce"}>与各大矿池深度合作，享受较低的矿池费用</div>
        </div>
      </div>
    </advantage>
    <style jsx>{`
      advantage {
          width:1440px;
          height:720px;
      }
      advantage .adv-list {
          
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
          padding-top:20px;
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
      }
      advantage .adv-list .adv-item img{
        width:68px;
        height:60px;
        margin: 0 auto;
      }
    `}</style>
  </ComponentLayout>

)

export default ProductAdvantage;
