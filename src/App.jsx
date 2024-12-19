import React, { useState } from 'react';
import AccordionItem from './Components/AccordionItem';
import "./Styles/Header.css";
import './App.css';
import './Styles/LanguageToggle.css';
import PailinImage from './assets/Pailin-blue.png';
import PailinBlackLine from './assets/Pailin-black-line.png'
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {

  const faqData = [
    {
      title: "What is Pailin Abroad?",
      content: {
        EN: [
          "Pailin Abroad is an English-learning website for Thai speakers, offering over 200 lessons based on audio conversations. As the conversations become more advanced, so will the specific grammar or vocabulary topic that the lesson focuses on. You will encounter this topic multiple times throughout the conversation, allowing you to hear it used in a natural context.",
          "Each lesson has activities based on the conversations, so you can practice your speaking, listening, grammar, and writing skills. Also included are helpful tips on common mistakes Thai learners make, insights into American culture, and breakdowns of phrases or phrasal verbs used in the dialogue.",
        ],
        TH: [
          "Pailin Abroad เป็นเว็บไซต์เรียนภาษาอังกฤษสำหรับผู้พูดภาษาไทย มีบทเรียนมากกว่า 200 บทที่เน้นการสนทนาเสียง โดยเมื่อการสนทนามีความซับซ้อนมากขึ้น หัวข้อไวยากรณ์หรือคำศัพท์ที่บทเรียนนั้นมุ่งเน้นก็จะมีความซับซ้อนมากขึ้นตามไปด้วย คุณจะพบหัวข้อนี้หลายครั้งในบทสนทนา เพื่อให้คุณได้ยินคำศัพท์ที่ใช้ในบริบทธรรมชาติ",
          "แต่ละบทเรียนมีกิจกรรมที่เกี่ยวข้องกับบทสนทนา เพื่อให้คุณได้ฝึกฝนทักษะการพูด การฟัง ไวยากรณ์ และการเขียน รวมถึงเคล็ดลับที่เป็นประโยชน์เกี่ยวกับข้อผิดพลาดทั่วไปที่ผู้เรียนชาวไทยมักทำ ความเข้าใจในวัฒนธรรมอเมริกัน และการแยกวิเคราะห์วลีหรือคำกริยาวลีที่ใช้ในบทสนทนา",
        ],
      },
    },
    {
      title: "Who is Pailin?",
      content: {
        EN: (
          <>
            <div>
              Pailin, a 21-year-old Thai girl from Bangkok, is at the heart of the platform. While she embarks on a year-long study abroad program in Los Angeles, you will follow along as she adapts to a new country, makes friends, interacts with her host family, explores a budding romance, and embraces a different culture. By getting to know Pailin, you will feel connected to her story and motivated to move through the narrative, improving your English along the way.
            </div>
            <div className="pailin-intro-container">
              <div className="pailin-intro">
                <img src={PailinBlackLine} alt="Pailin Black Line" className="pailin-black-line-image" />
                <p>Hi, I'm Pailin!</p>
              </div>
            </div>
          </>
        ),
        TH: (
          <>
            <div>
              ไพลิน สาวไทยวัย 21 ปีจากกรุงเทพฯ เป็นหัวใจสำคัญของแพลตฟอร์มนี้ ในขณะที่เธอเริ่มโปรแกรมการศึกษาต่อต่างประเทศเป็นเวลาหนึ่งปีในลอสแองเจลิส คุณจะได้ติดตามเธอในขณะที่เธอปรับตัวเข้ากับประเทศใหม่ สร้างเพื่อนใหม่ มีปฏิสัมพันธ์กับครอบครัวเจ้าภาพ สำรวจความรักที่กำลังเริ่มต้น และยอมรับวัฒนธรรมที่แตกต่าง ด้วยการทำความรู้จักกับไพลิน คุณจะรู้สึกเชื่อมโยงกับเรื่องราวของเธอ และมีกำลังใจในการเรียนภาษาอังกฤษผ่านการเล่าเรื่องนี้
            </div>
            <div className="pailin-intro-container">
              <div className="pailin-intro">
                <img src={PailinBlackLine} alt="Pailin Black Line" className="pailin-black-line-image" />
                <p>สวัสดีค่ะ ฉันชื่อไพลิน!</p>
              </div>
            </div>
          </>
        ),
      },
    },
    {
      title: "Why choose Pailin Abroad?",
      content: {
        EN: [
          "Pailin Abroad was created by two Americans who lived in Thailand for years, so the lessons have been designed to address the unique cultural and linguistic differences between the two countries. With a focus on real-life conversations with friends, family, love interests, and acquaintances, you will gain practice English skills, rather than the outdated and formal language often taught from textbooks.",
          "In the real world, native speakers talk at lightning-fast speeds, and you can't always ask them to slow down or repeat themselves. With Pailin Abroad, you can slow down and replay the audio until you fully grasp the conversation. Over time, you’ll move past translating every word in your head from English to Thai and will start naturally comprehending a conversation in English.",
          "We know there are plenty of ESL learning platforms out there. Pailin Abroad stands out by combining a compelling narrative, natural English, and complete translations into Thai, so that Thai speakers of all levels will find learning English accessible and engaging.",
        ],
        TH: [
          "Pailin Abroad ถูกสร้างขึ้นโดยชาวอเมริกันสองคนที่อาศัยอยู่ในประเทศไทยหลายปี ดังนั้นบทเรียนจึงถูกออกแบบมาเพื่อให้เหมาะสมกับความแตกต่างทางวัฒนธรรมและภาษาที่เป็นเอกลักษณ์ของทั้งสองประเทศ ด้วยการมุ่งเน้นการสนทนาในชีวิตจริงกับเพื่อน ครอบครัว ความสัมพันธ์ และคนรู้จัก คุณจะได้ฝึกทักษะภาษาอังกฤษในบริบทจริง แทนที่จะเรียนรู้จากภาษาในตำราที่ล้าสมัยและเป็นทางการ",
          "ในโลกความเป็นจริง ผู้พูดเจ้าของภาษามักพูดด้วยความเร็วที่รวดเร็วมาก และคุณไม่สามารถขอให้พวกเขาพูดช้าลงหรือพูดซ้ำได้เสมอไป ด้วย Pailin Abroad คุณสามารถชะลอและเล่นเสียงซ้ำได้จนกว่าคุณจะเข้าใจบทสนทนาอย่างเต็มที่ เมื่อเวลาผ่านไป คุณจะไม่ต้องแปลทุกคำในหัวจากภาษาอังกฤษเป็นภาษาไทยอีกต่อไป แต่จะเริ่มเข้าใจบทสนทนาในภาษาอังกฤษโดยธรรมชาติ",
          "เรารู้ว่ามีแพลตฟอร์มการเรียนรู้ภาษาอังกฤษมากมาย แต่ Pailin Abroad โดดเด่นด้วยการผสมผสานเรื่องราวที่น่าสนใจ ภาษาอังกฤษที่เป็นธรรมชาติ และการแปลภาษาไทยที่สมบูรณ์แบบ ทำให้ผู้พูดภาษาไทยทุกระดับสามารถเรียนรู้ภาษาอังกฤษได้อย่างเข้าถึงและสนุกสนาน",
        ],
      },
    },
  ];

  // State to track open/closed status for all accordion items
  const [accordionStates, setAccordionStates] = useState(
    faqData.map(() => false)
  );
  const [language, setLanguage] = useState("EN");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "EN" ? "TH" : "EN"));
  };

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
          <div className="language-toggle">
            <span
              className={language === "EN" ? "active" : ""}
              onClick={() => setLanguage("EN")}
            >
              EN
            </span>
            <span>|</span>
            <span
              className={language === "TH" ? "active" : ""}
              onClick={() => setLanguage("TH")}
            >
              TH
            </span>
          </div>
          <div className="accordion-container">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                language={language}
                onToggle={(isOpen) => handleToggle(index, isOpen)} // Pass index to track individual items
              />
            ))}
          </div>
          <div className="image-container">
            <img src={PailinImage} alt="Pailin" className="pailin-image" />
          </div>
          <div className={`bottom-contact ${areAllClosed ? 'margin-bottom' : ''}`}>
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
