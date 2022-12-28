import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

function HomePage() {
  const[save,setSave]=useState('');
  const[image,setImage]=useState([]);
  return (
    <div>
      <nav>
      <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Ficons8.com%2Ficons%2Fset%2Fblog&psig=AOvVaw3r2WoxsQV-_HixD_yKBv1a&ust=1672316313782000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMjA5u-lnPwCFQAAAAAdAAAAABAE' alt='Blog Image'/>
        <ul>
            <li>Home</li>
            <li>Create</li>
            <li>Logout</li>
        </ul>
        <div>
      <input type='text' placeholder='enter the title'/>
      <button id='image-btn' onClick={setImage()}>Pick Image</button>
      <div>
      </div>
      <button id='save-btn' onClick={setSave(fetch(localStorage())
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err)))}>Save Post</button>
        </div>
      </nav>
    </div>
  )
}

export default HomePage
