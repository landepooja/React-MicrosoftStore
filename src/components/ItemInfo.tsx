import * as React from 'react';
import { Link } from 'react-router-dom';
import { mergeStyleSets } from '@uifabric/styling';
import SubTotal from './SubTotal';
import Taxes from './Taxes';
import EstimatedTotal from './EstimatedTotal';
import ItemDetails from './ItemDetails';
import PromoCode from './PromoCode';
//Redux Provider
import { connect } from 'react-redux';
import { handleChange } from '../actions/promoCodeActions';

export const getStyleSet = () =>{
  return mergeStyleSets ({
    purchaseCard:{
      width:'390px',
      boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0 ,0,0.19)',
      padding: '1em',
      margin:'40%',
      marginTop:'5%',
      border: '1px solid blue',
      selector:{
        '@media(min-width:319px and max:426px)': {
          margin: '20%',
          display:'center'
         },
        //*****************/ Ipad Screen /*************** */
        '@media(min-width: 770px and max-width: 1400px)': {
          margin:'30%',
          width:'370px',
         }
      }
    },

    itemInfo: {
      textAlign:'center',
      height:'850px',
      // width:'700px',
     
    }
  });
}

export interface temp{
  taxes : any,
  total: number,
  estimatedTotal: number,
  disabledPromoButton: boolean
}

class ItemInfo extends React.Component<any,temp> {

constructor(props:any){
  super(props);
  this.state={
    total:25,
    taxes:0,
    estimatedTotal:0,
    disabledPromoButton: false
  };
}

public taxes = () : void => {
  this.setState({
          estimatedTotal:
               (this.state.total + this.state.taxes)
        });
}

componentDidMount = () => {
    this.setState(
      { taxes: (this.state.total ) * 0.09 }, this.taxes
      
    );
  };

// componentDidMount = () => {
//   this.setState(
//     { taxes: (this.state.total ) * 0.09 });
    
//     this.setState({estimatedTotal:
//       (this.state.total + this.state.taxes)});
// };

public discount = () : void => {
  this.setState({
    disabledPromoButton: true
  });
}

giveDiscountHandler = () => {
  if (this.props.promoCode === 'DISCOUNT') {
    this.setState(
      { estimatedTotal: this.state.estimatedTotal * 0.9 },this.discount
    );
  }
};

  public render() {
    return (
    <div className = {getStyleSet().itemInfo} >
     
      <div className = {getStyleSet().purchaseCard}> 
         <h2>   <Link to={"/"}>
                   <img src="https://3.bp.blogspot.com/-TP1O1tlwQYA/WcTFHdBz63I/AAAAAAAAFUw/3dy3WkXbBtcg6pZ2UonZkhJ4cbXD03nTQCLcBGAs/s1600/1.png" alt="image" height='50px' width='50px'  />
                </Link> 
                Checkout Cart   
                <Link to={"/"}>
                   <img src="https://3.bp.blogspot.com/-TP1O1tlwQYA/WcTFHdBz63I/AAAAAAAAFUw/3dy3WkXbBtcg6pZ2UonZkhJ4cbXD03nTQCLcBGAs/s1600/1.png" alt="image" height='50px' width='50px'  />
                 </Link>
          </h2>
         <hr />
          <SubTotal price={this.state.total.toFixed(2)} />
          <Taxes taxes={this.state.taxes.toFixed(2)} />
           
           <hr />
           <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)}/>
           <hr />
           <ItemDetails price={this.state.estimatedTotal.toFixed(2)}/>
           <hr />
           <PromoCode 
           giveDiscount={() => this.giveDiscountHandler()}
           isDisabled= {this.state.disabledPromoButton}
           />
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state: { promoCode: { value: any; }; }) => ({
  promoCode: state.promoCode.value
});

export default connect(mapStateToProps, {handleChange})(ItemInfo);