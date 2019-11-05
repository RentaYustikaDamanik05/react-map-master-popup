// import React from 'react';
// import { Popup, Tooltip, GeoJSON } from 'react-leaflet'
// import {PL18} from '../../dataCounter/PL2018'

// class _PL2018 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             PL2018: [],
//         }
//     }

  
//     render() {
//         let PL = PL18
//         let PL2018obj = this.state.PL2018
//         const PLStyle = (PL) => {

//             switch (PL.properties.kode_lc) {

//                 case 5001:
//                     return { color: "#EAFCFE", weight: 0.75 };
//                 case 20121:
//                     return { color: "#D60072", weight: 0.75 };
//                 case 2007:
//                     return { color: "#ECC0A7", weight: 0.75 };
//                 case 20071:
//                     return { color: "#B79482", weight: 0.75 };
//                 case 2001:
//                     return { color: "#60E663", weight: 0.75 };
//                 case 2002:
//                     return { color: "#72FD00", weight: 0.75 };
//                 case 2004:
//                     return { color: "#8EA705", weight: 0.75 };
//                 case 20041:
//                     return { color: "#C2A700", weight: 0.75 };
//                 case 2005:
//                     return { color: "#59BA5C", weight: 0.75 };
//                 case 20051:
//                     return { color: "#54B500", weight: 0.75 };
//                 case 2006:
//                     return { color: "#D3E599", weight: 0.75 };
//                 case 2012:
//                     return { color: "#AAAAAA", weight: 0.75 };
//                 case 2010:
//                     return { color: "#E5D298", weight: 0.75 };
//                 case 20141:
//                     return { color: "#A70400", weight: 0.75 };
//                 case 20091:
//                     return { color: "#F6FEA8", weight: 0.75 };
//                 case 20092:
//                     return { color: "#EDF501", weight: 0.75 };
//                 case -1552:
//                     return { color: "#97E5E5", weight: 0.75 };
//                 case 20093:
//                     return { color: "#BDE0FF", weight: 0.75 };
//                 case 20094:
//                     return { color: "#7CF4F3", weight: 0.75 };
//                 case 2014:
//                     return { color: "#D4077E", weight: 0.75 };
//                 case 20122:
//                     return { color: "#728EA6", weight: 0.75 };
//             }
//         }
//         return (
//             <div>
//                 {PL.map((datas, index) => {
//                     let currName = datas.properties.kode_lc;
//                     return (
//                         <div key={index}>
//                             <GeoJSON
//                                 data={datas}
//                                 style={PLStyle}

//                             >

//                                 <div key={datas.properties.kode_lc}>

//                                     <Popup >
//                                         {"Penutup Lahan :" + " " + datas.properties.lc_2018}
//                                         <br />
//                                         {"Luas :" + " " + datas.properties.luas_ha}
//                                         <br />
//                                     </Popup>

//                                 </div>
//                                 <div>
//                                     {
//                                         this.props.tooltip === undefined || this.props.tooltip ?
//                                             <Tooltip key={index} sticky={this.props.tooltipSticky ? this.props.tooltipSticky : true}>
//                                                 <div>
//                                                     <div>{currName}</div>
//                                                 </div>
//                                             </Tooltip>
//                                             :
//                                             null
//                                     }
//                                 </div>

//                             </GeoJSON>
//                         </div>
//                     )
//                 })}
//             </div>


//         )
//     }

// }




// export default _PL2018




