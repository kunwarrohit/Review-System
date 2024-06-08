"use client";
import StarRating from "./StarRating";
import LikeDislikeButton from "./LikeDislikeButton";

const MainScreen = (props) => {
  const { title, desc, motive } = props;

  return (
    <div className="mt-5">
      <div>
        <div>
          <h2 className="text-3xl mb-4 font-bold">{title}</h2>
          <div>
            <div className=" mb-3 mt-3">
              <p className="text-xl">{desc}</p>
            </div>
            <div className=" mb-3">
              {motive === "recommended" ? (
                <LikeDislikeButton />
              ) : (
                <StarRating />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;

// <StarRating />
