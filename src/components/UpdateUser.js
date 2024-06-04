// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// const UpdateUser = ({ user, onUpdate }) => {
//   const [updatedUser, setUpdatedUser] = useState({ ...user });
//   const [error, setError] = useState("");
//   const [isEditMode, setIsEditMode] = useState(false);
//  useEffect(() => {
//     setIsEditMode(true); // Set to true when component mounts to disable email input field initially
//   }, []);

//   const handleChange = (e) => {
//     setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const existingUsers = await axios.get("http://localhost:8080/api");
//       const emailExists = existingUsers.data.some(
//         (existingUser) =>
//           existingUser.email === updatedUser.email &&
//           existingUser.email !== user.email
//       );

//       if (emailExists) {
//         setError("Please use a different email.");
//       } else {
//         await axios.post("http://localhost:8080/api/update", {
//           ...updatedUser,
//           id: user.id,
//         });
//         onUpdate(updatedUser);
//         toast.success("Data update successful"); // Show success toast
//       }
//     } catch (error) {
//       console.error("There was an error updating the user!", error);
//       toast.error("An error occurred. Please try again."); // Show error toast
//     }
//   };
//   return (
//     <div className="update-user-container">
//       {/* ToastContainer for displaying toast messages */}
//       <h1>Update User</h1>
//       {error && <p className="error-message">{error}</p>}
//       <form onSubmit={handleSubmit} className="update-user-form">
//         <input
//           type="text"
//           name="name"
//           value={updatedUser.name}
//           onChange={handleChange}
//           placeholder="Name"
//           required
//           className="input-field"
//         />
//         <input
//           type="text"
//           name="className"
//           value={updatedUser.className}
//           onChange={handleChange}
//           placeholder="Class"
//           required
//           className="input-field"
//         />
//         <input
//           type="number"
//           name="age"
//           value={updatedUser.age}
//           onChange={handleChange}
//           placeholder="Age"
//           required
//           className="input-field"
//         />
//         <input
//           type="email"
//           name="email"
//           value={updatedUser.email}
//           onChange={handleChange}
//           placeholder="Email"
//           required
//           disabled={isEditMode} // Conditionally disable email input based on edit mode
//           className="input-field"
//         />
//         <input
//           type="text"
//           name="address"
//           value={updatedUser.address}
//           onChange={handleChange}
//           placeholder="Address"
//           required
//           className="input-field"
//         />
//         <input
//           type="text"
//           name="contactNumber"
//           value={updatedUser.contactNumber}
//           onChange={handleChange}
//           placeholder="Contact Number"
//           required
//           className="input-field"
//         />
//         <button type="submit" className="submit-button">
//           Update
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UpdateUser;

// ____________________________________

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const UpdateUser = ({ user, onUpdate }) => {
//   const [updatedUser, setUpdatedUser] = useState({ ...user });
//   const [error, setError] = useState("");
//   const [isEditMode, setIsEditMode] = useState(false);

//   useEffect(() => {
//     setIsEditMode(true);
//   }, []);

//   const handleChange = (e) => {
//     setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const existingUsers = await axios.get("http://localhost:8080/api");
//       const emailExists = existingUsers.data.some(
//         (existingUser) =>
//           existingUser.email === updatedUser.email &&
//           existingUser.email !== user.email
//       );

//       if (emailExists) {
//         setError("Please use a different email.");
//       } else {
//         await axios.post("http://localhost:8080/api/update", {
//           ...updatedUser,
//           id: user.id,
//         });
//         onUpdate(updatedUser);
//         toast.success("Data update successful");
//       }
//     } catch (error) {
//       console.error("There was an error updating the user!", error);
//       toast.error("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="update-user-container">
//       <h1>Update User</h1>
//       {error && <p className="error-message">{error}</p>}
//       <form onSubmit={handleSubmit} className="update-user-form">
//         <input
//           type="text"
//           name="name"
//           value={updatedUser.name}
//           onChange={handleChange}
//           placeholder="Name"
//           required
//           className="input-field"
//         />
//         <input
//           type="text"
//           name="className"
//           value={updatedUser.className}
//           onChange={handleChange}
//           placeholder="Class"
//           required
//           className="input-field"
//         />
//         <input
//           type="number"
//           name="age"
//           value={updatedUser.age}
//           onChange={handleChange}
//           placeholder="Age"
//           required
//           className="input-field"
//         />
//         <input
//           type="email"
//           name="email"
//           value={updatedUser.email}
//           onChange={handleChange}
//           placeholder="Email"
//           required
//           disabled={isEditMode}
//           className="input-field"
//         />
//         <input
//           type="text"
//           name="address"
//           value={updatedUser.address}
//           onChange={handleChange}
//           placeholder="Address"
//           required
//           className="input-field"
//         />
//         <input
//           type="text"
//           name="contactNumber"
//           value={updatedUser.contactNumber}
//           onChange={handleChange}
//           placeholder="Contact Number"
//           required
//           className="input-field"
//         />
//         <button type="submit" className="submit-button">
//           Update
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UpdateUser;

//_______________________________________

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateUser = ({ user, onUpdate }) => {
  const [updatedUser, setUpdatedUser] = useState({ ...user });
  const [error, setError] = useState("");

  useEffect(() => {
    setUpdatedUser({ ...user });
  }, [user]);

  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/update", {
        ...updatedUser,
        id: user.id,
      });
      onUpdate(updatedUser);
      toast.success("Data update successful");
    } catch (error) {
      console.error("There was an error updating the user!", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="update-user-container">
      <h1>Update User</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="update-user-form">
        <input
          type="text"
          name="name"
          value={updatedUser.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="input-field"
        />
        <input
          type="text"
          name="className"
          value={updatedUser.className}
          onChange={handleChange}
          placeholder="Class"
          required
          className="input-field"
        />
        <input
          type="number"
          name="age"
          value={updatedUser.age}
          onChange={handleChange}
          placeholder="Age"
          required
          className="input-field"
        />
        <input
          type="email"
          name="email"
          value={updatedUser.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="input-field"
        />
        <input
          type="text"
          name="address"
          value={updatedUser.address}
          onChange={handleChange}
          placeholder="Address"
          required
          className="input-field"
        />
        <input
          type="text"
          name="contactNumber"
          value={updatedUser.contactNumber}
          onChange={handleChange}
          placeholder="Contact Number"
          required
          className="input-field"
        />
        <button type="submit" className="submit-button">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
