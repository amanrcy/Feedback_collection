import React, { useState } from "react";

const FeedbackForm = ({ fetchFeedbacks }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("✅ Submit Clicked!", { name, email, message });

    fetch("http://localhost:3000/api/feedbacks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Server Response:", data);
        alert("Feedback submitted successfully!");
        fetchFeedbacks(); // ✅ Refresh the list after submission
        setName(""); // ✅ Clear input fields after successful submission
        setEmail("");
        setMessage("");
      })
      .catch((error) => console.error("❌ Error submitting feedback:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
