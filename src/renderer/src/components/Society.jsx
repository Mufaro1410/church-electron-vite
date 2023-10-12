import { useEffect, useState } from 'react';

function Society() {
  const [societies, setSocieties] = useState([]);
  const [displayAdd, setDisplayAdd] = useState(false);
  const [title, setTitle] = useState({ title: '' });

  const getSocieties = async () => {
    const res = await window.electronAPI.getSocieties();
    setSocieties(res);
    localStorage.setItem('society', JSON.stringify(res))
  };

  useEffect(() => {
    getSocieties();
  }, []);

  const createSociety = async () => {
    const res = await window.electronAPI.createNewSociety(title);
    alert(`${res.title} created successfully`);
    setTitle({ title: '' });
    setDisplayAdd(false);
  };

  const addSociety = () => {
    setDisplayAdd(true);
  };
  const editSociety = () => {
    console.log('editing...');
  };

  // const handleChange = (e) => {
  //   setAddTitle(e.target.value);
  // };

  return (
    <div>
      <h1>Society</h1>
      {societies.length > 0 ? (
        <div>
          <ul>
            {societies.map((society) => {
              return <li key={society.id}>{society.title}</li>;
            })}
          </ul>
        </div>
      ) : (
        <div>No society found</div>
      )}
      <hr />
      <div style={{ display: 'flex' }}>
        <button onClick={addSociety}>Add society</button>
        <button onClick={editSociety}>Edit society</button>
      </div>
      {displayAdd && (
        <div>
          <label htmlFor="add-society">
            addTitle:
            <input
              type="text"
              id="add-society"
              name="add-title"
              value={title.title}
              onChange={(e) => setTitle({ title: e.target.value })}
            />
          </label>
          <button onClick={createSociety}>add</button>
        </div>
      )}
    </div>
  );
}

export default Society;
