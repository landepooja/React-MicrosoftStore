import * as React from 'react';
export default class ItemDetails extends React.Component<any, any> {

  public render() {
    return (
        
          <div>
               <img
                    width={200}
                    height={200}
                    src="https://cdn.vox-cdn.com/thumbor/MtoMILchLDGo28wcKbegkcm0L9c=/0x0:950x623/1200x800/filters:focal(399x236:551x388)/cdn.vox-cdn.com/uploads/chorus_image/image/60988327/Xbox_One_X_Screenshot_05.0.jpg"
                    alt="thumbnail"
                  />
                  <p>
                   Xbox One X Robot Black 1TB Console- free second Controller
                  </p>
                      <strong>Qty: 1</strong>
          </div>
      
    );
  }
}
















//optional

// constructor(props: any, context: any) {
    //     super(props, context);
    
    //     this.state = {
    //       open: false
    //     };
    //   }
{/* <DefaultButton  onClick={() => this.setState({ open: !this.state.open })} >
          {this.state.open === false ? `See` : `Hide`} item details{' '}
          {this.state.open === false ? `+` : `-`}
        </DefaultButton> */}
        {/* <Collapse in={this.state.open}> */}