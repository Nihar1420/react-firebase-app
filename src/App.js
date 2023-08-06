import { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { collection, getDocs, addDoc } from 'firebase/firestore';
function App() {
  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState({
    username: "",
    userage: 0,
  });
  const userCollectionRef = collection(db, 'users');
  const handleChange = (name, value) => {
    setUserDetails({ ...userDetails, [name]: value });
  };
  const getUsers = async () => {
    const data = await getDocs(userCollectionRef);
    setUsers(data.docs.map((doc) => ({
      ...doc.data(), id: doc.id
    })));
  };

  const createUser = async () => {
    const createdUser = await addDoc(userCollectionRef, { name: userDetails.username, age: userDetails.userage });
    console.log(createdUser);
    setTimeout(() => {
      getUsers();
    }, 1000);
  };

  useEffect(() => {
    getUsers();
  }, [users.length]);
  return (
    <div className="App">
      <div>
        <input type="text" placeholder="Enter the user's name" onChange={(e) => handleChange("username", e.target.value)} />
        <input type="number" placeholder="Enter the user's age" onChange={(e) => handleChange("userage", e.target.value)} />
        <button onClick={createUser}>Create User</button>
      </div>
      {
        users.map((user) => {
          return (
            <div key={user.id}>
              <h2>{user.name}</h2>
              <h4>{user.age}</h4>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
