import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');

    const handleNameOnBlur = event => {
        setName(event.target.value)
    }

    const handlePhoneOnBlur = event => {
        setPhone(event.target.value)
    }

    const handleAddressOnBlur = event => {
        setAddress(event.target.value)
    }

    const handleClickOnAddShipment = event => {
        event.preventDefault();
        const shipping = [name,email,address,phone];
    }


    return (
        <div className='form-container'>
        <div>
            <h2 className='form-title'> Your Shipping Info</h2>
            <form onSubmit={handleClickOnAddShipment} className='form-fields'>
                <div className="input-group">
                    <label htmlFor="name">Your Name</label>
                    <input onBlur={handleNameOnBlur} type="text" name="name" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input value={user?.email} readOnly type="email" name="email" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="phone-number">Phone Number</label>
                    <input onBlur={handlePhoneOnBlur} type="text" name="phone" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="address">Address</label>
                    <input onBlur={handleAddressOnBlur} type="text" name="address" id="" required />
                </div>
                <p style={{ color: 'red' }}>{error}</p>
                <input className='submit-btn' type="submit" value="Add Shipment" />
            </form>
        </div>
    </div>
    );
};

export default Shipment;