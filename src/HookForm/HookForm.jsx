import React, { use } from 'react';

const HookForm = () => {

    const [name, nameOnChange] = useInputField( ' ');
    const handleSubmit = e =>{
        e.preventDefault();
        console.log('submit')
    }

    return (
        <div>
           <form onSubmit={handleSubmit}>
            <input de type="text"/>
            </form> 
        </div>
    );
};

export default HookForm;