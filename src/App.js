
import React,{useState} from 'react';
import {Button, Container,Row,Col,Card,Form,Toast,ToastContainer} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header'
import axios from 'axios'

const App = () => {
  const url="https://reqres.in/api/login"
  const [showTrue,setShowTrue]=useState(false)
  const [showFalse,setShowFalse]=useState(false) 
  const [successValue,setSuccessValue]=useState("")
  const [errorValue,setErrorValue]=useState("Missing Email")
  const [user,setUser]=useState({
    email:"",
    password:""
  })

  const toggleTrue=()=>setShowTrue(!showTrue)
  const toggleFlase=()=>setShowFalse(!showFalse)
  
  const handleChange=(e)=>{
  const {name,value}=e.target
     setUser({
       ...user,
      [name]:value
     })
  }
  
  const handleLogin=()=>{
     const {email,password}=user
     axios({
            method: 'post',
            url: url,
            data: {
            email, 
            password
                   }
          }).then((response)=>{
                setSuccessValue(response.data.token)
                setShowTrue(true)
            })
            .catch((error)=>{
              if(error.response.data.error){
               
                setErrorValue(error.response.data.error)
                setShowFalse(true)
              }
              else{
                setErrorValue("Something Happened!! Try Again Please")
              }
            })
  }
  
  return(
  
     <Container fluid className="position-relative">
       <Header />
       <Row className="d-flex justify-content-left">
           <Col md={6} lg={5} className="d-flex justify-content-center align-items-center" 
                       style={{minHeight:"calc(100vh - 60px)"}}>
             <Card style={{width:"60%",minHeight:"60px",border:"none"}} 
                   className="login_card">
               <Card.Title className="mb-1" 
                           style={{textAlign:"center",fontWeight:"bold",color:"#043344",fontSize:"24px",fontFamily:"inter_bold"}}>
                    Welcome Back
               </Card.Title>
               <Card.Subtitle className="mb-4" 
                              style={{textAlign:"center",fontSize:"13px"}}>
                      Please Login
               </Card.Subtitle>
               <Form>
                 <Form.Group className="mb-3">
                    <Form.Control type="text" 
                                 placeholder="Email Address *" 
                                 name="email" 
                                 value={user.email} 
                                 onChange={handleChange} />
                 </Form.Group>
                 <Form.Group className="mb-3">
                   <Form.Control type="text" 
                                 placeholder="Password *" 
                                 name="password" 
                                 value={user.password} 
                                 onChange={handleChange}
                                 style={{outlineColor:"red!important"}}/>
                 </Form.Group>

                 <Row>
                   <Col xs={7}>
                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Password" style={{fontSize:"12px",fontWeight:"bold",color:"#023047",fontFamily:"inter-bold"}}/>
                      </Form.Group>
                   </Col>
                   <Col xs={{span:5}} className="d-flex justify-content-end">
                     <p style={{fontSize:"12px",fontWeight:"bold",color:"#023047",fontFamily:"inter-bold"}}>Forgot Password ?</p>
                   </Col>  
                 </Row>
                 
                 <Button variant="primary" className="w-100" onClick={handleLogin} style={{backgroundColor:"#023047",border:"1px solid #023047"}}>
                   Login
                 </Button>

               </Form>

             </Card>

           </Col>

          <Col xs={7} md={6} lg={7} className="login_image" >
            <img src="docs/img/image.png" style={{width:"100%",height:"100%"}}/>
          </Col>
       </Row>
       
       {/* Toast Section Starts Here */}
       <ToastContainer className="p-3 position-fixed top-0 left-0" >
            {/* Succes Toast*/}
            <Toast show={showTrue} 
                   onClose={toggleTrue} 
                   delay={3000} autohide>
              <Toast.Header>
                <strong className="me-auto">Login Attempt</strong>
                <small>Now</small>
              </Toast.Header>
              <Toast.Body>{successValue}</Toast.Body>
            </Toast>
            
            {/* Error Toast*/}
            <Toast show={showFalse} 
                   onClose={toggleFlase} 
                   delay={3000} autohide>
              <Toast.Header>
                
                <strong className="me-auto">Login Attempt</strong>
                <small>Now</small>
              </Toast.Header>
             <Toast.Body>{errorValue}</Toast.Body>
            </Toast>

          </ToastContainer>
          {/* Toast Section Ends Here */}

     </Container>
            
          
   )
   };

export default App;