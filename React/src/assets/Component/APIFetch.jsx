// API Fetch and Display
// Problem: Fetch a list of users from https://jsonplaceholder.typicode.com/users and display them.

// Concepts Tested:

// useEffect
// fetch
// Conditional rendering (loading, error)



// 1. Basic Fetch with useEffect (Functional Component)

// import React, { useEffect, useState } from 'react';

// function UserList() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => {
//         if (!res.ok) throw new Error("Network response was not ok");
//         return res.json();
//       })
//       .then((data) => {
//         setUsers(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading users...</p>;
//   if (error) return <p>Error: {error}</p>;
//   return (
//     <div>
//       <h2>User List</h2>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name} ({user.email})</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default UserList;






// 2. Async/Await Inside useEffect

// import React, { useEffect, useState } from 'react';
// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await res.json();
//         setUsers(data);
//       } catch (err) {
//         console.error("Failed to fetch users", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUsers();
//   }, []);
//   return (
//     <div>
//       <h2>Users</h2>
//       {loading ? <p>Loading...</p> : (
//         <ul>
//           {users.map(user => <li key={user.id}>{user.name}</li>)}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default UserList;





// 3. Separate Component for User

function User({ user }) {
  return (
    <li>
      <strong>{user.name}</strong> - {user.email}
    </li>
  );
}

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Users</h2>
      {loading ? <p>Loading...</p> : (
        <ul>
          {users.map(user => <User key={user.id} user={user} />)}
        </ul>
      )}
    </div>
  );
}

