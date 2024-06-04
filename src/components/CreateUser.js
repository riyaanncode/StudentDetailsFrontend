// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const CreateUser = () => {
//   const [user, setUser] = useState({
//     name: "",
//     className: "",
//     age: "",
//     email: "",
//     address: "",
//     contactNumber: "",
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const existingUsers = await axios.get("http://localhost:8080/api");
//       const emailExists = existingUsers.data.some(
//         (existingUser) => existingUser.email === user.email
//       );

//       if (emailExists) {
//         setError("Please use a different email.");
//         toast.error("Email already exists. Please use a different email.");
//       } else {
//         let apiVariableData = await axios.post(
//           "http://localhost:8080/api/create",
//           user
//         );
//         console.log(apiVariableData);

//         if (apiVariableData.data.status == "error") {
//           toast.success(apiVariableData.data.message);
//           return;
//         }
//         toast.success("Data create successful"); // Show success toast
//         navigate("/");
//       }
//     } catch (error) {
//       console.error("There was an error creating the user!", error);
//       toast.error("Failed to create user. Please try again later."); // Show error toast
//     }
//   };

//   return (
//     <div className="Form">
//       <div className="create-user-container">
//         <div className="degineForm">
//           <h1>Create User</h1>
//           {error && <p className="error-message">{error}</p>}

//           <form onSubmit={handleSubmit} className="user-form">
//             <input
//               type="text"
//               name="name"
//               value={user.name}
//               onChange={handleChange}
//               placeholder="Name"
//               className="input-field"
//             />
//             <input
//               type="text"
//               name="className"
//               value={user.className}
//               onChange={handleChange}
//               placeholder="Class"
//               className="input-field"
//             />
//             <input
//               type="number"
//               name="age"
//               value={user.age}
//               onChange={handleChange}
//               placeholder="Age"
//               className="input-field"
//             />
//             <input
//               type="email"
//               name="email"
//               value={user.email}
//               onChange={handleChange}
//               placeholder="Email"
//               className="input-field"
//             />
//             <input
//               type="text"
//               name="address"
//               value={user.address}
//               onChange={handleChange}
//               placeholder="Address"
//               className="input-field"
//             />
//             <input
//               type="text"
//               name="contactNumber"
//               value={user.contactNumber}
//               onChange={handleChange}
//               placeholder="Contact Number"
//               className="input-field"
//             />
//             <button type="submit" className="submit-button">
//               Create
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateUser;

// ______________________________________________________________________

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateUser = () => {
  const [user, setUser] = useState({
    name: "",
    className: "",
    age: "",
    email: "",
    address: "",
    contactNumber: "",
  });
  const [createdUsers, setCreatedUsers] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let apiVariableData = await axios.post(
        "http://localhost:8080/api/create",
        user
      );
      console.log(apiVariableData);

      if (apiVariableData.data.status === "error") {
        toast.error(apiVariableData.data.message);
        return;
      }
      toast.success("Data create successful"); // Show success toast
      navigate("/");
      // setCreatedUsers([...createdUsers, user]); // Add new user to created users list
      // setUser({
      //   name: "",
      //   className: "",
      //   age: "",
      //   email: "",
      //   address: "",
      //   contactNumber: "",
      // }); // Clear the form
    } catch (error) {
      console.error("There was an error creating the user!", error);
      toast.error("Failed to create user. Please try again later."); // Show error toast
    }
  };

  return (
    <div className="Form">
      <div className="create-user-container">
        <div className="degineForm">
          <h1>Create User</h1>
          {error && <p className="error-message">{error}</p>}

          <form onSubmit={handleSubmit} className="user-form">
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Name"
              className="input-field"
            />
            <input
              type="text"
              name="className"
              value={user.className}
              onChange={handleChange}
              placeholder="Class"
              className="input-field"
            />
            <input
              type="number"
              name="age"
              value={user.age}
              onChange={handleChange}
              placeholder="Age"
              className="input-field"
            />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Email"
              className="input-field"
            />
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleChange}
              placeholder="Address"
              className="input-field"
            />
            <input
              type="text"
              name="contactNumber"
              value={user.contactNumber}
              onChange={handleChange}
              placeholder="Contact Number"
              className="input-field"
            />
            <button type="submit" className="submit-button">
              Create
            </button>
          </form>

          {createdUsers.length > 0 && (
            <div className="user-table">
              <h2>Created Users</h2>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Contact Number</th>
                  </tr>
                </thead>
                <tbody>
                  {createdUsers.map((createdUser, index) => (
                    <tr key={index}>
                      <td>{createdUser.name}</td>
                      <td>{createdUser.className}</td>
                      <td>{createdUser.age}</td>
                      <td>{createdUser.email}</td>
                      <td>{createdUser.address}</td>
                      <td>{createdUser.contactNumber}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateUser;

// ____________________________________________________________________
