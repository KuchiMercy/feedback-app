import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import { RatenSelect } from "./RatingSelect";

const FeedbackForm = ({ handleAdd }) => {
  const [text, setText] = useState("");
  const [btndisabled, setBtndisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [rating, setRating] = useState(10);

  const handleChange = (e) => {
    const someThing = e.target.value;
    if (someThing === "") {
      setBtndisabled(true);
      setErrorMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtndisabled(true);
      setErrorMessage("Feedback should be at least 10 character long");
    } else {
      setBtndisabled(false);
      setErrorMessage();
    }
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      text: text,
      rating: rating,
    };
    handleAdd(newFeedback);
    setText("");
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service?</h2>
        <RatenSelect
          select={(rating) => {
            setRating(rating);
          }}
        />
        <div className="input-group">
          <input
            type="text"
            placeholder="write a review"
            value={text}
            onChange={handleChange}
          />
          <Button type={"submit"} isDisabled={btndisabled}>
            Send
          </Button>
        </div>
        {errorMessage && <div className="message">{errorMessage}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
