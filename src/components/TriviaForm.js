
function TriviaForm({ handleOnSubmit,
  question, setQuestion,
  goodAnswer, setGoodAnswer,
  badAnswers, setBadAnswers,
}) {

  const onChangeEvent = (value, key) => {
    switch(key) {
      case 'question':
        setQuestion(value)
        break;
      case 'correct_answer':
        setGoodAnswer(value)
        break;
      case 'incorrect_answers':
        setBadAnswers(value)
        break;
    }
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div>
          question: <input
            value={question}
            onChange={(event) => onChangeEvent(event.target.value, 'question')}
            required
          />
        </div>
        <div>
          right answer: <input
            value={goodAnswer}
            onChange={(event) => onChangeEvent(event.target.value, 'correct_answer')}
            required
          />
        </div>
        <div>
          wrong answers: <input
            value={badAnswers}
            onChange={(event) => onChangeEvent(event.target.value, 'incorrect_answers')}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default TriviaForm;