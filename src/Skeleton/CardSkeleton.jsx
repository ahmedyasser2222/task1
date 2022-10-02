import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function CardSkeleton({count}) {
  
   const Style=()=>{
    switch(count){
      case 2 : return (
        <div className="skeleton">
        <div>
           <Skeleton height={200}/>
           <Skeleton />
           <Skeleton />
           <Skeleton />
           <Skeleton  width={90} height={40} style={{margin:"0 60px"}}/>

        </div>
        <div>
           <Skeleton height={200}/>
           <Skeleton />
           <Skeleton />
           <Skeleton />
           <Skeleton  width={90} height={40} style={{margin:"0 60px"}}/>
        </div>
        </div>
        
        )
      break ;
  
      case 4 : return(
        
        <div className="skeleton">
        <div>
           <Skeleton height={200}/>
           <Skeleton />
           <Skeleton />
           <Skeleton />
           <Skeleton  width={90} height={40} style={{margin:"0 60px"}}/>

        </div>
        <div>
           <Skeleton height={200}/>
           <Skeleton />
           <Skeleton />
           <Skeleton />
           <Skeleton  width={90} height={40} style={{margin:"0 60px"}}/>
        </div>
        <div>
           <Skeleton height={200}/>
           <Skeleton />
           <Skeleton />
           <Skeleton />
           <Skeleton  width={90} height={40} style={{margin:"0 60px"}}/>

        </div>
        <div>
           <Skeleton height={200}/>
           <Skeleton />
           <Skeleton />
           <Skeleton />
           <Skeleton  width={90} height={40} style={{margin:"0 60px"}}/>

        </div>
        </div>
        
  
      )
     }
   }

  return (
    <Style />
  );
}

export default CardSkeleton;
