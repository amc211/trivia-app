import { useState, useEffect, useCallback, Typography } from 'react';


function TriviaItem({ item, data, setData }) {
  const [editMode, setEditMode] = useState(false);

  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      setEditMode(false);
    }
  }, []);
  
  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  function handleDoubleClick() {
    setEditMode((prevState) => {
      return !prevState;
    });
  }
  const handleOnKeyPress = (event, key, id) => {
    if (event.key === "Enter") {
      setEditMode((prevState) => {
        return !prevState;
      });

      const newValue = (key === 'incorrect_answer')
        ? event.target.value.split(',')
        : event.target.value

      const newArray = [...data];
      const index = newArray.findIndex(a => a.id === id)
      newArray[index][key] = newValue;
      setData(newArray);
    }
  }

  const { id, question, incorrect_answers, correct_answer } = item;

  const itemIncorrectAnswers = (Array.isArray(incorrect_answers))
    ? incorrect_answers.join(', ') : ''

  return (
    <>
      <div>
        question: {editMode ? (
          <input
            type="text"
            defaultValue={question}
            onKeyDown={(e) => handleOnKeyPress(e, 'question', id)}
            required
          />
        ) : (
          <span onDoubleClick={handleDoubleClick} dangerouslySetInnerHTML={{ __html: question }}></span>
        )}
      </div>
      <div>
        right answer: {editMode ? (
          <input
            type="text"
            defaultValue={item.correct_answer}
            onKeyDown={(e) => handleOnKeyPress(e, 'correct_answer', id)}
            required
          />
        ) : (
          <span onDoubleClick={handleDoubleClick} dangerouslySetInnerHTML={{ __html: correct_answer }}></span>
        )}
      </div>
      <div>
        wrong answers: {editMode ? (
          <input
            type="text"
            defaultValue={itemIncorrectAnswers}
            onKeyDown={(e) => handleOnKeyPress(e, 'incorrect_answers', id)}
            required
          />
        ) : (
          <span onDoubleClick={handleDoubleClick} dangerouslySetInnerHTML={{ __html: itemIncorrectAnswers }}></span>
        )}
      </div>
    </>
  );
}

export default TriviaItem;