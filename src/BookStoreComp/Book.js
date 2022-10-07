import React from 'react'
import Button from 'react-bootstrap/Button';
import "./Book.css"
import { useDispatch } from 'react-redux';
import { addToCart } from './CartSlice';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
export default function Book(props) {
  
  const index=props.index;
  return (
    <div className='book'>
        <img id='image1' src={props.src} alt="Book "  />
        <h6>Title : {props.title}</h6>
        <h6>Price : {props.price}</h6>
        <Link to={`/home/${props.index+1}`}><button className='showDetailsButton'>Details</button></Link>
    </div>
  )
}
