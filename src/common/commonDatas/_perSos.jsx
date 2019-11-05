import React from 'react';
import { Popup, Tooltip, GeoJSON } from 'react-leaflet'
import Axios from 'axios'

class _PERSOS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PERSOS: [],
        }
    }


    componentDidMount() {
        Axios
            .get('http://forclime.agrisoft-cb.com:5002/data/perhutsos_perhutsos')
            .then(response => {
                this.setState(
                    { PERSOS: response.data.features }
                );
                // console.log('data product dari axios', response.data.features)
            })
    }


    render() {
        let PERSOSobj = this.state.PERSOS
        const PLStyle = (PERSOSobj) => {

            switch (PERSOSobj.properties.fungsi_kawasan) {
                case 'Hutan Lindung':
                    return { color: "#33A02C" };
                case 'Hutan Produksi':
                    return { color: "#DDE021" };
                case 'Hutan Produksi Terbatas':
                    return { color: "#C2C51D" };
                case 'KSA/KSPA':
                    return { color: "#9DE03E" };
                case 'Tubuh Air':
                    return { color: "#A6CEE3" };
            }

            }
        
        return (
            <div>
                {PERSOSobj.map((datas, index) => {
                    let currName = datas.properties.fungsi_kawasan;
                    return (
                        <div key={index}>
                            <GeoJSON
                                data={datas}
                                style={PLStyle}

                            >

                                <div key={datas.properties.fungsi_kawasan}>

                                    <Popup >
                                        <table className='table table-hover'> 
                                            <tr> 
                                                <td><b>Skema</b></td> 
                                                <td> {datas.properties.skema}  </td > 
                                            </tr><tr> 
                                                <td><b>Fungsi Kawasan</b></td> 
                                                <td>  {datas.properties.fungsi_kawasan} </td > 
                                            </tr><tr> 
                                                <td><b>SK</b></td> 
                                                <td>{datas.properties.no_sk} </td > 
                                            </tr><tr> 
                                                <td><b>Luas</b></td> 
                                                <td>{datas.properties.luas_sk} </td > 
                                            </tr><tr> 
                                                <td><b>Keterangan</b></td> 
                                                <td>{datas.properties.keterangan} </td > 
                                            </tr><tr> 
                                                <td><b>Desa</b></td> 
                                                <td>{datas.properties.desa} </td > 
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




export default _PERSOS




