import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { churchRegistrationFields } from "../constants/formFields";
import Input from "./Input";
// import FormExtra from './FormExtra';
import FormAction from './FormAction';

const fields = churchRegistrationFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id]='');

export default function Registration(){
    const [regState, setRegState] = useState(fieldsState);

    const navigate = useNavigate();

    const handleChange=(e)=>{
        setRegState({...regState, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        registerChurch();
        setRegState(fieldsState)
        navigate('/signup');
    }

    //Handle Login API Integration here
    const registerChurch = () =>{
        console.log(regState);
    }

    return(
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="-space-y-px">
                {fields.map(field => (
                    <Input
                        key={field.id}
                        handleChange={handleChange}
                        value={regState[field.id]}
                        labelText={field.labelText}
                        labelFor={field.labelFor}
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        isRequired={field.isRequired}
                        placeholder={field.placeholder}
                    />)
                )}
            </div>

            {/* <FormExtra/> */}
            <FormAction text="Proceed"/>
        </form>
    )
}

// handleSubmit={handleSubmit}