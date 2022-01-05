import React, {useState} from 'react';
import './Header.css';
import { Link } from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap';
import { BaseUrl } from './http-common';


const Header = () => {
	const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [username , setUsername] = useState("")
	const [password , setPassword] = useState("")
	const [login_name , setlogin_name] = useState(localStorage.getItem('first_name'))
	
	function loginFun(){
		console.warn(username , password)
        fetch( BaseUrl+ "/UserLogin",{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify({username , password})
        }).then((result)=>{
            result.json().then((resp)=>{
				console.log(resp.user_data)
				localStorage.setItem('user_id', resp.user_data.id);
				localStorage.setItem('first_name', resp.username);
				window.location.reload();
            })
        })
        setUsername("")
        setPassword("")
	}

	function logout(){
		if (window.confirm("Are you sure you want to logout ?")) {
			localStorage.clear();
			window.location.reload();
		}
	}
	
    return (
        <div>
			
	  <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{marginLeft:"331px"}}>LOGIN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
			<span style={{marginLeft:"235px"}}>
			<label> Username
          <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="form-control" />
		  </label>
		  </span>
		  <br/>	
		  <br/>	
		  <span style={{marginLeft:"235px"}}>
		  <label> Username
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" />
		  </label>
		  </span>
		  <br/>
		  <br/>

		<div style ={{marginLeft:"292px"}}>
		  <Button  variant="secondary" onClick={handleClose}>
            Close
          </Button>&nbsp;
		  <Button onClick={loginFun} variant="primary" >
            Login
          </Button>
		  </div>

        </Modal.Body>
      </Modal>


            <section class="banner">
			<header class="header">
				<nav class="nav-head text-center">
					<h1 class="h1-logo">
						<a href="index.html"><i class="fas fa-bold">ootie</i></a>
					</h1>
					<input id="toggle" type="checkbox"/>
        	<label class="label" for="toggle"><i class="fas fa-bars"></i></label>
					<ul class="nav__menu uppercase">
						<li><Link to="/" class="active nav__link" >home</Link></li>
						<li><Link to="/shoes" class="nav__link" >Shoes</Link></li>
						<li><Link to="/shop" class="nav__link" >Shop</Link></li>
						<li><Link class="nav__link" to="contact">contact</Link></li>

					
					<li>
					{login_name==null?<span class="nav__link" onClick={handleShow} to="login">Login</span>:<span onClick={logout} class="nav__link" to="login">{login_name}</span>}
					</li>
					<li>
					<i class="fa fa-shopping-cart" aria-hidden="true"></i>
					</li>
						
					
					</ul>
				</nav>
			</header>
			<div class="banner-info uppercase">
				<p>Trending of the week</p>
				<h3>Casual Shoes for Men</h3>
				<div class="banner-buttons">
					<a href="shop-single.html" class="btn">Shop Now</a>
					<a href="single.html" class="btn read-btn">Read More</a>
				</div>
			</div>
		</section>
        </div>
    );
}

export default Header;
