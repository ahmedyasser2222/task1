import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import './cardSkeleton.css'
function CardSkeleton() {
  
  return (
   <div  className='card-skeleton'>
      <Skeleton height={200}/>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <div style={{display:"flex" , justifyContent:"center"}}><Skeleton  width={90} height={40} /></div>
   </div>
  );
}

export default CardSkeleton;
