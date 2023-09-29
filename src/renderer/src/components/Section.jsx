import { useEffect, useState } from 'react';

function Section() {
  const [sections, setSections] = useState([]);
  const [displayAdd, setDisplayAdd] = useState(false);
  const [title, setTitle] = useState({ title: '' });

  const getSections = async () => {
    const res = await window.electronAPI.getSections();
    setSections(res);
  };

  useEffect(() => {
    getSections();
  }, []);

  const createSection = async () => {
    const res = await window.electronAPI.createNewSection(title);
    alert(`${res.title} created successfully`);
    setTitle({ title: '' });
    setDisplayAdd(false);
  };

  const addSection = () => {
    setDisplayAdd(true);
  };
  const editSection = () => {
    console.log('editing...');
  };

  // const handleChange = (e) => {
  //   setAddTitle(e.target.value);
  // };

  return (
    <div>
      <h1>Section</h1>
      {sections.length > 0 ? (
        <div>
          <ul>
            {sections.map((section) => {
              return <li key={section.id}>{section.title}</li>;
            })}
          </ul>
        </div>
      ) : (
        <div>No section found</div>
      )}
      <hr />
      <div style={{ display: 'flex' }}>
        <button onClick={addSection}>Add section</button>
        <button onClick={editSection}>Edit section</button>
      </div>
      {displayAdd && (
        <div>
          <label htmlFor="add-section">
            addTitle:
            <input
              type="text"
              id="add-section"
              name="add-title"
              value={title.title}
              onChange={(e) => setTitle({ title: e.target.value })}
            />
          </label>
          <button onClick={createSection}>add</button>
        </div>
      )}
    </div>
  );
}

export default Section;
