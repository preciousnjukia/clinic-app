import React, { useState } from "react";

function OnlineConsult({ onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        reason: "",
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        try {
            const response = fetch("/src/consultation.json", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData), 
            });
        
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
        
        onClose();
      } catch (error) {
        console.error("Error during form submission:", error);
    }
};

 return (
        <div className="modal">
          <div className="modal-content">
            <h2>Online Consultation</h2>
            <form onSubmit={handleSubmit}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <label>Reason for Consultation:</label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                required
              ></textarea>
              <button type="submit">Submit</button>
            </form>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      );
    }

export default OnlineConsult;