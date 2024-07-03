import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setSubmitted(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log('Email submitted:', email);
        setSubmitted(true);
      } else {
        console.error('Failed to submit email');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="big-text">
          <h1>say goodbye to coffee chat jitters.</h1>
        </div>
        <p>young professional? serial networker? we have you covered. </p>
        <p>take your contact tracking system to the next level. automate your follow-ups and get insights on your networking.</p>
        <p>turn your chats into 🍵</p>
        <div>
          <form onSubmit={handleSubmit}>
           {!submitted && (
              <>
                <label>
                  Enter your email:
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
                <button type="submit">Submit</button>
              </>
            )}
          </form>
          {submitted && <p>Thank you for subscribing!</p>}
        </div>
      </header>
    </div>
  );
}

export default App;
