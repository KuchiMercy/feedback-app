import { useState } from "react";
import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";

const FeedbackItem = ({ id, rating, text, deleteFeedback }) => {
  const [reverse, setReverse] = useState(false);
  const changeState = () => {
    setReverse(!reverse);
  };

  return (
    <Card reverse={reverse}>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => deleteFeedback(id)}>
        <FaTimes color="red" />
      </button>
      <div className="text-display">{text}</div>
      <button onClick={changeState}>Click</button>
    </Card>
  );
};

export default FeedbackItem;
