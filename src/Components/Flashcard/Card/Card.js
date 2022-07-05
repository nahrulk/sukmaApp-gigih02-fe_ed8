import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Card.css';

const Content = (props) => {
  const { type, display } = props;
  switch (type) {
    case 'string':
      return display.length > 100 ? (
        <p className="Flashcard__text">{display}</p>
      ) : (
        <h2>{display}</h2>
      );
    default:
      return <div>{display}</div>;
  }
};

const Flashcard = (props) => {
  const [showFront, setShowFront] = useState(true);
  const { front, back, setFlippedState } = props;

  const handleClick = () => {
    setFlippedState();
    setShowFront(!showFront);
  };

  return (
    <div
      className={classnames('Flashcard', {
        Flashcard__top: showFront,
        'Flashcard--flipped': !showFront
      })}
      onClick={handleClick}>
      <div className="Flashcard__content">
        {showFront ? (
          <div className="Flashcard--front">
            <Content type={front.type} display={front.display} options={front.options} />
          </div>
        ) : (
          <div className="Flashcard--back">
            <Content type={back.type} display={back.display} options={back.options} />
          </div>
        )}
      </div>
    </div>
  );
};

Flashcard.propTypes = {
  front: PropTypes.shape({
    type: PropTypes.oneOf(['string']),
    display: PropTypes.string,
    options: PropTypes.shape({
      alt: PropTypes.string
    })
  }).isRequired,
  back: PropTypes.shape({
    type: PropTypes.oneOf(['string']),
    display: PropTypes.string,
    options: PropTypes.shape({
      alt: PropTypes.string
    })
  }).isRequired,
  handleClick: PropTypes.func
};

export default Flashcard;
export { Content };
