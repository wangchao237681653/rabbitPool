import React from 'react';

const showGuide = show => {
  if(show) {
    return (
      <div className={"guide"}>
        <img  src={"./icon/guide.svg"} alt="guide"/>
      </div>
    )
  }
}
const WorkFallItem = props => {
  const {mainCoin,mainTitle,summary,style,isShowGuide} = props.data;

  return (
    <div>
      <div className={"wi-reg"} style={style}>
        <img className={"wi-coin"} src={mainCoin} alt=""/>
        <div className={"wi-title"}>{mainTitle}</div>
        <div className={"wi-summary"}>{summary}</div>
      </div>
      {
        showGuide(isShowGuide)
      }
      <style>{`
        body {
          margin: 0;
        }
        .wi-coin {
          width:80px;
          height:80px;
          margin: 0 auto;
          display: block;
        }
        .wi-reg {
          height:155px;
          width:235px;
        }
        .wi-title {
          height:25px;
          font-size:18px;
          font-family:PingFangSC-Medium,PingFang SC;
          font-weight:500;
          color:rgba(51,51,51,1);
          padding-top:20px;
          text-align:center;
        }
        .wi-summary {
          height:20px;
          font-size:14px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(153,153,153,1);
          padding-top:10px;
          text-align:center;
        }
        .guide {
          float:left;
          width:60px;
          height:155px;
          text-align: center;
          vertical-align:middle;
          line-height:200px;
        }
        .guide img{
          width:60px;
          height:60px;
          vertical-align: middle
          display: inline-block; 
        }
      `}</style>
    </div>

  );
}
export default WorkFallItem;
