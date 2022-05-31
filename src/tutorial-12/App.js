import React from 'react';

const Product = ({ items = [] }) => {
  return <ul>
    {items.map((item) => (
      <li>
        <b>{item}</b>
        <button>X</button>
      </li>
    ))}
  </ul>
}

const App = () => {
  return (
    <div>
      <Product items={['Хлеб','Соль']}/>
    </div>
  );
};

export default App;