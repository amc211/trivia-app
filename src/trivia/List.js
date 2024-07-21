import Item from './Item';

function List({ data, setData }) {

  const handleDeleteByIndex = (target) => {
    let filtered = data.filter((item) => item.id !== target);
    setData(filtered);
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id} style={{ marginTop: '25px'}}>
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
    <hr />
    </div>

  );
}

export default List;
