import React from 'react';
import {  Popup, Tooltip, GeoJSON } from 'react-leaflet'
import Axios from 'axios'
import loaderGif from '../../assets/loader/Rolling.gif'

class _TagunEks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Taguneks: [],
            loaderStat: true,
        }
    }
    componentDidMount() {
        Axios
            .get('http://forclime.agrisoft-cb.com:5002/data/plup_tatagunalahan')
            .then(response => {
                this.setState({
                    Taguneks: response.data.features, 
                    // loaderStat: false
                });
                console.log('data product dari axios', response.data.features)
                console.log('loaderStat: ', this.state.loaderStat)
            })
    }

    // sendData = () => {
    //     this.props.parentCallback= this.state.loaderStat
    // }
    
    render() {
        let obTaguneks = this.state.Taguneks
        //  console.log("data", obTaguneks.properties.kode_lc)
        const PLStyle = (obTaguneks) => {
     
         switch (obTaguneks.properties.lu_eks) {
            case 'Bekas Ladang':
                        return { color: "#E81CAB", weight: 1, fillOpacity: 0.6 };
                    case 'Bekas Ladang, Ladang, Kebun Campuran':
                        return { color: "#F6FEA7", weight: 1, fillOpacity: 0.6 };
                    case 'Bekas Pembibitan Sawit':
                        return { color: "#808000", weight: 1, fillOpacity: 0.6 };
                    case 'Danau':
                        return { color: "#D4EDFF", weight: 1, fillOpacity: 0.6 };
                    case 'Gagan':
                        return { color: "#FF9966", weight: 1, fillOpacity: 0.6 };
                    case 'Hutan':
                        return { color: "#BFA699", weight: 1, fillOpacity: 0.6 };
                    case 'Hutan Adat':
                        return { color: "#C589FE", weight: 1, fillOpacity: 0.6 };
                    case 'Hutan Kering Sekunder':
                        return { color: "#72FE00", weight: 1, fillOpacity: 0.6 };
                    case 'Hutan Kering Sekunder, Semak Belukar':
                        return { color: "#808000", weight: 1, fillOpacity: 0.6 };
                    case 'Hutan Menalak':
                        return { color: "#009999", weight: 1, fillOpacity: 0.6 };
                    case 'Hutan Ramu':
                        return { color: "#339933", weight: 1, fillOpacity: 0.6 };
                    case 'Hutan Rawa Sekunder':
                        return { color: "#98E5E5", weight: 1, fillOpacity: 0.6 };
                    case 'Hutan Tekudum':
                        return { color: "#339933", weight: 1, fillOpacity: 0.6 };
                    case 'Jalan':
                        return { color: "#FFB200", weight: 1, fillOpacity: 0.6 };
                    case 'Kebun Sawit':
                        return { color: "#009900", weight: 1, fillOpacity: 0.6 };
                    case 'Ladang':
                        return { color: "#FFFF99", weight: 1, fillOpacity: 0.6 };
                    case 'Ladang Gilir Balik':
                        return { color: "#FFFF99", weight: 1, fillOpacity: 0.6 };
                    case 'Pemakaman':
                        return { color: "#5F5F5F", weight: 1, fillOpacity: 0.6 };
                    case 'Pencadangan Sawah':
                        return { color: "#99336B", weight: 1, fillOpacity: 0.6 };
                    case 'Perkebunan':
                        return { color: "#FFD37F", weight: 1, fillOpacity: 0.6 };
                    case 'Permukiman':
                        return { color: "#FFD37F", weight: 1, fillOpacity: 0.6 };
                    case 'Pertanian dan Perkebunan':
                        return { color: "#33CCCC", weight: 1, fillOpacity: 0.6 };
                    case 'Pulau':
                        return { color: "#A8D6FF", weight: 1, fillOpacity: 0.6 };
                    case 'Sawah':
                        return { color: "#D4EDFF", weight: 1, fillOpacity: 0.6 };
                    case 'Sungai':
                        return { color: "#FF9900", weight: 1, fillOpacity: 0.6 };
                    case 'Tambang Emas Tradisional':
                        return { color: "#FFFF99", weight: 1, fillOpacity: 0.6 };
                    case 'Tembawai':
                        return { color: "#FF0066", weight: 1, fillOpacity: 0.6 };
                }
        }
    const handleMouseEnter = (event, name) => {
        const defaultdesaHoverStyle = { weight: 0.1, color: {PLStyle}, dashArray: '1', fillOpacity: 0.5 };
        event.target.setStyle(this.props.defaultdesaHoverStyle ? this.props.desaHoverStyle : defaultdesaHoverStyle);
        // event.target.bringToFront();
    }
    const handleMouseLeave= (event)=> {
        event.target.setStyle(PLStyle);
        // event.target.bringToFront();
    }
        let data;
        console.log('this.state.loaderStat: ',this.state.loaderStat)
        if(this.state.loaderStat) {
            // data =  <div style={{zIndex:"9999px", justifyContent: 'center', alignItems: 'center'}}>
            //             <img  src={loaderGif} />
            //         </div>
        } else {
            data = <div>
            {obTaguneks.map((datas, index)=> {
                   let dataValues = null;
                   let currName = datas.properties.lu_eks;
                   let show = true;
                   this.props.excludeDesa && this.props.excludeDesa.forEach(datas => { if (currName === datas) show = false });
                   
                   return (
                    <div key={index}>
                        <GeoJSON
                            data={datas}
                            style={PLStyle}
                            onmouseover={event => handleMouseEnter(event)
                            }
                            onmouseout={event => handleMouseLeave(event)}
                             >

                           <div  key={datas.properties.lu_eks}>
                          
                            <Popup  >
                            
                            <table className='table table-hover'> 
                                    <tr> 
                                        <td><b>Lahan Eksiting</b></td> 
                                        <td> {datas.properties.lu_eks}  </td > 
                                    </tr><tr> 
                                        <td><b>Fungsi Kawasan</b></td> 
                                        <td>  {datas.properties.fungsi_kawasan} </td > 
                                    </tr><tr> 
                                        <td><b>Desa</b></td> 
                                        <td>{datas.properties.desa} </td > 
                                    </tr><tr> 
                                        <td><b>Luas</b></td> 
                                        <td> {datas.properties.luas}</td > 
                                    </tr><tr> 
                                        <td><b>Keterangan</b></td> 
                                        <td>{datas.properties.keterangan}</td > 
                                    </tr><tr> 
                                        <td><b>Landcover</b></td> 
                                        <td>{datas.properties.landcover}</td > 
                                    </tr><tr> 
                                        <td><b>Perencanaan Planning</b></td> 
                                        <td>{datas.properties.lu_plan}</td > 
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
        }
        
        return (
            <div>{data}</div>         
        )
    }


}




export default _TagunEks




