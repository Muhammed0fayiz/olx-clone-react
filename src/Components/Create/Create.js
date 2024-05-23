import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {FirebaseContext,AuthContext} from '../../store/FirebaseContext'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Create = () => {
  const {firebase}=useContext(FirebaseContext)
  const {user}=useContext(AuthContext)
  const history=useHistory()
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const date= new Date().toLocaleDateString('en-US');
 const handleSubmit=()=>{
  firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
    console.log(ref)
    ref.getDownloadURL().then((url)=>{
      firebase.firestore().collection('products').add({
        name,category,price,url,userId:user.uid,createdAt:date.toString()
      })
      history.push('/')
    })
  })

 }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
       
            <label htmlFor="name">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              id="name"
              onChange={(e) => setName(e.target.value)}
              name="name"
            />
            <br />
            <label htmlFor="category">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              name="category"
            />
            <br />
            <label htmlFor="price">Price</label>
            <br />
            <input
              className="input"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              id="price"
              name="price"
            />
            <br />
         
          <br />
          <img
            alt="Posts"
            width="200px"
            height="200px"
            src={image ? URL.createObjectURL(image) : ''}
          />
    
            <br />
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
        
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
