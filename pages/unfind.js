import Link from "next/link";

export default function Unfind() {
  return (
    <div className={"unfind"}>
      <Link href='./index'>
        <img src={"./404.png"} alt=""/>
      </Link>
      <style>{`
         .unfind {
            padding-left:120px;
         }
        .unfind img {
            width:1200px;
        }
        `}</style>
    </div>

  );
}
