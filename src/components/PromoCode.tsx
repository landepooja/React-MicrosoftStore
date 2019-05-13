import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { mergeStyleSets } from '@uifabric/styling';
import {Collapse, Form, FormGroup, FormControl} from 'react-bootstrap';
import { connect } from 'react-redux';
import {handleChange} from '../actions/promoCodeActions';


export const getStyleSet  = () => {
  return mergeStyleSets ({
    btnRound: {
     backgroundColor:'green',
     borderRadius:'8px',
     margin:'15px',
    }
  });
  };

class PromoCode extends React.Component<any, any> {

    constructor(props:any, context:any) {
        super(props, context);
    
        this.state = {
          open: false
        };
      }

      handleChange = (e: any) => {
          this.props.handleChange(e);
      };

      public OnBotton =() : void => {this.setState({ open: !this.state.open })}

  public render() {
    return (
        
         
      <div>
      {/* <DefaultButton onClick={this.OnBotton}  >
        {this.state.open === false ? `Apply ` : `Hide `}
        promo code {this.state.open === false ? `+` : `-`}
      </DefaultButton> */}
      {/* <Collapse in={this.state.open}> */}
        <div>
                <Form>
                  <FormGroup controlId="formInlineName">
                   <h4>Promo Code</h4>
                    <FormControl
                      type="text"
                      placeholder="Enter promo code"
                      value={this.props.promoCode}
                      onChange={this.handleChange}
                    />
                  </FormGroup>{' '}
                  <DefaultButton
                   className={getStyleSet().btnRound}
                    disabled={this.props.isDisabled}
                    onClick={this.props.giveDiscount}
                  >
                    Apply
                  </DefaultButton>
                </Form>
        </div>
      {/* </Collapse> */}
    </div>
  );
}
}

const mapStateToProps = (state: { promoCode: { value: any; }; }) => ({
promoCode: state.promoCode.value
});
    

export default connect(mapStateToProps,{ handleChange})(PromoCode);