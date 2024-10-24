import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import { AnimatePresence, motion } from "framer-motion";
import NewFeedbackContext from "../NewFeedbackContext";

const FeedbackList = ({ deleteFeedback }) => {
  const { feedback } = useContext(NewFeedbackContext);
  if (!feedback || feedback.length === 0) {
    return <div>No FeedBack Yet</div>;
  }
  return (
    <div id="feedbackList">
      <AnimatePresence>
        {feedback &&
          feedback.map((item) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <FeedbackItem
                  key={item.id}
                  id={item.id}
                  rating={item.rating}
                  text={item.text}
                  deleteFeedback={deleteFeedback}
                />
              </motion.div>
            );
          })}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
