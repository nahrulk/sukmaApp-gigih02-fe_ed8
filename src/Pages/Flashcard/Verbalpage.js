import React from 'react';
import Flashcards from '../../Components/Flashcard/Flashcard';
import './Flashcardpage.css'
import { verbal } from '../../Components/Flashcard/Content/FlashcardContent';

function Verbalpage (props) {
  return (
    <body>
      <div className="container">
      <div className="Flashcardpage">
           <h1>VERBAL BULLYING</h1>
          <Flashcards items={verbal}/>
        </div>
      </div>

         <button class="button_back">Back</button>
     </body>
  );
}

export default Verbalpage;