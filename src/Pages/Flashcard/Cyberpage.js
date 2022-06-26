import React from 'react';
import Flashcards from '../../Components/Flashcard/Flashcard';
import './Flashcardpage.css'
import { cyber } from '../../Components/Flashcard/Content/FlashcardContent';
import { useHistory } from 'react-router-dom';

function Cyberpage (props) {
  let history = useHistory();

  return (
    <body>
      <div className="container">
      <div className="Flashcardpage">
           <h1>CYBERBULLYING</h1>
          <Flashcards items={cyber}/>
        </div>
      </div>

        <button class="button_back" onClick={() => history.goBack()}>Back</button>
     </body>
  );
}

export default Cyberpage;