
import React from 'react';
import { Popup, Tooltip, GeoJSON } from 'react-leaflet'
import Axios from 'axios'




class _PJ extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PJ: [],
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
        return color ? color : '#FF1111'
    } 

    style(color) {
        const defaultdesaStyle = { weight: 1, opacity: 2, color: '#FF1111', dashArray: '3',fillOpacity: 0.7 };
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
            .get('http://forclime.agrisoft-cb.com:5002/data/patrolihutan_jalur_patroli')
            .then(response => {
                this.setState(
                    { PJ: response.data.features }
                );
                console.log('data product dari axios', response.data.features)
            })
    }


    render() {
        let PJobj = this.state.PJ
        return (
            <div>
                {PJobj.map((datas, index) => {
                    let currName = datas.properties.nama_tim;
                    return (
                        <div key={index}>
                            {/* <Marker> */}
                            <GeoJSON

                                data={datas}
                                style={this.style}
                               
                            >
                         
                                <div key={datas.properties.nama_tim}>

                                    <Popup >
                                        <table className='table table-hover'> 
                                            <tr> 
                                                <td><b>Frekuensi</b></td> 
                                                <td> {datas.properties.frekuensi}  </td > 
                                            </tr><tr> 
                                                <td><b>Nama Tim</b></td> 
                                                <td> {datas.properties.nama_tim}  </td > 
                                            </tr><tr> 
                                                <td><b>Desa</b></td> 
                                                <td>  {datas.properties.desa} </td > 
                                            </tr><tr> 
                                                <td><b>Panjang Transek KM</b></td> 
                                                <td>{datas.properties.panjang_transek_km} </td > 
                                            </tr><tr> 
                                                <td><b>Tanggal Pulang</b></td> 
                                                <td>{datas.properties.tanggal_pulang} </td > 
                                            </tr><tr> 
                                                <td><b>Keterangan</b></td> 
                                                <td>{datas.properties.keterangan} </td > 
                                            </tr><tr> 
                                                <td><b>Jumlah Tim</b></td> 
                                                <td>{datas.properties.jumlah_tim} </td > 
                                            </tr><tr> 
                                                <td><b>Luas Area Patroli</b></td> 
                                                <td>{datas.properties.luas_area_patroli} </td > 
                                            </tr><tr> 
                                                <td><b>Jumlah Anggota</b></td> 
                                                <td>{datas.properties.jumlah_anggota} </td > 
                                            </tr><tr> 
                                                <td><b>Realisasi Anggaran</b></td> 
                                                <td>{datas.properties.realisasi_anggaran} </td > 
                                            </tr><tr> 
                                                <td><b>Tanggal Berangkat</b></td> 
                                                <td>{datas.properties.tanggal_berangkat} </td > 
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




export default _PJ




