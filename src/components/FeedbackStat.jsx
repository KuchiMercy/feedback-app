import React from "react";
import { useContext } from "react";
import NewFeedbackContext from "../NewFeedbackContext";

const FeedbackStat = () => {
  const { feedback, averageRating } = useContext(NewFeedbackContext);

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} feedback</h4>
      <h4>Average Rating : {feedback.length === 0 ? "0" : averageRating} </h4>
    </div>
  );
};

export default FeedbackStat;
