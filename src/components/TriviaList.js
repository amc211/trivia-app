import Item from './TriviaItem';

function TriviaList({ data, setData }) {

  const handleDeleteByIndex = (target) => {
    let filtered = data.filter((item) => item.id !== target);
    setData(filtered);
  }

  return (
    <div>
      {data.map((item) => (
        <div className="trivia-item" key={item.id}>
            <Item
              item={item}
              data={data} 
              setData={setData}
            />
            <button
              className="btn btn-primary"
              onClick={() => handleDeleteByIndex(item.id)}
              style={{ marginRight: 10, cursor: 'pointer' }}
            >
              Delete
            </button>
        </div>
      ))}
    </div>
  );
}

export default TriviaList;
