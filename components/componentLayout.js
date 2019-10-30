import React from 'react';

const ComponentLayout = props => {
      const {leftStyle={}, rightStyle={}} = props;
      return(
          <div className={"wrap"}>
            <div className={"left"} style={leftStyle}></div>
            <div className={"center"}>
              {props.children}
            </div>
            <div className={"right"} style={rightStyle}></div>

            <style>{`
            *{
              margin:0;
              padding:0;
            }
            .wrap{
              display:flex;
              flex-direction:row;
            }
            .center {
              width:1440px;
              text-align:center;
            }
            .left,.right{
              flex-grow: 1;
              line-height: 30px;
            }
           
        `}</style>
          </div>
      )
}


export default ComponentLayout;
