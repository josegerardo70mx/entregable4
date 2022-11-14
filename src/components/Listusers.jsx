import React from 'react';

const Listusers = ({users, selectUser}) => {
    return (
        <div>
{
             users.map(user  => (
                <li key={user.id} >
                    <h3>{user.first_name}</h3>
                    <div><p>{user.last_name} </p></div>
                    <div><p>{user.email} </p></div>
                    <div><p>{user.password} </p></div>
                    <div><p>{user.birthday} </p></div>
                    <button onClick={() => selectUser(user)} >select</button>


                </li>

             ))
          }
            
        </div>
    );
};

export default Listusers;