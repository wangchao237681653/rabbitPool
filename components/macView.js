import React from 'react';
import TitleComp from "./titleComp";
const colorStyle ={
  color: "rgba(62,207,142,1)"
}
const titleStyle = {
  paddingTop:"100px"
}
const MacView = props => (
  <div>
    <TitleComp
      leftCoin={"/3-right.png"}
      rightCoin={"3-left.png"}
      title={"矿场实景图"}
      summary={"大型矿场,专业的矿机托管中心"}
      titleCol={colorStyle}
      style={titleStyle}
    />
    <div className={"view-list"}>
      <img src={"/img/view01.png"} alt=""/>
      <img src={"/img/view02.png"} alt=""/>
      <img src={"/img/view03.png"} alt=""/>
      <img src={"/img/view04.png"} alt=""/>
      <img src={"/img/view05.png"} alt=""/>
      <img src={"/img/view06.png"} alt=""/>
    </div>
    <style>{`
    .view-list {
      padding-left: 160px;
    }
    .view-list img {
       margin:40px 20px 20px 20px;
    }
    .view-list img {
        width:348px;
        height:200px;
        box-shadow:0px 19px 96px -32px rgba(0,0,0,0.41);
        border-radius:22px;
        border:1px solid rgba(0,0,0,0.04);
    }
  `}</style>
  </div>
);

export default MacView;
