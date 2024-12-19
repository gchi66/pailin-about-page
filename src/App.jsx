import React, { useState } from 'react';
import AccordionItem from './Components/AccordionItem';
import "./Styles/Header.css";
import './App.css';
import PailinImage from './assets/Pailin-blue.png';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  const faqData = [
    {
      title: "What is Pailin Abroad?",
      content: [
        "Pailin Abroad is an English-learning website for Thai speakers, offering over 200 lessons based on audio conversations. As the conversations become more advanced, so will the specific grammar or vocabulary topic that the lesson focuses on. You will encounter this topic multiple times throughout the conversation, allowing you to hear it used in a natural context.",
        "Each lesson has activities based on the conversations, so you can practice your speaking, listening, grammar, and writing skills. Also included are helpful tips on common mistakes Thai learners make, insights into American culture, and breakdowns of phrases or phrasal verbs used in the dialogue.",
      ]
    },
    {
      title: "Who is Pailin?",
      content:
        "Pailin, a 21-year-old Thai girl from Bangkok, is at the heart of the platform. While she embarks on a year-long study abroad program in Los Angeles, you will follow along as she adapts to a new country, makes friends, interacts with her host family, explores a budding romance, and embraces a different culture. By getting to know Pailin, you will feel connected to her story and motivated to move through the narrative, improving your English along the way.",
    },
    {
      title: "Why choose Pailin Abroad?",
      content: [
        "Pailin Abroad was created by two Americans who lived in Thailand for years, so the lessons have been designed to address the unique cultural and linguistic differences between the two countries. With a focus on real-life conversations with friends, family, love interests, and acquaintances, you will gain practice English skills, rather than the outdated and formal language often taught from textbooks.",
        "In the real world, native speakers talk at lightning-fast speeds, and you can't always ask them to slow down or repeat themselves. With Pailin Abroad, you can slow down and replay the audio until you fully grasp the conversation. Over time, you’ll move past translating every word in your head from English to Thai and will start naturally comprehending a conversation in English.",
        "We know there are plenty of ESL learning platforms out there. Pailin Abroad stands out by combining a compelling narrative, natural English, and complete translations into Thai, so that Thai speakers of all levels will find learning English accessible and engaging.",
      ],
    },
  ];

  // State to track open/closed status for all accordion items
  const [accordionStates, setAccordionStates] = useState(
    faqData.map(() => false) // Initialize all to false (closed)
  );

  const handleToggle = (index, isOpen) => {
    setAccordionStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = isOpen;
      return newStates;
    });
  };

  // Check if all accordion items are closed
  const areAllClosed = accordionStates.every((state) => !state);

  return (
    <>
      <Header />
      <div className="page-container">
        <div className="app-container">
          <h1 className="page-title">PAILIN ABROAD</h1>
          <p className='tagline'>Effective English learning for Thai speakers with practical, conversation-based lessons.
          </p>
          <div className="accordion-container">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                onToggle={(isOpen) => handleToggle(index, isOpen)} // Pass index to track individual items
              />
            ))}
          </div>
          <div className="image-container">
            <img src={PailinImage} alt="Pailin" className="pailin-image" />
          </div>
          <div className="bottom-contact">
            <p>Have a question?</p>
            <p>Email us at pailinabroad@gmail.com!</p>
          </div>
        </div>
      </div>
      <Footer isAccordionOpen={!areAllClosed} />
    </>
  );
}

export default App;
