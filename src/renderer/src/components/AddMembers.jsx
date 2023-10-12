// import { readFile } from 'fs';
import { useState } from 'react';
import * as xlsx from 'xlsx';
import dateHandler from '../../assets/js/dateHandler';

function AddMembers() {
  const [fileJSON, setFileJSON] = useState([]);

  const readUploadFile = (e) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = event.target.result;
        const workbook = xlsx.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = xlsx.utils.sheet_to_json(worksheet);
        // jsonData.map(obj => {
        //   let dob = obj['dob']
        //   console.log(dob);
        //   return {...obj, dob: dateHandler(dob)}
        // })
        setFileJSON(jsonData);
        // console.log(jsonData[0]);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  const bulkCreateMembers = async (e) => {
    e.preventDefault();
    const res = await window.electronAPI.createNewMembers(fileJSON);
    alert(`${res.message}`);
  };

  return (
    <div>
      <form onSubmit={bulkCreateMembers}>
        <label htmlFor="upload">
          Upload File
          <input
            type="file"
            name="upload"
            id="upload"
            onChange={readUploadFile}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddMembers;
