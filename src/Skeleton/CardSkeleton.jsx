import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function CardSkeleton({count}) {
  
   const Style=()=>{
    switch(count){
      case 2 : return (
        <SkeletonTheme
        baseColor="#ddd"
        highlightColor="#ffff"
        height={""}
        width={"200px"}
      >
        <SkeletonTheme
            baseColor="#ddd"
            highlightColor="#ffff"
            height={"345px"}
            width={"200px"}
          >
            <p>
              {" "}
              <Skeleton count={1} />
            </p>
          </SkeletonTheme>
          <SkeletonTheme
            baseColor="#ddd"
            highlightColor="#ffff"
            height={"345px"}
            width={"200px"}
          >
            <p>
              {" "}
              <Skeleton count={1} />
            </p>
          </SkeletonTheme>
        
      </SkeletonTheme>
      )
      break ;
  
      case 4 : return(
        <SkeletonTheme
        baseColor="#ddd"
        highlightColor="#ffff"
        height={""}
        width={"200px"}
      >
        <SkeletonTheme
            baseColor="#ddd"
            highlightColor="#ffff"
            height={"345px"}
            width={"200px"}
          >
            <p>
              {" "}
              <Skeleton count={1} />
            </p>
          </SkeletonTheme>
          <SkeletonTheme
            baseColor="#ddd"
            highlightColor="#ffff"
            height={"345px"}
            width={"200px"}
          >
            <p>
              {" "}
              <Skeleton count={1} />
            </p>
          </SkeletonTheme>
          <SkeletonTheme
            baseColor="#ddd"
            highlightColor="#ffff"
            height={"345px"}
            width={"200px"}
          >
            <p>
              {" "}
              <Skeleton count={1} />
            </p>
          </SkeletonTheme>
          <SkeletonTheme
            baseColor="#ddd"
            highlightColor="#ffff"
            height={"345px"}
            width={"200px"}
          >
            <p>
              {" "}
              <Skeleton count={1} />
            </p>
          </SkeletonTheme>
        
      </SkeletonTheme>
  
      )
     }
   }

  return (
    <Style />
  );
}

export default CardSkeleton;
