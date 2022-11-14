import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const Usersform = ({getUsers, userselected}) => {

const {handleSubmit, register, reset} = useForm();

useEffect(() => {
    if(userselected){        
           reset(userselected)
               }
}, [userselected] )

const submit = (data) => {
    console.log(data);
    axios.post('https://users-crud1.herokuapp.com/users/', data)
    .then(() =>  getUsers()) 
}



    return (
        <form  className='myform' onSubmit={handleSubmit(submit)}>
            <div className="input-form">
                <label htmlFor="first_name">Name:</label>
                <input {...register("first_name")} type="text" id='first_name' />
            </div>

            <div className="input-form">
                <label htmlFor="last_name">Last-Name:</label>
                <input {...register("last_name")} type="text" id='last_name' />
            </div>

            <div className="input-form">
                <label htmlFor="email">Email:</label>
                <input {...register("email")} type="text" id='email' />
            </div>

            <div className="input-form">
                <label htmlFor="password">Password:</label>
                <input {...register("password")} type="password" id='password' />
            </div>

            <div className="input-form">
                <label htmlFor="birthday">Birthday:</label>
                <input {...register("birthday")} type="date" id='birthday' />
            </div>

            <button>submit</button>
            
            
            
            
            
        </form>
    );
};

export default Usersform;