import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginFields } from "../constants/formFields";
import Input from "./Input";
import FormExtra from './FormExtra';
import FormAction from './FormAction';

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id]='');

export default function Login(){
    const [loginState, setLoginState] = useState(fieldsState);

    const navigate = useNavigate();

    const handleChange=(e)=>{
        setLoginState({...loginState, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        authenticateUser({id: '', data: loginState});
        setLoginState(fieldsState)
        navigate('/dashboard');
    }

    //Handle Login API Integration here
    const authenticateUser = async (data) =>{
        return await window.electronAPI.rendering('invoke', 'login', data)
    }

    return(
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="-space-y-px">
                {fields.map(field => (
                    <Input
                        key={field.id}
                        handleChange={handleChange}
                        value={loginState[field.id]}
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

            <FormExtra/>
            <FormAction text="Login"/>
        </form>
    )
}

// handleSubmit={handleSubmit}