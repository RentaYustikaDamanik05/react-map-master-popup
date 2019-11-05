import React from 'react';
import {  Popup, Tooltip, GeoJSON } from 'react-leaflet'
import Axios from 'axios'
class _TagunRen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            TagunRen: [],
        }
     
    }
    componentDidMount() {
        Axios
            .get('http://forclime.agrisoft-cb.com:5002/data/plup_tatagunalahan')
            .then(response => {
                this.setState(
                    { TagunRen: response.data.features }
                );
                console.log('data product dari axios', response.data.features)
            })
    }


    render() {
        let obTagunRen = this.state.TagunRen
        //  console.log("data", obTaguneks.properties.kode_lc)
        const PLStyle = (obTagunRen) => {
     
         switch (obTagunRen.properties.lu_plan) {
            case 'Bekas Pembibitan Sawit':
                return { color: "#808000", weight: 1, fillOpacity: 0.6 };
            case 'Danau':
                return { color: "#D4EDFF", weight: 1, fillOpacity: 0.6 };
            case 'Hutan Adat':
                return { color: "#C589FF", weight: 1, fillOpacity: 0.6 };
            case 'Hutan Kelola Adat':
                return { color: "#C589FE", weight: 1, fillOpacity: 0.6 };
            case 'Hutan Menalak':
                return { color: "#009999", weight: 1, fillOpacity: 0.6 };
            case 'Hutan Pemanfaatan Masyarakat':
                return { color: "#FEA9A9", weight: 1, fillOpacity: 0.6 };
            case 'Hutan Ramu':
                return { color: "#339933", weight: 1, fillOpacity: 0.6 };
            case 'Jalan':
                return { color: "#FFB200", weight: 1, fillOpacity: 0.6 };
            case 'Kebun Sawit':
                return { color: "#009900", weight: 1, fillOpacity: 0.6 };
            case 'Ladang':
                return { color: "#FFFF99", weight: 1, fillOpacity: 0.6 };
            case 'NKT':
                return { color: "#A5B620", weight: 1, fillOpacity: 0.6 };
            case 'Pemakaman':
                return { color: "#5F5F5F", weight: 1, fillOpacity: 0.6 };
            case 'Permukiman':
                return { color: "#FFD37F", weight: 1, fillOpacity: 0.6 };
            case 'Pencadangan Areal Hutan Tekudum':
                return { color: "#339933", weight: 1, fillOpacity: 0.6 };
            case 'Pencadangan Areal Perkebunan':
                return { color: "#FFD37F", weight: 1, fillOpacity: 0.6 };
            case 'Pencadangan Areal Pertambangan Batubara':
                return { color: "#800000", weight: 1, fillOpacity: 0.6 };
            case 'Pencadangan Areal Pertanian':
                return { color: "#33CCCC", weight: 1, fillOpacity: 0.6 };
            case 'Pencadangan Areal Pertanian/Perkebunan Masyarakat':
                return { color: "#33CCCC", weight: 1, fillOpacity: 0.6 };
            case 'Pencadangan Areal Sawah':
                return { color: "#993366", weight: 1, fillOpacity: 0.6 };
            case 'Pencadangan Ekowisata/Air Bersih Danau Jongkong':
                return { color: "#D4EDFF", weight: 1, fillOpacity: 0.6 };
            case 'Pencadangan Permukiman':
                return { color: "#FFD37F", weight: 1, fillOpacity: 0.6 };
            case 'Perikanan':
                return { color: "#3399FF", weight: 1, fillOpacity: 0.6 };
            case 'Perkantoran':
                return { color: "#111111", weight: 1, fillOpacity: 0.6 };
            case 'Perladangan':
                return { color: "#FFFF99", weight: 1, fillOpacity: 0.6 };
            case 'Pertanian dan Perkebunan':
                return { color: "#33CCCC", weight: 1, fillOpacity: 0.6 };
            case 'Rencana Hutan Desa':
                return { color: "#C0FEA7", weight: 1, fillOpacity: 0.6 };
            case 'Rencana Jalan':
                return { color: "#FFC43F", weight: 1, fillOpacity: 0.6 };
            case 'Rencana Pengembangan Perkebunan':
                return { color: "#FFD37F", weight: 1, fillOpacity: 0.6 };
            case 'Rencana Pengembangan Perkebunan Kelapa Sawit':
                return { color: "#FFD37F", weight: 1, fillOpacity: 0.6 };
            case 'Restorasi Sumber Air':
                return { color: "#D4EDFF", weight: 1, fillOpacity: 0.6 };
            case 'Sawah':
                return { color: "#D4EDFF", weight: 1, fillOpacity: 0.6 };
            case 'Sedot Pasir':
                return { color: "#FF7F00", weight: 1, fillOpacity: 0.6 };
            case 'Semak Belukar':
                return { color: "#BFFF99", weight: 1, fillOpacity: 0.6 };
            case 'Sungai':
                return { color: "#FF9900", weight: 1, fillOpacity: 0.6 };
            case 'Tambang Emas Tradisional':
                return { color: "#9933FF", weight: 1, fillOpacity: 0.6 };
            case 'Tubuh Air':
                return { color: "#D4EDFF", weight: 1, fillOpacity: 0.6 
    }
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
    

        return (
            <div>
                {obTagunRen.map((datas, index)=> {
                       let dataValues = null;
                       let currName = datas.properties.lu_plan;
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

                               <div  key={datas.properties.lu_plan}>
                              
                                <Popup  >

                                    <table className='table table-hover'> 
                                        <tr> 
                                            <td><b>Keterangan</b></td> 
                                            <td>  {datas.properties.keterangan} </td > 
                                        </tr><tr> 
                                            <td><b>Fungsi Kawasan</b></td> 
                                            <td>{datas.properties.fungsi_kawasan} </td > 
                                        </tr><tr> 
                                            <td><b>Desa</b></td> 
                                            <td> {datas.properties.desa}</td > 
                                        </tr><tr> 
                                            <td><b>Luas</b></td> 
                                            <td>{datas.properties.luas}</td > 
                                        </tr><tr> 
                                            <td><b>Land Cover</b></td> 
                                            <td>{datas.properties.landcover}</td > 
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




export default _TagunRen




