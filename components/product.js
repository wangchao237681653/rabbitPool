import React from 'react'
import Link from 'next/link'

const Product = () => (
  <product>
    <div className={"p-title"}>
      <img className={"p-left"} src={"/1-right.png"} alt=""/>
      <span>挖矿产品</span>
      <img className={"p-right"} src={"/1-left.png"} alt=""/>
    </div>
      <div className={"summary"}>矿机租赁和云算力都是租赁矿机形式，同时提供托管矿机等多种形式，让您更轻松挖取比特币（BTC）</div>
      <div className={"list"}>
        <div className={"pl-left item"}>
          <img src={"./img1.svg"} alt="mine-rent"/>
          <span className={"title"}>矿机租赁</span>
          <div className={"introduce"}>蚂蚁矿机，神马矿机等租赁</div>
          <div className={"actBtn mbtn"}>
            <Link href='./unfind'>
              <div className={"btnContent"}>矿机租赁产品</div>
            </Link>
          </div>
        </div>
        <div className={"pl-middle item"}>
          <img src={"./img2.svg"} alt="cloud-arg"/>
          <span className={"title"}>云算力</span>
          <div className={"introduce"}>挖比特币等云算力租赁</div>
          <div className={"actBtn cBtn"}>
            <Link href='./unfind'>
              <div className={"btnContent"}>云算力产品</div>
            </Link>
          </div>
        </div>
        <div className={"pl-right item"}>
          <img src={"./img3.svg"} alt="mine-rent"/>
          <span className={"title"}>矿机托管</span>
          <div className={"introduce"}>比特币矿机海内外托管</div>
          <div className={"actBtn rBtn"}>
            <Link href='./hosting'>
              <div className={"btnContent"}>矿机托管介绍</div>
            </Link>
          </div>
        </div>
      </div>

    <style jsx>{`
      product {
          width:100%;
          height:657px;
          background:rgba(246,249,252,1);
          box-shadow:0px 1px 0px 0px rgba(0,0,0,0.04);
      }
      product .summary {
          height:22px;
          font-size:16px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(153,153,153,1);
          line-height:22px;
          padding-left:381px;
          padding-top:10px;
      }
      .p-title {
          padding-top:100px;
          padding-left:611px;
      }
      .p-title span {
          width:150px;
          height:50px;
          font-size:36px;
          font-family:PingFangSC-Medium,PingFang SC;
          font-weight:500;
          color:rgba(96,90,254,1);
          line-height:50px;
          letter-spacing:1px;
      }
      .p-title .p-left {
          width:20px;
          height:20px;
          padding-right:3px;
      }
       .p-title .p-right {
          width:16px;
          height:16px;
          padding-left:5px;
      }
      product .list {
          padding:40px 160px;   
      }
      product .list .item {
          width:348px;
          height:335px;
          background:rgba(255,255,255,1);
          box-shadow:0px 21px 87px -32px rgba(0,0,0,0.14);
          border-radius:22px;
          border:1px solid rgba(0,0,0,0.04);
          margin-left:40px;
      }
      product .list  img {
          width:120px;
          height:120px;
          padding:40px 114px 0px
      }
      product .list .title {
          height:25px;
          font-size:18px;
          font-family:PingFangSC-Medium,PingFang SC;
          font-weight:500;
          color:rgba(51,51,51,1);
          line-height:25px;
          padding:20px 0px 0px 138px;
      }
      product .list .introduce {
          width:168px;
          height:20px;
          font-size:14px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(153,153,153,1);
          line-height:20px;
          padding:10px 0px 0px 90px;
      }
       product .list .pl-left {
          float:left;
       }
       product .list  .actBtn {
          width:140px;
          height:40px;
          box-shadow:0px 12px 25px -13px rgba(0,75,255,0.58);
          border-radius:20px;
          margin:20px 0px 0px 104px;
      }
      product .pl-left .mbtn {
          background:rgba(67,123,251,1);
      }
       product  .cBtn {
          background:rgba(62,207,142,1);
      }
      
      product  .rBtn {
          background:rgba(251,127,64,1);
      }
      product .actBtn .btnContent {
          height:22px;
          font-size:16px;
          font-family:PingFangSC-Medium,PingFang SC;
          font-weight:500;
          color:rgba(255,255,255,1);
          line-height:22px;
          padding: 9px 0px 0px 22px;
      }
      
      .pl-left, .pl-middle, .pl-right {
          display:inline-block;
      }
    `}</style>
  </product>
)

export default Product;
