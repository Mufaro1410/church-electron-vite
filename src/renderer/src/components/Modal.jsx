import { memberFields } from '../constants/formFields'
import { useEffect, useState } from "react";
import Input from "./Input";
import Dropdown from './Dropdown';

const fields = memberFields
const fieldsState = {}
memberFields.forEach(field => fieldsState[field.id] = '')

export default function Modal( { title, btnName, closeBtn, memberDetails, closeModal} ) {
  const [memberState, setMemberState] = useState(!memberDetails ? fieldsState : memberDetails)
  const [maritalStatus, setMaritalStatus] = useState(JSON.parse(localStorage.getItem('maritalStatus')))
  const [membership, setMembership] = useState(JSON.parse(localStorage.getItem('membership')))
  const [society, setSociety] = useState(JSON.parse(localStorage.getItem('society')))
  const [section, setSection] = useState(JSON.parse(localStorage.getItem('section')))
  
  // useEffect(() => console.log(localStorage.getItem('maritalStatus')))

  const options = {maritalStatus: maritalStatus, membership: membership, society: society, section: section}

  const handleChange = (e) => {
    const name = e.target.id
    const value = e.target.value
    setMemberState({...memberState, [name]: value})
    // console.log(memberState);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // const list = ['maritalStatus', 'membership', 'society', 'section']
    // const data = {...memberState}
    // list.forEach(item => {
    //   // console.log(item, data[item], Number(data[item]));
    //   return {...data, [item]: Number(data.item)}
    // })
    // console.log(data);

    let res = await window.electronAPI.createNewMember(memberState)
    alert(`${res} created`)
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
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="-space-y-px">
                  {fields.map(field => (
                      (field.id ===  'gender' | field.id === 'maritalStatus' | field.id === 'membership' | field.id === 'society' | field.id === 'section') ? (
                        <Dropdown
                          key={field.id}
                          value={memberState[field.id]}
                          handleChange={handleChange}
                          id={field.id}
                          options={field.options ? field.options : options[field.id]}
                        />
                      ) : (
                        (field.id === 'dob') ? (
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