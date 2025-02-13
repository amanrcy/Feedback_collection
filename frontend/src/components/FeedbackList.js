import React from "react";

const FeedbackList = ({ feedbacks }) => {
  return (
    <div>
      <h2>Submitted Feedbacks</h2>
      <ul>
        {feedbacks.map((feedback, index) => (
          <li key={index}>
            <strong>{feedback.name} ({feedback.email})</strong>: {feedback.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
