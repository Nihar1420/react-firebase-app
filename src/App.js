import { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { collection, getDocs } from 'firebase/firestore';
function App() {
  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, 'users');
  const getUsers = async () => {
    const data = await getDocs(userCollectionRef);
    setUsers(data.docs.map((doc) => ({
      ...doc.data(), id: doc.id
    })));
  }
  useEffect(() => {
    getUsers();
  }, [users.length]);
  return (
    <div className="App">
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
