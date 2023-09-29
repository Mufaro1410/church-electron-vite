import { useEffect, useState } from 'react';

export default function Members() {
  const [members, setMembers] = useState([]);
  const [foundMembers, setFoundMembers] = useState([]);
  const [memberDetails, setMemberDetails] = useState({});

  const getMembers = async () => {
    const res = await window.electronAPI.getMembers();
    setMembers(...[res]);
    setFoundMembers(...[res]);
  };

  useEffect(() => {
    getMembers();
  }, []);

  const searchMember = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = members.filter((member) => {
        // Use the toLowerCase() method to make it case-insensitive
        return member.lastName.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundMembers(results);
    } else {
      // If the text field is empty, show all members
      setFoundMembers(members);
    }
  };

  const selectMember = async (event) => {
    const id = event.target.value;
    const memberInfo = await members.filter((item) => {
      return item.id === id;
    });
    // console.log(memberInfo[0]);
    setMemberDetails(...[memberInfo[0]]);
  };

  return (
    <div>
      <div>
        <div>
          <input type="search" onChange={searchMember} className="input" placeholder="search..." />
          <button type="button" name="addMember">Add member</button>
        </div>
        <div>
          <ul>
            {foundMembers.length > 0 ? (
              foundMembers.map((item) => (
                <li
                  key={item.id}
                  value={item.id}
                  className="member"
                  onClick={selectMember}
                >
                  <span>{`${item.id} ${item.lastName} ${item.firstName}`}</span>
                </li>
              ))
            ) : (
              <h1>No results found!</h1>
            )}
          </ul>
        </div>
      </div>

      <div>
        {memberDetails.id ? (
          <div>
            <button type="button" name="editMember">
              Edit
            </button>
            <div>
              {/* <h1>ID: {memberDetails.id}</h1> */}
              <h1>Firstname: {memberDetails.firstName}</h1>
              <h1>Surname: {memberDetails.lastName}</h1>
              <h1>Gender: {memberDetails.gender}</h1>
              {/* <h1>DOB: {memberDetails.dob}</h1> */}
              <h1>Address: {memberDetails.address}</h1>
              <h1>Telephone: {memberDetails.telephone}</h1>
              <h1>Email: {memberDetails.email}</h1>
              <h1>
                Marital Status: {memberDetails.maritalStatus.dataValues.title}
              </h1>
              <h1>Membership: {memberDetails.membership.dataValues.title}</h1>
              <h1>Society: {memberDetails.society.dataValues.title}</h1>
              <h1>Section: {memberDetails.section.dataValues.title}</h1>
            </div>
          </div>
        ) : (
          <h1>Display Member Here</h1>
        )}
      </div>
    </div>
  );
}
