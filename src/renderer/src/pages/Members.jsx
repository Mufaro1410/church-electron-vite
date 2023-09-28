import { Box, Grid, ListItem } from "@mui/material";

export default function Members() {
  return (
    <h1>Members Page</h1>
  );
}



// import { useEffect, useState } from 'react';

// import '../../../assets/css/membersModal.css';
// import '../../../assets/css/members.css';
// import AddMember from 'renderer/components/AddMember';
// import EditMember from 'renderer/components/EditMember';
// // import MEMBERS from '../../../assets/members.json';

// function Members() {
//   const [members, setMembers] = useState([]);
//   const [foundMembers, setFoundMembers] = useState([]);
//   const [memberDetails, setMemberDetails] = useState({});
//   const [modal, setModal] = useState(false);

//   const getMembers = async () => {
//     const res = await window.electronAPI.getMembers();
//     setMembers(...[res]);
//     setFoundMembers(...[res]);
//   };

//   useEffect(() => {
//     getMembers();
//   }, []);

//   const searchMember = (e: any) => {
//     const keyword = e.target.value;

//     if (keyword !== '') {
//       const results = members.filter((member) => {
//         // Use the toLowerCase() method to make it case-insensitive
//         return member.lastName.toLowerCase().startsWith(keyword.toLowerCase());
//       });
//       setFoundMembers(results);
//     } else {
//       // If the text field is empty, show all members
//       setFoundMembers(members);
//     }
//   };

//   const toggleAddMemberModal = (e) => {
//     if (e.target.name === 'addMember') {
//       setModal(!modal);
//     } else {
//       setModal(!modal);
//     }
//   };

//   const toggleEditMemberModal = () => {
//     setModal(!modal);
//   };

//   if (modal) {
//     document.body.classList.add('active-modal');
//   } else {
//     document.body.classList.remove('active-modal');
//   }

//   const selectMember = async (event: any) => {
//     const id = event.target.value;
//     const memberInfo = await members.filter((item) => {
//       return item.id === id;
//     });
//     // console.log(memberInfo[0]);
//     setMemberDetails(...[memberInfo[0]]);
//   };

//   return (
//     <div className="container">
//       <div>
//         <div className="search">
//           <input
//             type="search"
//             // value={lastName}
//             onChange={searchMember}
//             className="input"
//             placeholder="search..."
//           />
//           <button type="button" name="addMember" onClick={toggleAddMemberModal}>
//             Add member
//           </button>
//         </div>
//         <div className="member-list">
//           <ul>
//             {foundMembers.length > 0 ? (
//               foundMembers.map((item) => (
//                 <li
//                   key={item.id}
//                   value={item.id}
//                   className="member"
//                   onClick={selectMember}
//                 >
//                   {`${item.id} ${item.lastName} ${item.firstName}`}
//                   {/* <span className="user-id">{member.id}</span>
//                   <span className="member-name">{member.lastName}</span>
//                   <span className="member-name">{member.firstName}</span>
//                   <span className="member-address">{member.telephone}</span>
//                   <span className="member-address">{member.societyId}</span>
//                   <span className="member-address">{member.gender}</span> */}
//                 </li>
//               ))
//             ) : (
//               <h1>No results found!</h1>
//             )}
//           </ul>
//         </div>
//       </div>

//       {modal && (
//         <div className="modal">
//           <div onClick={toggleAddMemberModal} className="overlay" />
//           <div className="modal-content">
//             <button
//               type="button"
//               className="close-modal"
//               onClick={toggleAddMemberModal}
//             >
//               CLOSE
//             </button>
//             <br />
//             <h2>Add Member</h2>
//             <AddMember updateMembers={getMembers} />
//             {/* {if (e.target.name === 'addMember') {
//               return (
//                 <h2>Add Member</h2>
//                 <AddMember />
//               )
//             } else {
//               return(
//                 <h2>Edit Member</h2>
//                 <EditMember data={memberDetails} />
//               )
//             }
//             )} */}
//           </div>
//         </div>
//       )}

//       <div className="member-details">
//         {memberDetails.id ? (
//           <div>
//             <button
//               type="button"
//               name="editMember"
//               onClick={toggleEditMemberModal}
//             >
//               Edit
//             </button>
//             <div>
//               {/* <h1>ID: {memberDetails.id}</h1> */}
//               <h1>Firstname: {memberDetails.firstName}</h1>
//               <h1>Surname: {memberDetails.lastName}</h1>
//               <h1>Gender: {memberDetails.gender}</h1>
//               {/* <h1>DOB: {memberDetails.dob}</h1> */}
//               <h1>Address: {memberDetails.address}</h1>
//               <h1>Telephone: {memberDetails.telephone}</h1>
//               <h1>Email: {memberDetails.email}</h1>
//               <h1>
//                 Marital Status: {memberDetails.maritalStatus.dataValues.title}
//               </h1>
//               <h1>Membership: {memberDetails.membership.dataValues.title}</h1>
//               <h1>Society: {memberDetails.society.dataValues.title}</h1>
//               <h1>Section: {memberDetails.section.dataValues.title}</h1>
//             </div>
//           </div>
//         ) : (
//           <h1>Display Member Here</h1>
//         )}
//       </div>

//       {/* {modal && (
//         <div className="modal">
//           <div onClick={toggleEditMemberModal} className="overlay" />
//           <div className="modal-content">
//             <button
//               type="button"
//               className="close-modal"
//               onClick={toggleEditMemberModal}
//             >
//               CLOSE
//             </button>
//             <br />
//             <h2>Edit Member</h2>
//             <EditMember data={memberDetails} />
//           </div>
//         </div>
//       )} */}
//     </div>
//   );
// }

// export default Members;
