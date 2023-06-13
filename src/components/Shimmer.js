import { diffBgColors } from "../utils/constants";
import { getRandomClassName } from "../utils/helper";

const Shimmer = () => {
  return (
    <div className="col-10 m-auto pt-5 mt-5">
      {Array(10)
        .fill("")
        .map((currentValue, index) => (
          <div
            key={index}
            className={`border mb-3 p-3 shadow-lg ${getRandomClassName(
              ...diffBgColors
            )}`}
            style={{ height: "100px" }}
          >
            <p className="text-black fw-bolder m-3 text-center">
              Loading...
            </p>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
