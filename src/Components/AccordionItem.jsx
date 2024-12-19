import React, { useState } from "react";
import "../Styles/AccordionItem.css";



  function AccordionItem({ title, content, onToggle }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      const newIsOpen = !isOpen;
      setIsOpen(newIsOpen);
      onToggle(newIsOpen);
    };

    return (
      <div className={`accordion-item ${isOpen ? "open" : ""}`}>
        <button className="accordion-header" onClick={toggleAccordion}>
          <span>
            <span>{title}</span>
          </span>
          <span className="accordion-arrow">{isOpen ? "▲" : "▼"}</span>
        </button>
        {isOpen && (
          <div className="accordion-content">
            {Array.isArray(content)
              ? content.map((paragraph, index) => (
                  <div key={index} className="accordion-paragraph">
                    {paragraph}
                  </div>
                ))
              : <div>{content}</div>}
          </div>
        )}
      </div>
    );
  }

export default AccordionItem;
