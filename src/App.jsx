import React from 'react';
import AccordionItem from './Components/AccordionItem';
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
      title: "What makes Pailin Abroad special?",
      content:
        "Pailin Abroad offers a unique approach by combining language learning with cultural insights and real-life applications.",
    },
    {
      title: "What kind of learners would benefit from this website?",
      content:
        "Anyone looking to improve their English skills with a focus on speaking, listening, and understanding cultural contexts.",
    },
  ];

  return (
    <div className="page-container">
      <div className="app-container">
        <h1 className="page-title">ABOUT PAILIN ABROAD</h1>
        <div className="accordion-container">
          {faqData.map((item, index) => (
            <AccordionItem key={index} title={item.title} content={item.content} />
          ))}
        </div>
        <div className="image-container">
          <img src={PailinImage} alt="Pailin" className="pailin-image" />
        </div>
      </div>
    </div>
  );
}

export default App;
