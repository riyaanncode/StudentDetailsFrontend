// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import UpdateUser from "./UpdateUser";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/api");
//       setUsers(response.data);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   const handleEditClick = (user) => {
//     setSelectedUser(user);
//   };

//   const handleUpdate = (updatedUser) => {
//     const updatedUsers = users.map((user) =>
//       user.email === updatedUser.email ? updatedUser : user
//     );
//     setUsers(updatedUsers);
//     setSelectedUser(null);
//   };

//   const deleteUser = async (email) => {
//     try {
//       await axios.post("http://localhost:8080/api/delete", { email: email });
//       fetchUsers();
//       toast.success("Data delete successful"); // Show success toast
//     } catch (error) {
//       console.error("Error deleting user:", error);
//       toast.error("An error occurred. Please try again."); // Show error toast
//     }
//   };

//   return (
//     <div className="user-list-container">
//       <h1>User List</h1>
//       <button onClick={() => navigate("/create")} className="createBtn">
//         Create User
//       </button>
//       {users.length > 0 ? (
//         <>
//           <table className="user-table">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Class</th>
//                 <th>Age</th>
//                 <th>Email</th>
//                 <th>Address</th>
//                 <th>Contact Number</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr key={user.email}>
//                   <td>{user.name}</td>
//                   <td>{user.className}</td>
//                   <td>{user.age}</td>
//                   <td>{user.email}</td>
//                   <td>{user.address}</td>
//                   <td>{user.contactNumber}</td>
//                   <td className="actions-btns">
//                     <button
//                       className="edit-btn"
//                       onClick={() => handleEditClick(user)}
//                     >
//                       Edit
//                     </button>
//                     <button onClick={() => deleteUser(user.email)}>
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </>
//       ) : (
//         <p>No data available</p>
//       )}
//     </div>
//   );
// };

// export default UserList;

// _________________________________________________________________________

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import UpdateUser from "./UpdateUser";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/api");
//       setUsers(response.data);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   const handleEditClick = (user) => {
//     setSelectedUser(user);
//   };

//   const handleUpdate = (updatedUser) => {
//     const updatedUsers = users.map((user) =>
//       user.email === updatedUser.email ? updatedUser : user
//     );
//     setUsers(updatedUsers);
//     setSelectedUser(null);
//   };

//   const deleteUser = async (email) => {
//     try {
//       await axios.post("http://localhost:8080/api/delete", { email });
//       fetchUsers();
//       toast.success("Data delete successful");
//     } catch (error) {
//       console.error("Error deleting user:", error);
//       toast.error("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="user-list-container">
//       <h1>User List</h1>
//       <button onClick={() => navigate("/create")} className="createBtn">
//         Create User
//       </button>
//       {selectedUser ? (
//         <UpdateUser user={selectedUser} onUpdate={handleUpdate} />
//       ) : users.length > 0 ? (
//         <>
//           <table className="user-table">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Class</th>
//                 <th>Age</th>
//                 <th>Email</th>
//                 <th>Address</th>
//                 <th>Contact Number</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr key={user.email}>
//                   <td>{user.name}</td>
//                   <td>{user.className}</td>
//                   <td>{user.age}</td>
//                   <td>{user.email}</td>
//                   <td>{user.address}</td>
//                   <td>{user.contactNumber}</td>
//                   <td className="actions-btns">
//                     <button
//                       className="edit-btn"
//                       onClick={() => handleEditClick(user)}
//                     >
//                       Edit
//                     </button>
//                     <button onClick={() => deleteUser(user.email)}>
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </>
//       ) : (
//         <p>No data available</p>
//       )}
//     </div>
//   );
// };

// export default UserList;

// _____________________________________________
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import UpdateUser from "./UpdateUser";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const itemsPerPage = 4; // Number of items per page
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchUsers(currentPage);
//   }, [currentPage]);

//   const fetchUsers = async (page) => {
//     try {
//       const response = await axios.get(`http://localhost:8080/api?page=${page}&limit=${itemsPerPage}`);
//       setUsers(response.data.data);
//       setTotalPages(response.data.totalPages);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   const handleEditClick = (user) => {
//     setSelectedUser(user);
//   };

//   const handleUpdate = (updatedUser) => {
//     const updatedUsers = users.map((user) =>
//       user.email === updatedUser.email ? updatedUser : user
//     );
//     setUsers(updatedUsers);
//     setSelectedUser(null);
//   };

//   const deleteUser = async (email) => {
//     try {
//       await axios.post("http://localhost:8080/api/delete", { email: email });
//       fetchUsers(currentPage);
//       toast.success("Data delete successful"); // Show success toast
//     } catch (error) {
//       console.error("Error deleting user:", error);
//       toast.error("An error occurred. Please try again."); // Show error toast
//     }
//   };

//   const handlePageChange = (newPage) => {
//     if (newPage >= 1 && newPage <= totalPages) {
//       setCurrentPage(newPage);
//     }
//   };

//   return (
//     <div className="user-list-container">
//       <h1>User List</h1>
//       <button onClick={() => navigate("/create")} className="createBtn">
//         Create User
//       </button>
//       {users.length > 0 ? (
//         <>
//           <table className="user-table">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Class</th>
//                 <th>Age</th>
//                 <th>Email</th>
//                 <th>Address</th>
//                 <th>Contact Number</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr key={user.email}>
//                   <td>{user.name}</td>
//                   <td>{user.className}</td>
//                   <td>{user.age}</td>
//                   <td>{user.email}</td>
//                   <td>{user.address}</td>
//                   <td>{user.contactNumber}</td>
//                   <td className="actions-btns">
//                     <button
//                       className="edit-btn"
//                       onClick={() => handleEditClick(user)}
//                     >
//                       Edit
//                     </button>
//                     <button onClick={() => deleteUser(user.email)}>
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div className="pagination">
//             <button
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//             >
//               Previous
//             </button>
//             <span>
//               Page {currentPage} of {totalPages}
//             </span>
//             <button
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={currentPage === totalPages}
//             >
//               Next
//             </button>
//           </div>
//         </>
//       ) : (
//         <p>No data available</p>
//       )}
//     </div>
//   );
// };

// export default UserList;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import UpdateUser from "./UpdateUser";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const itemsPerPage = 4; // Number of items per page
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchUsers(currentPage);
//   }, [currentPage]);

//   const fetchUsers = async (page) => {
//     try {
//       const response = await axios.get(`http://localhost:8080/api?page=${page}&limit=${itemsPerPage}`);
//       setUsers(response.data.data);
//       setTotalPages(response.data.totalPages);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   const handleEditClick = (user) => {
//     setSelectedUser(user);
//   };

//   const handleUpdate = (updatedUser) => {
//     const updatedUsers = users.map((user) =>
//       user.email === updatedUser.email ? updatedUser : user
//     );
//     setUsers(updatedUsers);
//     setSelectedUser(null);
//   };

//   const deleteUser = async (email) => {
//     try {
//       await axios.post("http://localhost:8080/api/delete", { email: email });
//       fetchUsers(currentPage);
//       toast.success("Data delete successful"); // Show success toast
//     } catch (error) {
//       console.error("Error deleting user:", error);
//       toast.error("An error occurred. Please try again."); // Show error toast
//     }
//   };

//   const handlePageChange = (newPage) => {
//     if (newPage >= 1 && newPage <= totalPages) {
//       setCurrentPage(newPage);
//     }
//   };

//   return (
//     <div className="user-list-container">
//       <h1>User List</h1>
//       <button onClick={() => navigate("/create")} className="createBtn">
//         Create User
//       </button>
//       {selectedUser ? (
//         <UpdateUser user={selectedUser} onUpdate={handleUpdate} />
//       ) : (
//         <>
//           {users.length > 0 ? (
//             <>
//               <table className="user-table">
//                 <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>Class</th>
//                     <th>Age</th>
//                     <th>Email</th>
//                     <th>Address</th>
//                     <th>Contact Number</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {users.map((user) => (
//                     <tr key={user.email}>
//                       <td>{user.name}</td>
//                       <td>{user.className}</td>
//                       <td>{user.age}</td>
//                       <td>{user.email}</td>
//                       <td>{user.address}</td>
//                       <td>{user.contactNumber}</td>
//                       <td className="actions-btns">
//                         <button
//                           className="edit-btn"
//                           onClick={() => handleEditClick(user)}
//                         >
//                           Edit
//                         </button>
//                         <button onClick={() => deleteUser(user.email)}>
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <div className="pagination">
//                 <button
//                   onClick={() => handlePageChange(currentPage - 1)}
//                   disabled={currentPage === 1}
//                 >
//                   Previous
//                 </button>
//                 <span>
//                   Page {currentPage} of {totalPages}
//                 </span>
//                 <button
//                   onClick={() => handlePageChange(currentPage + 1)}
//                   disabled={currentPage === totalPages}
//                 >
//                   Next
//                 </button>
//               </div>
//             </>
//           ) : (
//             <p>No data available</p>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default UserList;


// _____________________________________________________________

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import UpdateUser from "./UpdateUser";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const itemsPerPage = 4; // Number of items per page
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchUsers(currentPage);
//   }, [currentPage]);

//   const fetchUsers = async (page) => {
//     try {
//       const response = await axios.get(
//         `http://localhost:8080/api?page=${page}&limit=${itemsPerPage}`
//       );
//       setUsers(response.data.data);
//       setTotalPages(response.data.totalPages);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   const handleEditClick = (user) => {
//     setSelectedUser(user);
//   };

//   const handleUpdate = (updatedUser) => {
//     const updatedUsers = users.map((user) =>
//       user.email === updatedUser.email ? updatedUser : user
//     );
//     setUsers(updatedUsers);
//     setSelectedUser(null);
//   };

//   const deleteUser = async (email) => {
//     try {
//       await axios.post("http://localhost:8080/api/delete", { email: email });
//       fetchUsers(currentPage);
//       toast.success("Data delete successful"); // Show success toast
//     } catch (error) {
//       console.error("Error deleting user:", error);
//       toast.error("An error occurred. Please try again."); // Show error toast
//     }
//   };

//   const handlePageChange = (newPage) => {
//     if (newPage >= 1 && newPage <= totalPages) {
//       setCurrentPage(newPage);
//     }
//   };

//   return (
//     <div className="user-list-container">
//       <h1>User List</h1>
//       <button onClick={() => navigate("/create")} className="createBtn">
//         Create User
//       </button>
//       {selectedUser ? (
//         <UpdateUser user={selectedUser} onUpdate={handleUpdate} />
//       ) : (
//         <>
//           {users.length > 0 ? (
//             <>
//               <table className="user-table">
//                 <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>Class</th>
//                     <th>Age</th>
//                     <th>Email</th>
//                     <th>Address</th>
//                     <th>Contact Number</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {users.map((user) => (
//                     <tr key={user.email}>
//                       <td>{user.name}</td>
//                       <td>{user.className}</td>
//                       <td>{user.age}</td>
//                       <td>{user.email}</td>
//                       <td>{user.address}</td>
//                       <td>{user.contactNumber}</td>
//                       <td className="actions-btns">
//                         <button
//                           className="edit-btn"
//                           onClick={() => handleEditClick(user)}
//                         >
//                           Edit
//                         </button>
//                         <button onClick={() => deleteUser(user.email)}>
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <div className="pagination">
//                 <button
//                   onClick={() => handlePageChange(currentPage - 1)}
//                   disabled={currentPage === 1}
//                 >
//                   Previous
//                 </button>
//                 <span>
//                   Page {currentPage} of {totalPages}
//                 </span>
//                 <button
//                   onClick={() => handlePageChange(currentPage + 1)}
//                   disabled={currentPage === totalPages}
//                 >
//                   Next
//                 </button>
//               </div>
//             </>
//           ) : (
//             <p>No data available</p>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default UserList;


//_______________________________________________

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import UpdateUser from "./UpdateUser";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [searchQuery, setSearchQuery] = useState(""); // State for search query
//   const itemsPerPage = 4; // Number of items per page
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchUsers(currentPage);
//   }, [currentPage]);

//   const fetchUsers = async (page) => {
//     try {
//       const response = await axios.get(
//         `http://localhost:8080/api?page=${page}&limit=${itemsPerPage}`
//       );
//       setUsers(response.data.data);
//       setTotalPages(response.data.totalPages);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   const handleEditClick = (user) => {
//     setSelectedUser(user);
//   };

//   const handleUpdate = (updatedUser) => {
//     const updatedUsers = users.map((user) =>
//       user.email === updatedUser.email ? updatedUser : user
//     );
//     setUsers(updatedUsers);
//     setSelectedUser(null);
//   };

//   const deleteUser = async (email) => {
//     try {
//       await axios.post("http://localhost:8080/api/delete", { email: email });
//       fetchUsers(currentPage);
//       toast.success("Data delete successful"); // Show success toast
//     } catch (error) {
//       console.error("Error deleting user:", error);
//       toast.error("An error occurred. Please try again."); // Show error toast
//     }
//   };

//   const handlePageChange = (newPage) => {
//     if (newPage >= 1 && newPage <= totalPages) {
//       setCurrentPage(newPage);
//     }
//   };

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const filteredUsers = users.filter((user) =>
//     user.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="user-list-container">
//       <h1>User List</h1>
//       <button onClick={() => navigate("/create")} className="createBtn">
//         Create User
//       </button>
//       <input
//         type="text"
//         placeholder="Search by name"
//         value={searchQuery}
//         onChange={handleSearchChange}
//         className="searchInput"
//       />
//       {selectedUser ? (
//         <UpdateUser user={selectedUser} onUpdate={handleUpdate} />
//       ) : (
//         <>
//           {filteredUsers.length > 0 ? (
//             <>
//               <table className="user-table">
//                 <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>Class</th>
//                     <th>Age</th>
//                     <th>Email</th>
//                     <th>Address</th>
//                     <th>Contact Number</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredUsers.map((user) => (
//                     <tr key={user.email}>
//                       <td>{user.name}</td>
//                       <td>{user.className}</td>
//                       <td>{user.age}</td>
//                       <td>{user.email}</td>
//                       <td>{user.address}</td>
//                       <td>{user.contactNumber}</td>
//                       <td className="actions-btns">
//                         <button
//                           className="edit-btn"
//                           onClick={() => handleEditClick(user)}
//                         >
//                           Edit
//                         </button>
//                         <button onClick={() => deleteUser(user.email)}>
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <div className="pagination">
//                 <button
//                   onClick={() => handlePageChange(currentPage - 1)}
//                   disabled={currentPage === 1}
//                   >
//                   Previous
//                 </button>
//                 <span>
//                   Page {currentPage} of {totalPages}
//                 </span>
//                 <button
//                   onClick={() => handlePageChange(currentPage + 1)}
//                   disabled={currentPage === totalPages}
//                 >
//                   Next
//                 </button>
//               </div>
//             </>
//           ) : (
//             <p>No data available</p>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default UserList;


import React, { useState, useEffect } from "react";
import axios from "axios";
import UpdateUser from "./UpdateUser";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const itemsPerPage = 4; // Number of items per page
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const fetchUsers = async (page) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api?page=${page}&limit=${itemsPerPage}`
      );
      setUsers(response.data.data);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
  };

  const handleUpdate = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.email === updatedUser.email ? updatedUser : user
    );
    setUsers(updatedUsers);
    setSelectedUser(null);
  };

  const deleteUser = async (email) => {
    try {
      await axios.post("http://localhost:8080/api/delete", { email: email });
      fetchUsers(currentPage);
      toast.success("Data delete successful"); // Show success toast
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("An error occurred. Please try again."); // Show error toast
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="user-list-container">
      <h1>User List</h1>
      <button onClick={() => navigate("/create")} className="createBtn">
        Create User
      </button>
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={handleSearchChange}
        className="searchInput"
      />
      {selectedUser ? (
        <UpdateUser user={selectedUser} onUpdate={handleUpdate} />
      ) : (
        <>
          {filteredUsers.length > 0 ? (
            <>
              <table className="user-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Contact Number</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.email}>
                      <td>{user.name}</td>
                      <td>{user.className}</td>
                      <td>{user.age}</td>
                      <td>{user.email}</td>
                      <td>{user.address}</td>
                      <td>{user.contactNumber}</td>
                      <td className="actions-btns">
                        <button
                          className="edit-btn"
                          onClick={() => handleEditClick(user)}
                        >
                          Edit
                        </button>
                        <button onClick={() => deleteUser(user.email)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="pagination">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <span>
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <p>No data available</p>
          )}
        </>
      )}
    </div>
  );
};

export default UserList;


