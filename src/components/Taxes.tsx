import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
export default class Taxes extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
}


  public render() {
    return (
       
        <Row className="show-grid">
         <hr/>
        <Col md={6}>Est. taxes & fees  :  <strong>{`$${this.props.taxes}`}</strong></Col>
      </Row>
    );
  }
}