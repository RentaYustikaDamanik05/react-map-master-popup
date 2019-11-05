import React from 'react';
import { Popup, Tooltip, GeoJSON, Marker } from 'react-leaflet'
import Axios from 'axios'
import L from 'leaflet'



class _PERSEMAIAN extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PERSEMAIAN: [],
        }
    }


    componentDidMount() {
        Axios
            .get('http://forclime.agrisoft-cb.com:5002/data/agro_persemaian')
            .then(response => {
                this.setState(
                    { PERSEMAIAN: response.data.features }
                );
                console.log('data product dari axios', response.data.features)
            })
    }


    render() {
        let PERSobj = this.state.PERSEMAIAN
      
let i_persemaian = L.icon({
    iconUrl: 'http://forclime.agrisoft-cb.com:5002/static/icons/persemaian.svg',
    iconSize: [25, 25], // size of the icon
});    
        return (
            <div>
                {PERSobj.map((datas, index) => {
                    let currName = datas.properties.jenis_jumlah_bibit;
                    return (
                        <div key={index}>
                            {/* <Marker> */}
                            <GeoJSON

                                data={datas}
                                icon={i_persemaian}
                                
                                // style={PLStyle}
                               
                            >
                                {/* <Marker icon={i_persemaian}>

                                </Marker> */}

                                <div key={datas.properties.jenis_jumlah_bibit}>

                                    <Popup >
                                        <table className='table table-hover'> 
                                            <tr> 
                                                <td><b>Tahun</b></td> 
                                                <td> {datas.properties.tahun}  </td > 
                                            </tr><tr> 
                                                <td><b>Keterangan</b></td> 
                                                <td>  {datas.properties.keterangan} </td > 
                                            </tr><tr> 
                                                <td><b>Lokasi</b></td> 
                                                <td>{datas.properties.lokasi} </td > 
                                            </tr><tr> 
                                                <td><b>Desa</b></td> 
                                                <td>{datas.properties.desa} </td > 
                                            </tr><tr> 
                                                <td><b>Jenis (Jumlah Bibit)</b></td> 
                                                <td>{datas.properties.jenis_jumlah_bibit} </td > 
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




export default _PERSEMAIAN




