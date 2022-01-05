import React , {useState , useEffect} from 'react';
import {withRouter , useParams} from "react-router-dom"
import "./HomeDetailsPage.css"
import { BaseUrl } from './http-common';

const Homedetailspage = () => {
    const [shoes , setShoes] = useState([])
    const { id } = useParams();
    const [IsUserLogin , setIsUserLogin] = useState(localStorage.getItem('first_name'))
    const [addtocard , setAddToCard] = useState([])

    
    useEffect(() => {
            fetch(BaseUrl+"/ShoesDetails",{
        method:"POST",
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify({id})
    }).then((result)=>{
        result.json().then((resp)=>{
            setShoes(resp.shoesdetails)
            
        })
    })
    }, []);

    function add_to_card(event){
      event.preventDefault();
      // alert(shoes.id)
      
      

    }
 

    

    


    return (
        <div>
           <main class="container">
 
           <img src={shoes.image} style={{width:"596px",marginLeft:"167px",height:"600px"}} /> 
  
 
 

  <div class="right-column" style={{marginLeft:"124px"}}>

    <div class="product-description">
     
      <h1>{shoes.item_name}</h1>
      <p>{shoes.description}</p>
    </div>
    <div class="product-configuration">
      <div class="cable-config">
        <span>Color</span>
 
        <div class="cable-choose">
          <button>White</button>
          <button>Red</button>
          <button>Black</button>
        </div>

      </div>
    </div>
    <div class="product-price">
      <span> &#8377; {shoes.price}</span>

      {IsUserLogin==null?<span class="cart-btn" onClick={()=>{ alert('login is required'); }} >Add to card</span>:<a href="" onClick={add_to_card} class="cart-btn">Add To Card</a>}

      {/* <a href="" onClick={add_to_card} class="cart-btn">Add to cart</a> */}
    </div>
  </div>
</main>
        </div>
    );
}

export default Homedetailspage;
