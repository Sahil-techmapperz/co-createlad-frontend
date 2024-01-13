import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import OTPInput from '../../component/OTPInput';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const EventRegistrationForm = () => {
  const [formData, setFormData] = useState({
    "name": '',
    "companyname": '',
    "designation": '',
    "email": '',
    "mobile": '',
    "website": '',
    "linkedin": '',
    "address": '',
    "aboutcompany": '',
    "remarks": ''
  });
  const [showOtpInput, setShowOtpInput] = useState(false); // New state for showing OTP input
  const [loading, setloading] = useState(false);

  const handleChange = (value, name) => {
    // Check if the function is being called with two arguments, indicating it's from PhoneInput
    if (name) {
      setFormData({ ...formData, [name]: value });
    } else {
      // Standard input field
      setFormData({ ...formData, [value.target.name]: value.target.value });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    let apiUrl=import.meta.env.VITE_API_DB_URL;

   

    if (!formData.email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    // if (formData.mobile.length !== 10 || isNaN(formData.mobile)) {
    //     alert('Please enter a valid 10-digit mobile number.');
    //     return;
    // }

    setloading(true);
    


    
    try {
      const response = await axios.post(`${apiUrl}user/generate-otp`, formData);
      console.log('Response:', response.data);
      setShowOtpInput(true);
      // Handle success
    } catch (error) {
      console.error('Error submitting form:', error);
      setloading(false);
      // Handle error
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      {!showOtpInput && (
        <div className="w-full max-w-lg p-4 bg-white shadow-md rounded my-4">
          <h2 className="text-2xl font-bold mb-4 text-center ">Event Registration Form</h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {Object.keys(formData).map((key) => {
                if (key === "aboutcompany" || key === "remarks") {
                  return (
                    <div className="col-span-2" key={key}>
                      <TextAreaField
                        label={key === "aboutcompany" ? "About Company" : (key === "remarks" ? "Remarks" : "")}
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                      />
                    </div>
                  );
                } else if (key === "mobile") {
                  return (
                    <PhoneInput
                      international
                      placeholder="enter you name"
                      defaultCountry="IN"
                      value={formData[key]}
                      onChange={(value) => handleChange(value, 'mobile')}
                      key={key}
                    />
                  );
                } else {
                  return (
                    <InputField
                      key={key}
                      label={key === "companyname" ? "company name" : (key === "linkedin" ? "linkedin id" : key)}
                      name={key}
                      value={formData[key]}
                      onChange={handleChange}
                    />
                  );
                }
              })}
            </div>
            <button
              disabled={loading}
              type="submit"
              className={`${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'} text-white font-bold py-2 px-4 rounded w-full mt-4`}
            >
              Next
            </button>
          </form>
        </div>
      )}

      {showOtpInput && <OTPInput data={formData} />}
    </div>




  );
};

const InputField = ({ label, name, value, onChange }) => (
  <div className="w-full px-3 mb-6 md:mb-0">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={name}>
      {label}
    </label>
    <input
      style={{ "color": "black" }}
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-black"
      id={name}
      type={name === "email" ? "email" : name === "mobile" ? "tel" : "text"}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={`Enter your ${label}`}
    />
  </div>
);


const TextAreaField = ({ label, name, value, onChange }) => (
  <div className="w-full px-3 mb-6 md:mb-0">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={name}>
      {label}
    </label>
    <textarea
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      id={name}
      name={name}
      rows="3"
      value={value}
      onChange={onChange}
      placeholder={`enter you ${name}`}
    ></textarea>
  </div>
);

export default EventRegistrationForm;
