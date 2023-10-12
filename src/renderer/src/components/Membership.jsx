import { useEffect, useState } from 'react';

function Membership() {
  const [memberships, setMemberships] = useState([]);
  const [displayAdd, setDisplayAdd] = useState(false);
  const [title, setTitle] = useState({ title: '' });

  const getMemberships = async () => {
    const res = await window.electronAPI.getMemberships();
    setMemberships(res);
    localStorage.setItem('membership', JSON.stringify(res))
  };

  useEffect(() => {
    getMemberships();
  }, []);

  const createMembership = async () => {
    const res = await window.electronAPI.createNewMembership(title);
    alert(`${res.title} membership created successfully`);
    setTitle({ title: '' });
    setDisplayAdd(false)
  };

  const addMembership = () => {
    setDisplayAdd(true);
  };
  const editMembership = () => {
    console.log('editing...');
  };

  // const handleChange = (e) => {
  //   setAddTitle(e.target.value);
  // };

  return (
    <div>
      <h1>Membership</h1>
      {memberships.length > 0 ? (
        <div>
          <ul>
            {memberships.map((membership) => {
              return <li key={membership.id}>{membership.title}</li>;
            })}
          </ul>
        </div>
      ) : (
        <div>No memberships</div>
      )}
      <hr />
      <div style={{ display: 'flex' }}>
        <button onClick={addMembership}>Add membership</button>
        <button onClick={editMembership}>Edit membership</button>
      </div>
      {displayAdd && (
        <div>
          <label htmlFor="add-membership">
            addTitle:
            <input
              type="text"
              id="add-membership"
              name="add-title"
              value={title.title}
              onChange={(e) => setTitle({ title: e.target.value })}
            />
          </label>
          <button onClick={createMembership}>add</button>
        </div>
      )}
    </div>
  );
}

export default Membership;
