import React, { useState } from "react";
import "../Styles/AccordionItem.css";



  function AccordionItem({ title, content, language, onToggle }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      const newIsOpen = !isOpen;
      setIsOpen(newIsOpen);
      onToggle(newIsOpen);
    };

    return (
      <div className={`accordion-item ${isOpen ? "open" : ""}`}>
        <button className="accordion-header" onClick={toggleAccordion}>
          <p><span>{title}</span></p>
          <span className="accordion-arrow">{isOpen ? "▲" : "▼"}</span>
        </button>
        {isOpen && (
          <div className="accordion-content">
            {Array.isArray(content[language]) ? (
              content[language].map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <p>{content[language]}</p>
            )}
          </div>
        )}
      </div>
    );
  }

export default AccordionItem;
