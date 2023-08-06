import { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
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

  const handleUpdateUser = async (userId, userAge) => {
    const docNew = doc(userCollectionRef, userId);
    await updateDoc(docNew, { age: userAge + 1 });
    setTimeout(() => {
      getUsers();
    }, 500);
  };

  const handleDeleteUser = async (userId) => {
    const docNew = doc(userCollectionRef, userId);
    await deleteDoc(docNew);
    setTimeout(() => {
      getUsers();
    }, 500);
  };

  const createUser = async () => {
    const createdUser = await addDoc(userCollectionRef, { name: userDetails.username, age: Number(userDetails.userage) });
    console.log(createdUser);
    setTimeout(() => {
      getUsers();
    }, 500);
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
              <button onClick={() => handleUpdateUser(user.id, user.age)}>Update user age</button>
              <button onClick={() => handleDeleteUser(user.id)}>Delete user</button>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
