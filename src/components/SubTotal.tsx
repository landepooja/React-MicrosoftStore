import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from "./Header";
import { Row, Col } from 'react-bootstrap';


export default class Subtotal extends React.Component<any, any> {

  
public render() {
    return (
        
         <div className ="purchase-card">
       <Row className="show-grid">
        <Col md={6}>Subtotal :  <strong>{`$${this.props.price}`}</strong></Col>
      </Row>
           </div>
    );
  }
}