import React, { useState } from 'react';
import AccordionItem from './Components/AccordionItem';
import "./Styles/Header.css";
import './App.css';
import PailinImage from './assets/Pailin-blue.png';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleToggle = (isOpen) => {
    setIsAccordionOpen((prevState) => {
      return isOpen ? true : prevState;
    });
  };

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
    <>
      <Header />
      <div className="page-container">
        <div className="app-container">
          <h1 className="page-title">PAILIN ABROAD</h1>
          <div className="accordion-container">
            {faqData.map((item, index) => (
              <AccordionItem key={index} title={item.title} content={item.content} onToggle={handleToggle} />
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
      <Footer isAccordionOpen={isAccordionOpen} />
      </>
  );
}

export default App;
