import React, { useEffect, useState } from 'react';
import './Profile.css';

const Profile = ({ customer }) => {
    const [customerData, setCustomerData] = useState(customer);

    useEffect(() => {
        const customerEmail = sessionStorage.getItem('customerEmail');
        fetch(`http://localhost:5160/api/customer/email/${customerEmail}`) // Update with the correct API URL
          .then((response) => response.json())
          .then((data) => setCustomerData(data))
          .catch((error) => console.error("Error fetching customer:", error));
    }, []);

    return (
        <div className="profile">
            <h2>Customer Profile</h2>
            <div className="profile-details">
                <p><strong>ID:</strong> {customerData.customerId}</p>
                <p><strong>Name:</strong> {customerData.customername}</p>
                <p><strong>Email:</strong> {customerData.customeremail}</p>
                <p><strong>Age:</strong> {customerData.age}</p>
                <p><strong>DOB:</strong> {customerData.dob}</p>
                <p><strong>Phone:</strong> {customerData.phonenumber}</p>
                {/* <p><strong>PAN:</strong> {customerData.pan}</p> */}
            </div>
        </div>
    );
};

export default Profile;