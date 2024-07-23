import { useState, useEffect } from 'react';
import useAxiosGet from '../hooks/useAxiosGet';
import Form from './Form';
import List from './List';

function TriviaApp() {
  const [data, setData] = useState([]);
  const [question, setQuestion] = useState('');
  const [goodAnswer, setGoodAnswer] = useState('');
  const [badAnswers, setBadAnswers] = useState('');
  const url = 'https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple';
  const setIsLoadingTrue = true;

  const [rset, setUrl, isLoading, setIsLoading, error] = useAxiosGet();

  useEffect(() => {
    setUrl(url);
    setIsLoading(setIsLoadingTrue);
  }, [url, setIsLoadingTrue])

  useEffect(() => {
    const results = rset && rset.results;
    results && setData(Object.keys(results).map((key, index) => {
      // add a uniq id to each record
      results[key].id = index + 1;
      return results[key]
    }));
  }, [rset, isLoading, error]);

  function handleOnSubmit(event) {
    event.preventDefault();
    // check for all input
    const newItem = { question, correct_answer: goodAnswer };
    // parse input 
    newItem.incorrect_answers = badAnswers.split(',');
    // for a uniq id find the id with 
    // the highest numerical id in list and add 1 
    const uniqId = [...data].sort((a, b) => a.id - b.id).pop().id + 1;
    // save data
    setData([{ ...newItem, id: uniqId }, ...data]);
    // clear form
    setQuestion('')
    setGoodAnswer('')
    setBadAnswers('')
  }

  return (
    <div className="TriviaApp">
      <Form
        question={question}
        setQuestion={setQuestion}
        goodAnswer={goodAnswer}
        setGoodAnswer={setGoodAnswer}
        badAnswers={badAnswers}
        setBadAnswers={setBadAnswers}
        handleOnSubmit={handleOnSubmit}
      />
      <List
        data={data}
        setData={setData}
      />
    </div>
  );
}

export default TriviaApp;
