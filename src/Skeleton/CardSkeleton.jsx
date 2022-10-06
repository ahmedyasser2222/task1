import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function CardSkeleton() {
  
  return (
   <div style={{margin:"0 20px" }}>
      <Skeleton height={200}/>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton  width={90} height={40} style={{margin:"0 60px"}}/>
   </div>
  );
}

export default CardSkeleton;
