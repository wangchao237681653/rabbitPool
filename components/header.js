import React from 'react'
import Link from 'next/link'
import ComponentLayout from "./componentLayout";
const style ={
  background:"rgba(18,77,255,1)"
};
const Header = () => (

    <ComponentLayout
      leftStyle={style}
      rightStyle={style}
      >
      <header>
        <ul>
          <li className={"logo"}>
            <img src="./logo.svg" alt="logo" />
          </li>
          <li>
            <Link href='./index'>
              <a className={"index"}>首页</a>
            </Link>
          </li>
          <li>
            <Link href='./hosting'>
              <a className={"mine-h dark"}>矿机托管</a>
            </Link>
          </li>
          <li>
            <Link href='./unfind'>
              <a className={"cloud-a dark"}>云算力</a>
            </Link>
          </li>
          <li>
            <Link href='./unfind'>
              <a className={"mine-r dark"}>矿机租赁</a>
            </Link>
          </li>
        </ul>
      </header>
      <style jsx>{`
      header {
        width:100%;
        height:60px;
        background:rgba(18,77,255,1);
      }
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
      }
      li {
        float: left;
      }
       
      li a {
          display: block;
          text-align: center;
          padding: 19px 60px;
          text-decoration: none;
      }
      .logo img {
          width:166px;
          height:24px;
          padding:18px 0px 18px 120px 
      }
      .index {
          width:32px;
          height:22px;
          font-size:16px;
          font-family:PingFangSC-Medium,PingFang SC;
          font-weight:500;
          color:rgba(255,255,255,1);
          line-height:22px;
          padding:19px 0px 19px 60px;
      }
      .dark {
        font-size:16px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(255,255,255,0.65);
       }
      
    `}</style>
    </ComponentLayout>

)

export default Header;
