import React from 'react';

const Guide = props => {

  return (
    <div className={"guide"}>
      <img src={"./icon/guide.svg"} alt="guide"/>
      <style>{`
       .guide img {
          height:60px;
          width:60px;
       }
      `}</style>
    </div>
  );
}
export default Guide;
