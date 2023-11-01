const loginFields=[
    {
        labelText:"Username",
        labelFor:"username",
        id:"username",
        name:"username",
        type:"text",
        autoComplete:"username",
        isRequired:true,
        placeholder:"Username",  
        autoFocus: true
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    }
]

const signupFields=[
    {
        labelText:"Username",
        labelFor:"username",
        id:"username",
        name:"username",
        type:"text",
        autoComplete:"username",
        isRequired:true,
        placeholder:"Username"   
    },
    {
        labelText:"Email address",
        labelFor:"email",
        id:"email",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    },
    {
        labelText:"Confirm Password",
        labelFor:"confirm-password",
        id:"confirm-password",
        name:"confirm-password",
        type:"password",
        autoComplete:"confirm-password",
        isRequired:true,
        placeholder:"Confirm Password"   
    }
]

const memberFields = [
    {
        labelText:"Firstname",
        labelFor:"firstname",
        id:"firstName",
        name:"firstname",
        type:"text",
        autoComplete:"firstname",
        isRequired:true,
        placeholder:"Firstname",
        autoFocus: true
    },{
        labelText:"Lastname",
        labelFor:"lastname",
        id:"lastName",
        name:"lastname",
        type:"text",
        autoComplete:"lastname",
        isRequired:true,
        placeholder:"Lastname",
        autoFocus: true
    },{
        labelText:"Gender",
        labelFor:"gender",
        id:"gender",
        name:"gender",
        type:"text",
        autoComplete:"gender",
        isRequired:true,
        placeholder:"Gender",
        autoFocus: true,
        options: [{id: 1, title: 'male'}, {id: 2, title: 'female'}]
    },{
        labelText:"DOB",
        labelFor:"dob",
        id:"dob",
        name:"dob",
        type:"date",
        autoComplete:"dob",
        isRequired:true,
        placeholder:"Date of Birth",
        autoFocus: true
    },{
        labelText:"Address",
        labelFor:"address",
        id:"address",
        name:"address",
        type:"text",
        autoComplete:"address",
        isRequired:true,
        placeholder:"Address",
        autoFocus: true
    },{
        labelText:"Telephone",
        labelFor:"telephone",
        id:"telephone",
        name:"telephone",
        type:"text",
        autoComplete:"telephone",
        isRequired:false,
        placeholder:"Telephone",
        autoFocus: true
    },{
        labelText:"Email",
        labelFor:"email",
        id:"email",
        name:"email",
        type:"text",
        autoComplete:"email",
        isRequired:false,
        placeholder:"Email",
        autoFocus: true
    },{
        labelText:"Marital Status",
        labelFor:"marital status",
        id:"maritalStatusId",
        name:"marital status",
        type:"text",
        autoComplete:"marital status",
        isRequired:true,
        placeholder:"Marital Status",
        autoFocus: true,
    },{
        labelText:"Membership",
        labelFor:"membership",
        id:"membershipId",
        name:"membership",
        type:"text",
        autoComplete:"membership",
        isRequired:true,
        placeholder:"Membership",
        autoFocus: true
    },{
        labelText:"Society",
        labelFor:"society",
        id:"societyId",
        name:"society",
        type:"text",
        autoComplete:"society",
        isRequired:true,
        placeholder:"Society",
        autoFocus: true
    },{
        labelText:"Section",
        labelFor:"section",
        id:"sectionId",
        name:"section",
        type:"text",
        autoComplete:"section",
        isRequired:true,
        placeholder:"Section",
        autoFocus: true
    },
]

const churchRegistrationFields = [
    {
        labelText:"ChurchName",
        labelFor:"churchname",
        id:"churchName",
        name:"churchname",
        type:"text",
        autoComplete:"churchname",
        isRequired:true,
        placeholder:"ChurchName",
        autoFocus: true
    },{
        labelText:"Address",
        labelFor:"address",
        id:"address",
        name:"address",
        type:"text",
        autoComplete:"address",
        isRequired:true,
        placeholder:"Address",
        autoFocus: true
    },{
        labelText:"Telephone",
        labelFor:"telephone",
        id:"telephone",
        name:"telephone",
        type:"text",
        autoComplete:"telephone",
        isRequired:true,
        placeholder:"Telephone",
        autoFocus: true,
    },{
        labelText:"Email",
        labelFor:"email",
        id:"email",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:false,
        placeholder:"Email",
        autoFocus: true
    }
]

export {loginFields,signupFields, memberFields, churchRegistrationFields}