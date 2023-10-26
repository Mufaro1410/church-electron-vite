import { useEffect, useState } from 'react';

function MaritalStatus() {
  const [maritalStatuses, setMaritalStatuses] = useState([]);
  const [displayAdd, setDisplayAdd] = useState(false);
  const [title, setTitle] = useState({ title: '' });

  const getMaritalStatuses = async () => {
    const res = await window.electronAPI.rendering('invoke', 'getMaritalStatuses')
    setMaritalStatuses(res);
    localStorage.setItem('maritalStatus', JSON.stringify(res))
  };

  useEffect(() => {
    getMaritalStatuses();
  }, []);

  const createMaritalStatus = async () => {
    const res = await window.electronAPI.rendering('invoke', 'addMaritalStatus', {data: title})
    alert(`${res.title} marital status created successfully`);
    setTitle({ title: '' });
    setDisplayAdd(false);
  };

  const addMaritalStatus = () => {
    setDisplayAdd(true);
  };
  const editMaritalStatus = () => {
    console.log('editing...');
  };

  // const handleChange = (e) => {
  //   setAddTitle(e.target.value);
  // };

  return (
    <div>
      <h1>Marital Status</h1>
      {maritalStatuses.length > 0 ? (
        <div>
          <ul>
            {maritalStatuses.map((status) => {
              return <li key={status.id}>{status.title}</li>;
            })}
          </ul>
        </div>
      ) : (
        <div>No marital statuses</div>
      )}
      <hr />
      <div style={{ display: 'flex' }}>
        <button onClick={addMaritalStatus}>Add maritalstatus</button>
        <button onClick={editMaritalStatus}>Edit maritalstatus</button>
      </div>
      {displayAdd && (
        <div>
          <label htmlFor="add-maritalstatus">
            addTitle:
            <input
              type="text"
              id="add-maritalstatus"
              name="add-title"
              value={title.title}
              onChange={(e) => setTitle({ title: e.target.value })}
            />
          </label>
          <button onClick={createMaritalStatus}>add</button>
        </div>
      )}
    </div>
  );
}

export default MaritalStatus;
