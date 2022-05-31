import React from 'react';
import './css/style.css';
import Phrase from "./components/phrase";
import EmptyBlock from "./components/emptyBlock";

const adjectivesArr = [
  "абсолютный",
  "адский",
  "азартный",
  "активный",
  "ангельский",
  "астрономический",
  "баснословный",
  "безбожный",
  "безбрежный",
  "безвозвратный",
  "безграничный",
  "бездонный",
  "бездушный",
  "безжалостный",
  "замечательно",
  "замечательный",
  "записной",
  "запредельный",
  "заядлый",
  "звериный",
  "зверский",
  "зеленый",
  "злой",
  "злостный",
  "значительный",
  "неоспоримый",
  "неотразимый",
  "неоценимый",
  "непередаваемый"
];
const nounsArr = [
  "лгун",
  "день",
  "конь",
  "олень",
  "человек",
  "программист",
  "ребёнок",
  "конец",
  "город",
  "дурак"
];

const App = () => {
  const [item, setItem] = React.useState([]);

  const handleRandom = () => {
    const randomAdj = adjectivesArr[Math.round(Math.random() * adjectivesArr.length - 1)]
    const randomNouns = nounsArr[Math.round(Math.random() * nounsArr.length - 1)]
    const randomPhrase = randomAdj + ' ' + randomAdj + ' ' + randomNouns;
    setItem([randomPhrase, ...item])
  }

  const handleClear = () => {
    setItem([]);
  }

  return (
    <div className="wrapper">
      <div className="list">{!item.length && <EmptyBlock/>}</div>
        {item.map((text) => <Phrase key={text} text={text}/>)}
      <button onClick={handleRandom} className="btn btn_generate">Сгенерировать</button>
      <button onClick={handleClear} className="btn btn_clear">Очистить</button>
    </div>
  );
};

export default App;