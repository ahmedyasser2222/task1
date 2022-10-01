import React from "react";

export default function CategoryInicator(props) {
  const { imgSRC, title } = props;
  return (
    <div className=" flex flex-col items-center justify-center px-2 space-y-2">
      <div style={{ width: "10rem", height: "10rem" }}>
        <button className="h-full w-full relative ">
          <img objectFit="contain object-fill" layout="fill" src={imgSRC} alt="..." />
        </button>
      </div>
      <span className="text-prim">{title}</span>
    </div>
  );
}
