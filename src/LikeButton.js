import { useState } from "react";
import "./index.css";

const LikeButton = () => {
  const [liked, setLiked] = useState(true);

  if (liked) {
    return (
      <button className="button buttonLike" onClick={() => setLiked(false)}>
        👍 Like
      </button>
    );
  } else {
    return (
      <button className="button buttonDisLike" onClick={() => setLiked(true)}>
        👎 DisLike
      </button>
    );
  }
};

export default LikeButton;
