import React, { useState } from "react";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming your PHP API endpoint is hosted at http://example.com/api/subscribe.php
    const apiUrl = "http://streetztalk.xyz/api/subscribe.php";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage({ type: "success", text: data.message });
      } else {
        const data = await response.json();
        setMessage({ type: "error", text: data.error });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "An error occurred while processing your request.",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit">Subscribe</button>
      </form>

      {message && (
        <div
          className={
            message.type === "success" ? "success-message" : "error-message"
          }
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default SubscriptionForm;
