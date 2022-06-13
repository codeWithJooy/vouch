import React from 'react'
import {Col,Row} from 'react-bootstrap'
import {header_style,header_p} from './style'
 const Header=()=>{
    
    return(
      <Row className=" d-flex justify-content-left  justify-content-left align-items-center px-2 px-md-4 px-xl-5 "
           style={header_style}>
         {/*Logo Section */}
         <Col md={4} sm={4} 
             className="d-flex align-items-center justify-content-left pt-3">
                <p style={header_p}>ATOOLS</p>    
         </Col>
         
          {/*Button Section */} 
         <Col md={{span:4,offset:4}} className="d-flex justify-content-center align-items-center">
             {/*Start Free Trial Section */} 
            <button className="header_button trial mx-2 py-2">Start Free Trial</button>
             {/*Login Section */}
            <button className="header_button login mx-2 py-2">Login</button>
         </Col>
   </Row>
    )
    
}

export default Header;

