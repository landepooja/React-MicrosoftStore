import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class EstimatedTotal extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
}


  public render() {
    return (
        <Row className="show-grid">
        <Col md={6}>
          <h2>Est. total :   <strong>{`$${this.props.price}`}</strong></h2>
        </Col>
      </Row>
        
    );
  }
}