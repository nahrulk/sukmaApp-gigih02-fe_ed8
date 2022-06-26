import React from 'react';
import Flashcards from '../../Components/Flashcard/Flashcard';
import './Flashcardpage.css'
import { fisik } from '../../Components/Flashcard/Content/FlashcardContent';
import { useHistory } from 'react-router-dom';

function Physicalpage (props) {
  let history = useHistory();

  return (
    <body>
      <div className="container">
      <div className="Flashcardpage">
           <h1>PHYSICAL BULLYING</h1>
          <Flashcards items={fisik}/>
        </div>
      </div>

        <button class="button_back" onClick={() => history.goBack()}>Back</button>
     </body>
  );
}

export default Physicalpage;