import React, { useState } from 'react';
import '../Styles/AccordionItem.css';

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <button className="accordion-header" onClick={toggleAccordion}>
        <p><span>{title}</span></p>
        <span className="accordion-arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && <div className="accordion-content"><p>{content}</p></div>}
    </div>
  );
}

export default AccordionItem;
