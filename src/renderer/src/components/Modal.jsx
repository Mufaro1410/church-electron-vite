import { memberFields } from '../constants/formFields'
import { useEffect, useState } from "react";
import Input from "./Input";
import Dropdown from './Dropdown';
import dateHandler from '../../assets/js/dateHandler';


export default function Modal( { title, btnName, closeBtn, options, memberDetails, updateMemberState, updateSelectedMember, closeModal} ) {
  const fields = memberFields
  const fieldsState = {}
  memberFields.forEach(field => {
    if (field.id === 'gender' | field.id === 'maritalStatusId' | field.id === 'membershipId' | field.id === 'societyId' | field.id === 'sectionId') {
      if (field.id === 'gender') {
        fieldsState[field.id] = 'male'
        return
      }
      const value = options[field.id][0].id
      fieldsState[field.id] = value
      return
    }
    fieldsState[field.id] = ''
  })

  const [memberState, setMemberState] = useState(!memberDetails ? fieldsState : memberDetails)
  // const [maritalStatus, setMaritalStatus] = useState(JSON.parse(localStorage.getItem('maritalStatus')))
  // const [membership, setMembership] = useState(JSON.parse(localStorage.getItem('membership')))
  // const [society, setSociety] = useState(JSON.parse(localStorage.getItem('society')))
  // const [section, setSection] = useState(JSON.parse(localStorage.getItem('section')))
  
  // useEffect(() => console.log(localStorage.getItem('maritalStatus')))
  
  // const options = {maritalStatusId: maritalStatus, membershipId: membership, societyId: society, sectionId: section}
  // console.log(options);

  const handleChange = (e) => {
    const name = e.target.id
    const value = e.target.value
    setMemberState({...memberState, [name]: value})
    // console.log(memberState);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!memberState.id) {
      const res = await window.electronAPI.rendering('invoke', 'addMember',  {id: memberState.id, data: memberState})
      alert(`${res[0].lastName} ${res[0].firstName} created`)
      updateMemberState('add', res[1])
    } else {
      const res = await window.electronAPI.rendering('invoke', 'updateMember', {id: memberState.id, data: memberState})
      alert(`${res.lastName} ${res.firstName} updated successfully`)
      updateMemberState('update', memberState)
      updateSelectedMember(memberState)
    }
    closeModal()
  }


  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-3/5 my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                {title}
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={closeModal}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="-space-y-px">
                  {fields.map(field => (
                      (field.id ===  'gender' | field.id === 'maritalStatusId' | field.id === 'membershipId' | field.id === 'societyId' | field.id === 'sectionId') ? (
                        <Dropdown
                          key={field.id}
                          value={memberState[field.id]}
                          labelFor={field.labelFor}
                          labelText={field.labelText}
                          handleChange={handleChange}
                          id={field.id}
                          options={field.options ? field.options : options[field.id]}
                        />
                      ) : (
                        (field.id === 'dob') ? (
                          <Input
                              key={field.id}
                              handleChange={handleChange}
                              value={(memberState[field.id])  ? dateHandler(memberState[field.id]) : undefined}
                              labelText={field.labelText}
                              labelFor={field.labelFor}
                              id={field.id}
                              name={field.name}
                              type={field.type}
                              isRequired={field.isRequired}
                              placeholder={field.placeholder}
                          />
                        ) : (
                          <Input
                              key={field.id}
                              handleChange={handleChange}
                              value={memberState[field.id]}
                              labelText={field.labelText}
                              labelFor={field.labelFor}
                              id={field.id}
                              name={field.name}
                              type={field.type}
                              isRequired={field.isRequired}
                              placeholder={field.placeholder}
                          />
                        )
                      )
                    )
                  )}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={closeModal}
                  >
                    {closeBtn}
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    // onClick={handleSubmit}
                  >
                    {btnName}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}