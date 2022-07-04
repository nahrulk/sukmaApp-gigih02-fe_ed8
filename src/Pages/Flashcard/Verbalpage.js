import React from 'react';
import Flashcards from '../../Components/Flashcard/Flashcard';
import './Flashcardpage.css'
import { verbal } from '../../Components/Flashcard/Content/FlashcardContent';
import { useHistory } from 'react-router-dom';

function Verbalpage (props) {
  let history = useHistory();
  
  return (
    <body>
      <div className="container">
      <div className="Flashcardpage">
           <h1>VERBAL BULLYING</h1>
          <Flashcards items={verbal}/>
        </div>
      </div>

      <button class="button_back" onClick={() => history.goBack()}>Back</button>
     </body>
  );
}

export default Verbalpage;