import { useState } from 'react';
import {
  membershipData,
  maritalStatusData,
  societyData,
  sectionData,
} from '../../../assets/data';

function EditMember({ data }) {
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

  // setFormData({
  //   lastName: data.lastName,
  //   firstName: data.firstName,
  //   gender: data.gender,
  //   dob: data.dob,
  //   address: data.address,
  //   telephone: data.telephone,
  //   email: data.email,
  //   maritalStatusId: data.maritalStatusId,
  //   membershipId: data.membershipId,
  //   societyId: data.societyId,
  //   sectionId: data.sectionId,
  // });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const formSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
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
            value={data.lastName}
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
            value={data.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="gender">
          gender:
          <select
            id="gender"
            name="gender"
            value={data.gender}
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
            value={data.dob}
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
            value={data.address}
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
            value={data.telephone}
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
            value={data.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="maritalStatusID">
          maritalStatusID:
          <select
            id="maritalStatusID"
            name="maritalStatusId"
            value={data.maritalStatusId}
            onChange={handleChange}
          >
            {maritalStatusData.map((status) => {
              return (
                <option key={status.id} value={status.id}>
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
            value={data.membershipId}
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
            value={data.societyId}
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
            value={data.sectionId}
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

export default EditMember;
