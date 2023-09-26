import { useEffect, useState } from 'react';
// import {
//   membershipData,
//   maritalStatusData,
//   societyData,
//   sectionData,
// } from '../../../assets/data';

function AddMember({ updateMembers }) {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    gender: '',
    dob: '',
    address: '',
    telephone: '',
    email: '',
    maritalStatusId: '',
    membershipId: '',
    societyId: '',
    sectionId: '',
  });
  const [membershipData, setMembershipData] = useState([]);
  const [maritalStatusData, setMaritalStatusData] = useState([]);
  const [societyData, setSocietyData] = useState([]);
  const [sectionData, setSectionData] = useState([]);

  const getMembershipData = async () => {
    const res = await window.electronAPI.getMemberships();
    setMembershipData(res);
  };

  const getMaritalStatusData = async () => {
    const res = await window.electronAPI.getMaritalStatuses();
    setMaritalStatusData(res);
  };

  const getSocietiesData = async () => {
    const res = await window.electronAPI.getSocieties();
    setSocietyData(res);
  };

  const getSectionsData = async () => {
    const res = await window.electronAPI.getSections();
    setSectionData(res);
  };

  useEffect(() => {
    getMembershipData();
    getMaritalStatusData();
    getSocietiesData();
    getSectionsData();
  }, []);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const formSubmit = async (e: any) => {
    e.preventDefault();
    const res = await window.electronAPI.createNewMember(formData);
    alert(`${res.lastName} ${res.firstName} created successfully`);
    setFormData({
      lastName: '',
      firstName: '',
      gender: '',
      dob: '',
      address: '',
      telephone: '',
      email: '',
      maritalStatusId: '',
      membershipId: '',
      societyId: '',
      sectionId: '',
    });
    updateMembers();
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <label htmlFor="lastame">
          surname:{' '}
          <input
            type="text"
            id="lastname"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="fistname">
          firstname:{' '}
          <input
            type="text"
            id="firstname"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="gender">
          gender:
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </label>
        <br />
        <label htmlFor="dob">
          dob:{' '}
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="address">
          address:{' '}
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="telephone">
          telephone:{' '}
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="email">
          email:{' '}
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="maritalStatusID">
          maritalStatusID:
          <select
            id="maritalStatusID"
            name="maritalStatusId"
            value={formData.maritalStatusId}
            onChange={handleChange}
          >
            {maritalStatusData.map((status) => {
              return (
                <option
                  key={status.id}
                  value={status.id}
                  defaultValue="options"
                >
                  {status.title}
                </option>
              );
            })}
          </select>
        </label>
        <br />
        <label htmlFor="membershipID">
          membershipID:
          <select
            id="membershipID"
            name="membershipId"
            value={formData.membershipId}
            onChange={handleChange}
          >
            {membershipData.map((memberShip) => {
              return (
                <option key={memberShip.id} value={memberShip.id}>
                  {memberShip.title}
                </option>
              );
            })}
          </select>
        </label>
        <br />
        <label htmlFor="societyID">
          societyID:
          <select
            id="societyID"
            name="societyId"
            value={formData.societyId}
            onChange={handleChange}
          >
            {societyData.map((societi) => {
              return (
                <option key={societi.id} value={societi.id}>
                  {societi.title}
                </option>
              );
            })}
          </select>
        </label>
        <br />
        <label htmlFor="sectionID">
          sectionID:
          <select
            id="sectionID"
            name="sectionId"
            value={formData.sectionId}
            onChange={handleChange}
          >
            {sectionData.map((sectionn) => {
              return (
                <option key={sectionn.id} value={sectionn.id}>
                  {sectionn.title}
                </option>
              );
            })}
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddMember;
