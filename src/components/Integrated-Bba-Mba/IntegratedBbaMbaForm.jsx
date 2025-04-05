import React, { useState } from "react";
 
function FormComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "",
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };
 
  return (
    <div className="flex justify-end items-end h-auto bg-transparent px-4 ml-16 w-full md:w-1/2">
      <div className="w-full max-w-sm bg-transparent shadow-md border border-gray-300 overflow-hidden ml-auto">
        <form
          onSubmit={handleSubmit}
          style={{
            background: "rgba(0, 0, 0, 0.5)",
          }}
          className="space-y-4 p-3 md:p-5 shadow-lg rounded-xl"
        >
          {/* Form Fields */}
          {[
            { name: "name", placeholder: "Name" },
            { name: "email", placeholder: "Email" },
            { name: "mobile", placeholder: "Mobile" },
          ].map(({ name, placeholder }, index) => (
            <input
              key={index}
              type="text"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              placeholder={placeholder}
              className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#135783] bg-white"
              required
            />
          ))}
 
          {/* Course Dropdown */}
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#135783] bg-white"
            required
          >
            <option value="">Select Course</option>
            {["Integrated BBA/MBA", "Integrated BCA/MCA"].map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
 
          {/* Submit Button */}
          <div className="flex flex-col space-y-2 mt-2">
            <button
              type="submit"
              className="bg-[#135783] text-white px-4 py-2 rounded-md text-sm md:text-base transition-transform duration-300 hover:scale-102 hover:bg-blue-500 hover:bg-opacity-90"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
 
export default FormComponent;