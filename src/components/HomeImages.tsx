import * as React from 'react';
import {  Link } from "react-router-dom";
import { mergeStyleSets } from '@uifabric/styling';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

export const getStyleSet  = () => {
    return mergeStyleSets ({
        homeImages: {
            display : 'inline-block',
            border: '3px solid #0062b3',
            padding: '20px',
            margin: '40px',
            marginLeft:'90px',
            marginRight:'70px',
            marginTop:'60px',
            selectors: {
                '@media(min-width:320px and max:426px)': {
                    height:'280px',
                    width:'280px',
                    margin:'0px',
                    padding:'0px'
                   },

                '@media(min-width: 764px and max-width: 1024px)': {
                    marginLeft: '58px',
                    marginRight: '30px'
                   },
                   '@media(min-width: 1010px and max-width: 1200px)': {
                    marginLeft: '58px',
                    marginRight: '30px'
                   },


                ':hover': {
                    backgroundColor: ' #f2f2f2',
                     zoom: '1.1',
                     transition: 'all 0.10s linear',
                }
              }

        },
        //Images in Home page
        marginAuto: {
            padding: '20px',
            
        }
    });
}


export default class HomeImages extends React.Component<any, any> {
    public items = [{
        desc: "Description",
        id: 1,
        img: "https://cdn.vox-cdn.com/thumbor/MtoMILchLDGo28wcKbegkcm0L9c=/0x0:950x623/1200x800/filters:focal(399x236:551x388)/cdn.vox-cdn.com/uploads/chorus_image/image/60988327/Xbox_One_X_Screenshot_05.0.jpg",
        price: "$25.0",
    },
    {
        desc: "Description",
        id: 2,
        img: "https://cdn.vox-cdn.com/thumbor/MtoMILchLDGo28wcKbegkcm0L9c=/0x0:950x623/1200x800/filters:focal(399x236:551x388)/cdn.vox-cdn.com/uploads/chorus_image/image/60988327/Xbox_One_X_Screenshot_05.0.jpg",
        price: "$25.0",
    },
    {
        desc: "Description",
        id: 3,
        img: "https://cdn.vox-cdn.com/thumbor/MtoMILchLDGo28wcKbegkcm0L9c=/0x0:950x623/1200x800/filters:focal(399x236:551x388)/cdn.vox-cdn.com/uploads/chorus_image/image/60988327/Xbox_One_X_Screenshot_05.0.jpg",
        price: "$25.0",
    },
    {
        desc: "Description",
        id: 4,
        img: "https://cdn.vox-cdn.com/thumbor/MtoMILchLDGo28wcKbegkcm0L9c=/0x0:950x623/1200x800/filters:focal(399x236:551x388)/cdn.vox-cdn.com/uploads/chorus_image/image/60988327/Xbox_One_X_Screenshot_05.0.jpg",
        price: "$25.0",
    },
    {
        desc: "Description",
        id: 5,
        img: "https://cdn.vox-cdn.com/thumbor/MtoMILchLDGo28wcKbegkcm0L9c=/0x0:950x623/1200x800/filters:focal(399x236:551x388)/cdn.vox-cdn.com/uploads/chorus_image/image/60988327/Xbox_One_X_Screenshot_05.0.jpg",
        price: "$25.0",
    },
    {
        desc: "Description",
        id: 6,
        img: "https://cdn.vox-cdn.com/thumbor/MtoMILchLDGo28wcKbegkcm0L9c=/0x0:950x623/1200x800/filters:focal(399x236:551x388)/cdn.vox-cdn.com/uploads/chorus_image/image/60988327/Xbox_One_X_Screenshot_05.0.jpg",
        price: "$25.0",
    }
    ];

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (<>
            {this.renderImg()}
        </>);
    }
    public renderImg = () => {
        const item1 = this.items.map((item, index) => {
            return <div className={getStyleSet().homeImages} key={index} style={{ boxShadow: Depths.depth8 }} >

                <Link to={`/iteminfo/${item.id}`}>
                <img src={item.img} alt="" height="200rem" className={getStyleSet().marginAuto} />
                <p>{item.price}</p> 
                </Link>

            </div>;
        });
        return item1;
    };
}

// const MapStateToProps = (state: any) => {
//     console.log('state:', state);
//     return {
//         items: state.items
//     }
// }
