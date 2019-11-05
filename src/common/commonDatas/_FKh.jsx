import React from 'react';
import { Popup, Tooltip, GeoJSON } from 'react-leaflet'
import Axios from 'axios'


class _Fkh extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FKH: [],
        }
    }

 
    componentDidMount() {
        Axios
            .get('http://forclime.agrisoft-cb.com:5002/data/fungsi_kawasan_hutan')
            .then(response => {
                this.setState(
                    { FKH: response.data.features }
                );
                console.log('data product dari axios', response.data.features)
            })
    }


    render() {
        let FKHS = this.state.FKH
        const PLStyle = (FKHS) => {
     
            switch (FKHS.properties.fungsi_kws) {
                case 1007:
                        return { fillColor: "#FFFFFF", color: "#000000", weight: 0.75 };
                    case 1001:
                        return { fillColor: "#33AB00", color: "#204815", weight: 0.75 };
                    case 1003:
                        return { fillColor: "#FFFF01", color: "#204815", weight: 0.75 };
                    case 1005:
                        return { fillColor: "#FF72DE", color: "#204815", weight: 0.75 };
                    case 1004:
                        return { fillColor: "#AAFF00", color: "#204815", weight: 0.75 };
                    case 1:
                        return { fillColor: "#CFFEFF", color: "#A6CEE3", weight: 0.75 };
                    case 10024:
                        return { fillColor: "#FFFFFF", color: "#204815", weight: 0.75 };
                    case 5003:
                        return { fillColor: "#CFFEFF", color: "#007F82", weight: 0.75 };
                   }
           }
       const handleMouseEnter = (event, name) => {
           const defaultdesaHoverStyle = { color: {PLStyle} };
           event.target.setStyle(this.props.defaultdesaHoverStyle ? this.props.desaHoverStyle : defaultdesaHoverStyle);
           // event.target.bringToFront();
       }
       const handleMouseLeave= (event)=> {
           event.target.setStyle(PLStyle);
           // event.target.bringToFront();
       }
       
   
           return (
               <div>
                   {FKHS.map((datas, index)=> {
                    
                          let currName = datas.properties.fungsi_kws;
                        
                      
                          
                          return (
                           <div key={index}>
                               <GeoJSON
                                   data={datas}
                                   style={PLStyle}
                                   onmouseover={event => handleMouseEnter(event)
                                   }
                                   onmouseout={event => handleMouseLeave(event)}
                                    >
   
                                  <div  key={datas.properties.fungsi_kws}>
                                 
                                   <Popup  >

                                        <table className='table table-hover'> 
                                            <tr> 
                                                <td><b>Fungsi_kws</b></td> 
                                                <td> {datas.properties.fungsi_kws}  </td > 
                                            </tr><tr> 
                                                <td><b>Fungsi</b></td> 
                                                <td>  {datas.properties.fungsi} </td > 
                                            </tr><tr> 
                                                <td><b>provinsi</b></td> 
                                                <td>{datas.properties.provinsi} </td > 
                                            </tr><tr> 
                                                <td><b>Tanggal</b></td> 
                                                <td> {datas.properties.tgl_kawasa}</td > 
                                            </tr><tr> 
                                                <td><b>SK</b></td> 
                                                <td>{datas.properties.sk_kawasan}</td > 
                                            </tr><tr> 
                                                <td><b>Kabupaten</b></td> 
                                                <td>{datas.properties.kabupaten}</td > 
                                            </tr>
                                        </table>                        
                                       
                                   </Popup>
                                 
                                    </div>
                                   <div> 
                                   {
                                           this.props.tooltip === undefined || this.props.tooltip ?
                                               <Tooltip key={index} sticky={this.props.tooltipSticky ? this.props.tooltipSticky : true}>
                                                   <div>
                                                       <div>{currName}</div>
                                                   </div>
                                               </Tooltip>
                                               :
                                               null
                                       }
                                   </div>
   
                               </GeoJSON>
                           </div>
                       )
                   })}
               </div>
   
               
           )
       }

}




export default _Fkh




