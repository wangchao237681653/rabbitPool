import React from 'react';

const TitleComp = props => {
  const {leftCoin,rightCoin,titleCol,title,style} = props;

  return (
    <div className={"t-reg"} style={style}>
        <img className={"t-leftCoin"} src={leftCoin} alt=""/>
        <span className={"t-title"} style={titleCol}>{title}</span>
        <img className={"t-rightCoin"} src={rightCoin} alt=""/>
        <div className={'t-summary'}>{props.summary}</div>
        <style>{`
        body {
          margin: 0;
        }
        .t-leftCoin {
           height:23px;
           width:29px;
        }
         .t-rightCoin {
           height:22px;
           width:27px;
        }
        .t-reg {
           height:82px;
           display: block;
           margin:0 auto;
        }
        .t-title {
          height:50px;
          font-size:36px;
          font-family:PingFangSC-Medium,PingFang SC;
          font-weight:500;
          line-height:50px;
          letter-spacing:1px;
        }
        .t-summary {
            height:22px;
            font-size:16px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(153,153,153,1);
            line-height:22px;
            padding-top:10px;
            text-align:center;
        }
      `}</style>
    </div>
  );
}
export default TitleComp;
