import React, { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

function LikeDislikeButton() {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setDisliked(false);
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    setLiked(false);
  };

  return (
    <div>
      <button onClick={handleLike} disabled={liked}>
        {liked ? (
          <ThumbUpIcon color="primary" />
        ) : (
          <ThumbUpOffAltIcon color="action" />
        )}
      </button>
      <button onClick={handleDislike} disabled={disliked}>
        {disliked ? (
          <ThumbDownIcon color="primary" />
        ) : (
          <ThumbDownOffAltIcon color="action" />
        )}
      </button>
    </div>
  );
}

export default LikeDislikeButton;
