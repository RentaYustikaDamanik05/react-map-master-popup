import React from 'react';
import { Popup, Tooltip, GeoJSON } from 'react-leaflet'
import { BatAr } from '../../dataCounter/dataBatasArea'

class _Bd2 extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            isLoading : true
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

        return color ? color : '#FFB200'
    } 

    style(color) {
        const defaultdesaStyle = { weight: 1, opacity: 2, color: '#FFB200', dashArray: '3',fillOpacity: 0.3 };
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

    render() {
        let BA = BatAr
        return (
            <div>

                {
                    (this.props.DesaOn === undefined || this.props.DesaOn) &&
                    BA.features.map((datas, index) => {
                        let currName = datas.properties["desa"];
           


                        return (
                            <div key={index}>
                                <GeoJSON
                                    data={datas}
                                    style={this.style}
                                    onmouseover={event => this.handleMouseEnter(event)
                                    }
                                    onmouseout={event => this.handleMouseLeave(event)}
                                     >

                                   <div  key={datas.properties["desa"]}>
                                  
                                    <Popup  >
                                    
                                        {/* {"status batas :" + " " + datas.properties["status_batas"]}
                                        <br />
                                        {"kabupaten :" + " " + datas.properties["kabupaten"]}
                                        <br />
                                        {"desa :" + " " + datas.properties["desa"]}
                                        <br />
                                        {"luas Ha :" + " " + datas.properties["luas_ha"]}
                                        <br />
                                        {" keterangan:" + " " + datas.properties["keterangan"]}
                                        <br />
                                        {" provinsi:" + " " + datas.properties["provinsi"]}
                                        <br />
                                        {" kecamatan:" + " " + datas.properties["kecamatan"]}
                                        <br />
                                         */}
                                          
            <table className='table table-hover'> 
            <tr> 
            <td><b>status batas </b></td> 
            <td> {datas.properties.status_batas}  </td > 
            </tr><tr> 
            <td><b>kabupaten</b></td> 
            <td>  {datas.properties.kabupaten} </td > 
            </tr><tr> 
            <td><b>luas_hs</b></td> 
            <td>{datas.properties.luas_ha} </td > 
            </tr><tr> 
            <td><b>Keterangan</b></td> 
            <td> {datas.properties.keterangan}</td > 
            </tr><tr> 
            <td><b>Provinsi</b></td> 
            <td>{datas.properties.provinsi}</td > 
            </tr><tr> 
            <td><b>kecamatan</b></td> 
            <td>{datas.properties.kecamatan}</td > 
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

                    })

                }

            </div>
        )
    }
} export default _Bd2




