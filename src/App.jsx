import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Listusers from './components/Listusers';
import Usersform from './components/Usersform';

function App() {
  const [users, setUsers] = useState([]);
  const [userselected, setUserselected] = useState(null);


  useEffect(()  =>  {
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then((res)  =>  setUsers(res.data)); 

  }, [] )

const  getUsers = () => {
  axios.get('https://users-crud1.herokuapp.com/users/')
  .then((res)  =>  setUsers(res.data)); 
}

const selectUser = (user) => {

setUserselected(user)




}





  return (
    <div className="App">

<Usersform getUsers={getUsers} userselected={userselected} />

  <Listusers users={users} selectUser={selectUser} /> 

    </div>
  )
}

export default App
