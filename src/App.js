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
      <div class='menu'>
        <img src="logo512.png" className='menu-item'></img>
        <p className='logo'>herbal</p>
      </div>
      <header className="App-header">
        <div className="big-text">
          <h1>say goodbye to coffee chat jitters.</h1>
        </div>
        <div>
          <p>young professional? serial networker? we have you covered. </p>
          <p>keep your connections warm by taking your networking tracker to the next level. plan your outreach efforts to meet your goals, automate your follow-ups, and get insights on your coffee chats.</p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
           {!submitted && (
              <>
                <p>
                sign up to be one of the first users here: &emsp;
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  /> &emsp;
                  <button type="submit">Submit</button>
                </p>
              </>
            )}
          </form>
          {submitted && <p>Thank you for subscribing!</p>}
        </div>
      </header>
      <div class='footer'>
        <p>made by &nbsp;</p>
        <a href="https://github.com/mlekhi">maya</a>
        <p>&nbsp; with 💚</p>
      </div>
    </div>
  );
}

export default App;
