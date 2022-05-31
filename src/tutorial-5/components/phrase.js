import React from 'react';

const Phrase = ({text}) => {
  return (
    <div>
      <div className="block"><h3>{text}</h3></div>
    </div>
  );
};

export default Phrase;