import React from 'react';
import { Popup, Tooltip, GeoJSON, Marker } from 'react-leaflet'
import Axios from 'axios'
import L from 'leaflet'



class _PEMELIHARAAN extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PEMELIHARAAN: [],
        }
    }


    componentDidMount() {
        Axios
            .get('http://forclime.agrisoft-cb.com:5002/data/agro_pemeliharan')
            .then(response => {
                this.setState(
                    { PEMELIHARAAN: response.data.features }
                );
                console.log('data product dari axios', response.data.features)
            })
    }


    render() {
        let PEMSobj = this.state.PEMELIHARAAN
      
// let i_persemaian = L.icon({
//     iconUrl: 'http://forclime.agrisoft-cb.com:5002/static/icons/persemaian.svg',
//     iconSize: [25, 25], // size of the icon
// });    
        return (
            <div>
                {PEMSobj.map((datas, index) => {
                    let currName = datas.properties.desa;
                    return (
                        <div key={index}>
                            {/* <Marker> */}
                            <GeoJSON

                                data={datas}
                                // icon= {i_persemaian}
                                // style={PLStyle}
                               
                            >
                                {/* <Marker icon={i_persemaian}>

                                </Marker> */}

                                <div key={datas.properties.desa}>

                                    <Popup >
                                        <table className='table table-hover'> 
                                            <tr> 
                                                <td><b>Tahun</b></td> 
                                                <td> {datas.properties.tahun}  </td > 
                                            </tr><tr> 
                                                <td><b>Fungsi Kawasan</b></td> 
                                                <td>  {datas.properties.fungsi_kawasan} </td > 
                                            </tr><tr> 
                                                <td><b>Desa</b></td> 
                                                <td>{datas.properties.desa} </td > 
                                            </tr><tr> 
                                                <td><b>Dusun</b></td> 
                                                <td>{datas.properties.dusun} </td > 
                                            </tr><tr> 
                                                <td><b>Jenis Tanaman</b></td> 
                                                <td>{datas.properties.jenis_tanaman} </td > 
                                            </tr><tr> 
                                                <td><b>Keterangan</b></td> 
                                                <td>{datas.properties.keterangan} </td > 
                                            </tr><tr> 
                                                <td><b>Land Cover</b></td> 
                                                <td>{datas.properties.landcover} </td > 
                                            </tr><tr> 
                                                <td><b>Penerima Manfaat</b></td> 
                                                <td>{datas.properties.penerima_manfaat} </td > 
                                            </tr><tr> 
                                                <td><b>Luas Lahan</b></td> 
                                                <td>{datas.properties.luas_ha} </td > 
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
{/* </Marker> */}
                            </GeoJSON>
                        </div>
                    )
                })}
            </div>


        )
    }

}




export default _PEMELIHARAAN




