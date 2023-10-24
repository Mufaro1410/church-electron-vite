import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupFields } from "../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";

const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id] = '');

export default function Signup(){
    const [signupState, setSignupState] = useState(fieldsState);

    const navigate = useNavigate();

    const handleChange = (e) => setSignupState({...signupState, [e.target.id]:e.target.value});

    const handleSubmit = (e)=>{
        e.preventDefault();
        createUser()
        setSignupState(fieldsState)
        navigate('/login')
        
    }

    //handle Signup API Integration here
    const createUser = async () => {
        console.log(signupState);
        // const res = await window.electronAPI.createNewUser(signupState)
        // alert(`${res.username} created`)
    }

    return(
        <form className="mt-8 space-y-6" onSubmit = {handleSubmit}>
            <div className="">
            {
                fields.map(field=>
                    <Input
                        key={field.id}
                        handleChange={handleChange}
                        value={signupState[field.id]}
                        labelText={field.labelText}
                        labelFor={field.labelFor}
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        isRequired={field.isRequired}
                        placeholder={field.placeholder}
                />
            )}
            <FormAction text="Proceed" />
            </div>
        </form>
    )
}