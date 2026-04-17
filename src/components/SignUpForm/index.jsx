import { useState } from "react";


const SignUpForm =  () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <form >
            <label>
                Name
                <Input value={name} onChange={(e) => {setName(e)}} />
            </label>
            <label>
                Age
                <Input value={age} onChange={(e) => {setAge(e)}} />
            </label>
            <label>
                Address
                <Input value={address} onChange={(e) => {setAddress(e)}} />
            </label>
            <label>
                ZipCode
                <Input value={zipcode} onChange={(e) => {setZipcode(e)}} />
            </label>
            <label>
                Phone
                <Input value={phone} onChange={(e) => {setPhone(e)}} />
            </label>
        </form>
    );
};

export default SignUpForm;