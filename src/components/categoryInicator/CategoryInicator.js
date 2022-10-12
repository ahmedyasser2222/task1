import Skeleton from "react-loading-skeleton"
import  "./category.css"

export default function CategoryInicator(props) {
  const { imgSRC, title } = props;
  return (
    <div className="card-category flex flex-col items-center justify-between px-2 space-y-2 ">
      <div /* style={{ width: "10rem", height: "10rem" }} */ className="img-category">
        <button className="h-full w-full relative ">
          <img objectFit="contain object-fill" layout="fill" src={imgSRC } alt="اول منتج" />
        </button>
      </div>
      <h3>{title}</h3>
    </div>
  );
}
