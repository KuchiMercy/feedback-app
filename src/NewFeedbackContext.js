import { createContext, useState } from "react";
import FeedbackData from "./components/FeedbackData";


const NewFeedbackContext = createContext()

export const NewFeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData)
  const averageRating = (feedback.reduce((acc, item) => {
    return acc += item.rating
  }, 0) / feedback.length).toFixed(1)

  return <NewFeedbackContext.Provider value={{ feedback, averageRating }}>{children}</NewFeedbackContext.Provider>
}


export default NewFeedbackContext










