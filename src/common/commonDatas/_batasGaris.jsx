import React from 'react';
import { Popup, Tooltip, GeoJSON } from 'react-leaflet'
import Axios from 'axios'


class _BG extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            BG: [],
        }
    }

 
    componentDidMount() {
        Axios
            .get('http://forclime.agrisoft-cb.com:5002/data/plup_batasdesa')
            .then(response => {
                this.setState(
                    { BG: response.data.features }
                );
                console.log('data product dari axios', response.data.features)
            })
    }


    render() {
        let BGobj = this.state.BG
        const PLStyle = (BGobj) => {
     
            switch (BGobj.properties.keterangan) {
                case 'DEFINITIF':
                    return { color: '#55FF55', weight: 2, opacity: 1, dashArray: '10,10', lineJoin: 'round' };
                case 'Definitif':
                    return { color: '#11FF11', weight: 2, opacity: 1, dashArray: '10,10', lineJoin: 'round' };
                case 'DRAFT':
                    return { color: 'red', weight: 2, opacity: 1, dashArray: '10,10', lineJoin: 'round' };
                case 'Draft':
                    return { color: 'red', weight: 2, opacity: 1, dashArray: '10,10', lineJoin: 'round' };
                case 'INDIKATIF':
                    return { color: 'blue', weight: 2, opacity: 1, dashArray: '10,10', lineJoin: 'round' };
                case 'Indikatif':
                    return { color: 'blue', weight: 2, opacity: 1, dashArray: '10,10', lineJoin: 'round' };
                case 'SEPAKAT':
                    return { color: 'orange', weight: 2, opacity: 1, dashArray: '10,10', lineJoin: 'round' };
                case 'Sepakat':
                    return { color: 'orange', weight: 2, opacity: 1, dashArray: '10,10', lineJoin: 'round' };
                
            }
           }
     
       
       
   
           return (
               <div>
                   {BGobj.map((datas, index)=> {
                    
                          let currName = datas.properties.keterangan;
                        
                      
                          
                          return (
                           <div key={index}>
                               <GeoJSON
                                   data={datas}
                                   style={PLStyle}
                                  
                                    >
   
                                  <div  key={datas.properties.keterangan}>
                                 
                                   <Popup  >
                                        <table className='table table-hover'> 
                                            <tr> 
                                                <td><b>Keterangan</b></td> 
                                                <td> {datas.properties.keterangan}  </td > 
                                            </tr><tr> 
                                                <td><b>Tanggal</b></td> 
                                                <td>  {datas.properties.tanggal} </td > 
                                            </tr><tr> 
                                                <td><b>Desa</b></td> 
                                                <td>{datas.properties.desa} </td > 
                                            </tr><tr> 
                                                <td><b>Panjang Segmen KM</b></td> 
                                                <td> {datas.properties.panjang_segmen_km}</td > 
                                            </tr><tr> 
                                                <td><b>Jenis Batas</b></td> 
                                                <td>{datas.properties.jenis_batas}</td > 
                                            </tr><tr> 
                                                <td><b>Segmen Batas</b></td> 
                                                <td>{datas.properties.segmen_batas}</td > 
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




export default _BG




