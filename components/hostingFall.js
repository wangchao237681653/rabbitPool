import React from 'react'
import TitleComp from './titleComp';
import WorkFallItem from './WorkFallItem';
import Guide from './guide';

const colorStyle = {
  color: "rgba(96,90,254,1)"
}
const titleStyle = {
    paddingTop:"100px"
}
const workStepData = [{
  mainCoin:"/icon/workfall1.svg",
  mainTitle:"购买矿机",
  summary:"选择矿机的托管服务",
  isShowGuide: true,
  style:{
    float:"left"
  }
},{
  mainCoin:"/icon/workfall2.svg",
  mainTitle:"等待发货",
  summary:"等待矿机运到矿场",
  isShowGuide: true,
  style:{
    float:"left"
  }
},{
  mainCoin:"/icon/workfall3.svg",
  mainTitle:"矿机到货",
  summary:"由技术人员部署矿机托管上架",
  isShowGuide: true,
  style:{
    float:"left"
  }
},{
  mainCoin:"/icon/workfall4.svg",
  mainTitle:"开始挖矿",
  summary:"获得矿机挖矿收益",
  style:{
    float:"left"
  }
}];

const Hosting = () => (
  <hosting>
    <div>
        <div>
          <TitleComp
            leftCoin={"/1-right.png"}
            rightCoin={"1-left.png"}
            title={"矿机托管流程"}
            summary={"简单四步，轻松托管矿机"}
            titleCol={colorStyle}
            style={titleStyle}
          />
          <div className={"content"}>
            {
              workStepData.map((d,i) =>{
                  return(
                    <WorkFallItem data={d} />
                  )
              })
            }
          </div>

        </div>
    </div>
    <style jsx>{`
      hosting {
        width:1440px;
        height:477px;
        background:rgba(246,249,252,1);
        box-shadow:0px -1px 0px 0px rgba(0,0,0,0.04);
      }
      hosting .content {
        width:1120px;
        height:155px;
        padding:40px 160px 100px 160px;
        clear:both;
      }
    `}</style>
  </hosting>
)

export default Hosting;
