import React, { useRef, useState } from 'react';
import './App.css';
import emailjs from 'emailjs-com'; 

function App() {
  const form = useRef();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      emailjs.sendForm('service_fek8qvj', 'template_2ocwf1o', form.current, 'rISJbZ9LU-DRuPsSp');
      console.log('Email sent successfully:', email);
      setSubmitted(true);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="App">
      <div className='menu'>
        <img src="logo512.png" className='menu-item'></img>
        <p className='logo'>decaf</p>
      </div>
      <header className="App-header">
        <div className="big-text"> 
          <h1>say goodbye to coffee chat jitters.</h1>
        </div>
        <p>keep your connections warm with <span className='green'>decaf</span>: a next-level networking tracker. think personalized crm + linkedin integrations + ai networking coach.</p>
        <p>with <span className='green'>decaf</span>...</p>
        <ul>
          <li>plan your outreach efforts to meet your goals</li>
          <li>get ai-driven insights on your coffee chats</li>
          <li>automate your follow-ups</li>
        </ul>
        <div>
          <form ref={form} onSubmit={handleSubmit}>
           {!submitted && (
              <>
                <p>
                sign up to be one of the first users here: &emsp; </p>
                <div className='sign-up'>
                  <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder='&nbsp; email'
                    /> &emsp;
                    <button type="submit">submit</button>
                </div>
              </>
            )}
          </form>
          {submitted && <p>Thank you for subscribing!</p>}
        </div>
      </header>
      <div className='footer'>
        <p>made by &nbsp;</p>
        <a href="https://github.com/mlekhi">maya</a>
        <p>&nbsp; with 💚</p>
      </div>
    </div>
  );
}

export default App;
