import React, { use, useState } from 'react';

const ControlledField = () => {
    const [name, setName] =useState( ' ')
    const [email , setEmail] = useState( ' ');
    const [password, setPassword] = useState('')

    const [error, setError] = useState( ' ');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('submitted')
    }


    const handlePasswordOnChange = e =>{
        console.log(e.target.value);
        setPassword(e.target.value);

        if (name , email, password.length < 6){
            setError('Password must be 6 characters or longer.')
        }
        else{
            setError( ' ');
        }
    }

    const handlePasswordChange = e =>{
        setEmail(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleEmailChange} defaultValue={name} placeholder='Name '/>
                <br/>
                <input type="email" onChange={handlePasswordChange} defaultValue={email} name="email" placeholder='Email' required />
                <br/>
                <input type="password" name="password"  placeholder='password' onChange={handlePasswordOnChange}
                defaultValue={password} required />
                <br/>
                <input type="submit" value="Submit" />
            </form>
            <p style={{color:'red'}}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledField;