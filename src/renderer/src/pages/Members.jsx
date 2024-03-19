import { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import dateHandler from '../../assets/js/dateHandler';

export default function Members() {
  const [members, setMembers] = useState([]);
  const [foundMembers, setFoundMembers] = useState([]);
  const [memberDetails, setMemberDetails] = useState({});
  const [addMember, setAddMember] = useState(false);
  const [editMember, setEditMember] = useState(false);
  const [dropdownOptions, setDropdownOptions] = useState({})
  
  const getMembers = async () => {
    const res = await window.electronAPI.rendering('invoke', 'getMembers')
    setMembers(...[res]);
    setFoundMembers(...[res]);
  };

  const getTables = async () => {
    const maritalStatus = await window.electronAPI.rendering('invoke', 'getMaritalStatuses')
    const membership = await window.electronAPI.rendering('invoke', 'getMemberships')
    const society = await window.electronAPI.rendering('invoke', 'getSocieties')
    const section = await window.electronAPI.rendering('invoke', 'getSections')
    const options = {maritalStatusId: maritalStatus, membershipId: membership, societyId: society, sectionId: section}
    setDropdownOptions(options)
  }
  
  useEffect(() => {
    getMembers();
    getTables()
  }, []);

  const updateMemberState = (method, memberData) => {
    const id = memberData.id
    if (method === 'add') {
      return setMembers(...[memberData])
    }
    const updatedState = members.map(obj => {
      if (obj.id === id) {
        return {...obj, ...memberData}
      }
      return obj
    })
    setMembers(...[updatedState])
    // console.log(members);
    return
  }

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

  const selectMember = (event) => {
    const id = event.target.value
    const memberInfo = members.filter((member) => {
      return member.id === id;
    });
    // console.log(memberInfo[0]);
    setMemberDetails(...[memberInfo[0]]);
  };

  // function updateMemberList(name, value) {
  //   setMembers({...members, [name]: value})
  // }

  return (
    <div className='grid grid-cols-2'>
      <div className='justify-center m-2 border p-4 rounded'>
        <div className="md:flex mb-4 space-x-6 shadow rounded p-4">
          <input type="search" onChange={searchMember} className="border-2 rounded-lg p-2 md:flex-1 overflow-auto" placeholder="search by surname..." />
          <button type="button" name="addMember" onClick={() => setAddMember(!addMember)} className='bg-sky-500 rounded-lg p-2 md:w-fit transition delay-150 hover:scale-105'>
            Add member
          </button>
        </div>
        {addMember && <Modal title='Add Member' btnName='Add member' 
          updateMemberState={(method, memberData) => updateMemberState(method, memberData)}
          options={dropdownOptions}
          closeBtn='Close' closeModal={() => setAddMember(!addMember)}/>}
        <div className=" shadow rounded p-4">
          <h1 className='font-semibold text-3xl text-primary-600 underline'>Members</h1>
          <div className='overflow-auto'>
            <ul>
              {foundMembers.length > 0 ? (
                foundMembers.map((item) => (
                  <li
                    key={item.id}
                    value={item.id}
                    className="cursor-pointer text-2xl bg-sky-300 my-1 pl-4 rounded-sm"
                    onClick={selectMember}
                  >
                    {`${item.id} ${item.lastName} ${item.firstName}`}
                  </li>
                ))
              ) : (
                <h1>No results found!</h1>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className='m-2 border p-4 rounded'>
        {memberDetails.id ? (
          <div className=''>
            <div>
              <button onClick={() => setEditMember(!editMember)} type="button" name="editMember" className='bg-sky-500 rounded-lg w-52 p-1 mb-4 transition delay-150 hover:scale-105'>
                Edit
              </button>
            </div>
            {editMember && <Modal title='Edit Member' btnName='Submit changes' closeBtn='Close' memberDetails={memberDetails}
              updateSelectedMember={(memberData) => setMemberDetails(memberData)} 
              updateMemberState={(method, memberData) => updateMemberState(method, memberData)}
              options={dropdownOptions}
              closeModal={() => setEditMember(!editMember)}/>
            }
            <div className='shadow p-4 rounded mb-4'>
              <h1 className='font-semibold text-3xl text-primary-600 underline'>Member details</h1>
              {/* <h1>ID: {memberDetails.id}</h1> */}
              <h1>Firstname: {memberDetails.firstName}</h1>
              <h1>Surname: {memberDetails.lastName}</h1>
              <h1>Gender: {memberDetails.gender}</h1>
              <h1>DOB: {dateHandler(memberDetails.dob)}</h1>
              <h1>Address: {memberDetails.address}</h1>
              <h1>Telephone: {memberDetails.telephone}</h1>
              <h1>Email: {memberDetails.email | undefined}</h1>
              <h1>
                Marital Status: {memberDetails.maritalStatus.dataValues.title}
              </h1>
              <h1>Membership: {memberDetails.membership.dataValues.title}</h1>
              <h1>Society: {memberDetails.society.dataValues.title}</h1>
              <h1>Section: {memberDetails.section.dataValues.title}</h1>
            </div>
            <div className='shadow p-4 mb-4 rounded'>
              <h1 className='font-semibold text-3xl text-primary-600 underline'>Member contributions</h1>
            </div>
          </div>
        ) : (
          <h1 className='font-bold text-5xl text-primary-600'>Display Member Here</h1>
        )}
      </div>
    </div>
  );
}

