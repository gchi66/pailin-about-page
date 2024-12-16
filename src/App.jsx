import React from 'react';
import AccordionItem from './Components/AccordionItem';
import "./Styles/Header.css";
import './App.css';
import PailinImage from './assets/Pailin-blue.png';

function App() {
  const faqData = [
    {
      title: "What is Pailin Abroad?",
      content:
        "Pailin Abroad is a platform that helps Thai learners improve their English through structured lessons, activities, and cultural tips.",
    },
    {
      title: "Who is Pailin?",
      content:
        "Pailin is a passionate educator dedicated to making English learning accessible and enjoyable for Thai students.",
    },
    {
      title: "Why choose Pailin Abroad?",
      content:
        "Pailin Abroad offers a unique approach by combining language learning with cultural insights and real-life applications.",
    },
  ];

  return (
    <div className="page-container">
      <div className="app-container">
        <h1 className="page-title">PAILIN ABROAD</h1>
        <div className="accordion-container">
          {faqData.map((item, index) => (
            <AccordionItem key={index} title={item.title} content={item.content} />
          ))}
        </div>
        <div className="image-container">
          <img src={PailinImage} alt="Pailin" className="pailin-image" />
        </div>
        <div className='bottom-contact'>
          <p>Have a question?</p>
          <p>Email us at pailinabroad@gmail.com!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
