import React from 'react';
import { Popup, Tooltip, GeoJSON, Marker } from 'react-leaflet'
import Axios from 'axios'
import L from 'leaflet'



class _PERSEMAIAN extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PENANAMAN: [],
        }
        this.getColor = this.getColor.bind(this);
        this.style = this.style.bind(this);
        
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }
    getColor(value) {
        let color;
        this.props.data && this.props.data.forEach(datas => {
            if (datas.name === value) color = datas.color

        });
        return color ? color : '#2ff357'
    } 

    style(color) {
        const defaultdesaStyle = { weight: 1, opacity: 2, color: '#2ff357', dashArray: '3',fillOpacity: 0.7 };
        let object = this.props.desaStyle ? this.props.desaStyle : defaultdesaStyle;
        object["fillColor"] = this.getColor(color.properties);
        return object;
    }

    handleMouseEnter(event, name) {
        const defaultdesaHoverStyle = { weight: 1, color: '#2b2b2b', dashArray: '1', fillOpacity: 0.7 };
        event.target.setStyle(this.props.defaultdesaHoverStyle ? this.props.desaHoverStyle : defaultdesaHoverStyle);
        // event.target.bringToFront();
    }
    handleMouseLeave(event) {
        event.target.setStyle(this.style);
        // event.target.bringToFront();
    }


    componentDidMount() {
        Axios
            .get('http://forclime.agrisoft-cb.com:5002/data/agro_penanaman')
            .then(response => {
                this.setState(
                    { PENANAMAN: response.data.features }
                );
                console.log('data product dari axios', response.data.features)
            })
    }


    render() {
        let PENSobj = this.state.PENANAMAN
        return (
            <div>
                {PENSobj.map((datas, index) => {
                    let currName = datas.properties.jumlah_tanaman;
                    return (
                        <div key={index}>
                            {/* <Marker> */}
                            <GeoJSON

                                data={datas}
                                style={this.style}
                               
                            >
                         
                                <div key={datas.properties.jumlah_tanaman}>

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
                                                <td><b>Jumlah Tanaman</b></td> 
                                                <td>{datas.properties.jumlah_tanaman} </td > 
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




export default _PERSEMAIAN




