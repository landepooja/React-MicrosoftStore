import * as React from 'react';
import { Link } from 'react-router-dom';
import { mergeStyleSets} from "@uifabric/styling";
import { initializeIcons } from '@uifabric/icons';
initializeIcons();

export const getStyleSet = () => {
    return mergeStyleSets({
    welcome: {
    textAlign: 'center',
    color : 'red',
    marginBottom: '150px',
    marginLeft:'150px',
    fontFamily: 'Cursive',
      //  selectors: {
      //   ':hover': {
      //   background:'#0062b3'
      //   },
     // }
    },
 h2: {
   padding: '10px',
   fontSize:'40px',
   selectors: {
    //******************* /Mobile Screen *******************
    '@media(max-width: 430px)': {
      // background: ' #007ee6',
      fontSize:'25px',
      padding:'10px',
      marginLeft:'20px',
      color : 'blue',
     },
     //******************* Ipad Screen *******************
     '@media(min-width: 765px and max:1000px)': {
      fontSize:'20px',
      color : 'green',
     }
  }
 },
 logo:{
 
  selectors: {
    '@media(min-width:319px and max:426px)': {
      height:'330px',
      width:'330px',
      marginBottom: '50px',
     },
    //Ipad Screen 
    '@media(min-width: 770px)': {
      height:'500px',
      width:'500px',
      marginBottom: '100px',
     }
  }
 }

});
}

export default class Header extends React.Component {
  public render() {
    return (
    <div className ={getStyleSet().welcome}>
       
      <h2  className ={getStyleSet().h2}>Welcome to Microsoft Store</h2>
      <Link to={"/"}>
         <img src="https://3.bp.blogspot.com/-TP1O1tlwQYA/WcTFHdBz63I/AAAAAAAAFUw/3dy3WkXbBtcg6pZ2UonZkhJ4cbXD03nTQCLcBGAs/s1600/1.png" alt="image" className ={getStyleSet().logo} />
     </Link>
  </div>

  
    );
  }
}