import { useState } from "react";


const SignUpForm =  () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [phone, setPhone] = useState('');

    const handleClearClick = () => {
        console.log('Clear');
    };

    const handleSubmitForm = () => {
        console.log('Submit');
    };

    return (
        <form onSubmit={handleSubmitForm}>
            <label>
                Name
                <input value={name} onChange={(e) => {setName(e.target.value)}} />
            </label>
            <br />
            <label>
                Age
                <input value={age} onChange={(e) => {setAge(e.target.value)}} />
            </label>
            <br />
            <label>
                Address
                <input value={address} onChange={(e) => {setAddress(e.target.value)}} />
            </label>
            <br />
            <label>
                ZipCode
                <input value={zipcode} onChange={(e) => {setZipcode(e.target.value)}} />
            </label>
            <br />
            <label>
                Phone
                <input value={phone} onChange={(e) => {setPhone(e.target.value)}} />
            </label>
            <br />
            <div>
                <button type="button" onClick={handleClearClick}>Clear</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default SignUpForm;