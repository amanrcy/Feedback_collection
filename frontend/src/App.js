import React, { useState, useEffect } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import "./App.css";

const App = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  // ✅ Fetch feedbacks from backend
  const fetchFeedbacks = () => {
    fetch("http://localhost:3000/api/feedbacks")
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Fetched Feedbacks:", data);
        setFeedbacks(data);
      })
      .catch((error) => console.error("❌ Error fetching feedbacks:", error));
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <div className="container">
      <h1>Feedback App</h1>
      {/* Pass the fetch function so it reloads data after submission */}
      <FeedbackForm fetchFeedbacks={fetchFeedbacks} />
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
};

export default App;
