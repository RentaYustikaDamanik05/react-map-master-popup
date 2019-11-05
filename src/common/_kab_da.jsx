import React from 'react';
import { Tooltip,GeoJSON } from 'react-leaflet';
import {_Da} from '../dataCounter/dataDa'

class _Da_Kab extends React.Component {
    constructor(props) {
        super(props);
        this.getColor = this.getColor.bind(this);
        this.style = this.style.bind(this);
        
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    getColor(value) {
        let color;
        this.props.data && this.props.data.forEach(datas => { if (datas.name === value) color = datas.color });
        return color ? color :"#53fb94"
    }

    style(color) {
        const defaultdesaStyle = { weight: 1, opacity: 1, color: '#666', dashArray: '3', fillOpacity: 0.2  };
        let object = this.props.desaStyle ? this.props.desaStyle : defaultdesaStyle;
        object["fillColor"] = this.getColor(color.properties);
        return object;
    }

    handleMouseEnter(event, name) {
        const defaultdesaHoverStyle = { weight: 1, color: '#2b2b2b', dashArray: '1', fillOpacity: 0.2 };
        event.target.setStyle(this.props.defaultdesaHoverStyle ? this.props.desaHoverStyle : defaultdesaHoverStyle);
        // event.target.bringToFront();
    }
    handleMouseLeave(event) {
        event.target.setStyle(this.style);
        // event.target.bringToFront();
    }


    render() {
        return (
            <div>

                {
                    (this.props.DesaOn === undefined || this.props.DesaOn) &&
                    _Da.features.map((datas, index) => {
                        let show = true;
                        let currName = datas.properties["nama_da"];
                        this.props.excludeDesa && this.props.excludeDesa.forEach(datas => { if (currName === datas) show = false });


                        return (
                            <div key={index}>
                                <GeoJSON
                                    data={datas}
                                    style={this.style}
                                    onmouseover={event => this.handleMouseEnter(event)
                                    }
                                    onmouseout={event => this.handleMouseLeave(event)}
                                     >

                                   {/* <div  key={datas.properties["nama_da"]}> */}
                                  
                                    {/* <Popup  >
                                    
                                        {"provinsi :" + " " + datas.properties["namaprov"]}
                                        <br />
                                        {"kota :" + " " + datas.properties["namakabkot"]}
                                        <br />
                                        {"kecamatan :" + " " + datas.properties["namakec"]}
                                        <br />
                                        {"desa :" + " " + datas.properties["namadesa"]}
                                        <br />
                                        {"kode desa :" + " " + datas.properties["kodepodes"]}
                                        <br />
                                        {/* {"koordinate :" + " " + datas.geometry["coordinates"]}
                                      */}
                                    {/* </Popup> */} 
                                  
                                    {/* </div> */}
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
} export default _Da_Kab