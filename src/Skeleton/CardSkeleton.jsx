import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function CardSkeleton() {
  
  return (
   <div style={{margin:"0 20px" , width:'20%'}}>
      <Skeleton height={200}/>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <div style={{display:"flex" , justifyContent:"center"}}><Skeleton  width={90} height={40} /></div>
   </div>
  );
}

export default CardSkeleton;
