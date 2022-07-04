import React from 'react';
import Flashcards from '../../Components/Flashcard/Flashcard';
import './Flashcardpage.css'
import { sexual } from '../../Components/Flashcard/Content/FlashcardContent';
import { useHistory } from 'react-router-dom';

function Sexualpage (props) {
  let history = useHistory();

  return (
    <body>
      <div className="container">
      <div className="Flashcardpage">
           <h1>SEXUAL BULLYING</h1>
          <Flashcards items={sexual}/>
        </div>
      </div>

      <button class="button_back" onClick={() => history.goBack()}>Back</button>
      
     </body>
  );
}

export default Sexualpage;