import React from 'react';
import Lists from "./Lists";

const App = () => {
  const [comments, setComments] = React.useState([]);


  return (
    <div>
      <Lists comments={comments} setComments={setComments}/>
    </div>
  );
};

export default App;