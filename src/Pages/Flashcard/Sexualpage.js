import React from 'react';
import Flashcards from '../../Components/Flashcard/Flashcard';
import './Flashcardpage.css'
import { sexual } from '../../Components/Flashcard/Content/FlashcardContent';

function Sexualpage (props) {
  return (
    <body>
      <div className="container">
      <div className="Flashcardpage">
           <h1>SEXUAL BULLYING</h1>
          <Flashcards items={sexual}/>
        </div>
      </div>

         <button class="button_back">Back</button>
     </body>
  );
}

export default Sexualpage;