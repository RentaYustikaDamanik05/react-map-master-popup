import React, { Component } from 'react';
import 'react-fontawesome';
import { Map, ZoomControl, ScaleControl, FeatureGroup } from 'react-leaflet';
import MapBoxGLLayer from '../common/Mapbox'
import "../assets/css/search.css";
import _DaBuffer from '../common/_kab_da_buffer';
import KabupatenDesa from '../common/_kabdesa';
import _Da_Kab from '../common/_kab_da';
import { Sidebar, Tab } from 'react-leaflet-sidetabs'
import { FiHome, FiChevronRight, FiSettings, FiFilePlus, FiUsers, FiImage } from "react-icons/fi";
import * as ELG from "esri-leaflet-geocoder";
import "../assets/css/search.css";
import L from 'leaflet';
import { Form, FormGroup, Label, Button, Card } from 'reactstrap';
import Avatar from 'react-avatar'
import Login from '../common/_TabsLogin';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import _FKH from '../common/commonDatas/_batasArea';
import _Bd2 from '../common/commonDatas/_batasArea';
import _Bd1 from '../common/commonDatas/_batasGaris';
import _TagunEks from '../common/commonDatas/_tataGunEks';
import _Fkh from '../common/commonDatas/_FKh';
import _TagunRen from '../common/commonDatas/_tataGunRen';
import _BG from '../common/commonDatas/_batasGaris';
import _PL2011 from '../common/commonDatas/_PL2011'
import _PL2012 from '../common/commonDatas/_PL2012'
import _PL2013 from '../common/commonDatas/_PL2013'
import _PL2014 from '../common/commonDatas/_PL2014'
import _PL2015 from '../common/commonDatas/_PL2015'
import _PL2016 from '../common/commonDatas/_PL2016'
import _PL2017 from '../common/commonDatas/_PL2017'

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png"
});


export default class App extends Component {
  constructor(props) {
    super(props);
    this.loginmodals = this.loginmodals.bind(this);
    this.switchChange = this.switchChange.bind(this);
    this.state = {
      // state location 
      location: {
        lat: 2.1198775074231926,
        lng: 113.873291015625
      },
      FKH: false,
      // state for user location
      userLocation: false,
      zoom: 7,
      collapsed: true,
      selected: 'home',
      // FKH: false,
      loginmodal: false,
      expanded: false,
      tagunEks: false,
      tagunRen: false,
      PL2011: false,
      PL2012: false,
      PL2013: false,
      PL2014: false,
      PL2015: false,
      PL2016: false,
      PL2017: false,
      FKH: false,
      BD1: false,
      BD2: false,

      // Agroforesty
      Per: false,
      Pen: false,
      Pem: false,

      // Perhutanan sosial
      Persos: false,

      //Demplot
      SilvFish: false,
      SilvPas: false,
      Hortik: false,
      HHBK: false,
      PSP: false,



    };
  }
  switchChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };


  loginmodals(state) {
    this.setState({
      loginmodal: !this.state.loginmodal,
    });
  }


  componentDidMount() {
    const map = this.leafletMap.leafletElement;
    const url_poi_bvt = new ELG.Geosearch().addTo(map);
    const results = new L.LayerGroup().addTo(map);

    url_poi_bvt.on("results", function (data) {
      results.clearLayers();
      for (let i = data.results.length - 1; i >= 0; i--) {
        results.addLayer(L.marker(data.results[i].latlng));
      }
    });
  }

  onClose() {
    this.setState({ collapsed: true });
  }
  onOpen(id) {
    this.setState({
      collapsed: false,
      selected: id,
    })
  }

  render() {
    const position = [this.state.location.lat, this.state.location.lng]
    return (

      <div>
        <Map zoomControl={false} className="map" center={position}
          zoom={this.state.zoom} scrollWheelZoom={true} ref={
            m => {
              this.leafletMap = m;

            }}  >
          <FeatureGroup>
            <MapBoxGLLayer
              accessToken="pk.eyJ1IjoiYWdhbXBhbmdsYWgiLCJhIjoiY2swYXVlbWRnMGxvajNncGltMXh6dXE2aiJ9.-Y3nTDMgScp10P-g9LpQ-A" />
            <ScaleControl position='bottomright' />
            <ZoomControl position="bottomright" />
            {this.state.BD2 ? <_Bd2 /> : null}
            {this.state.BD1 ? <_BG /> : null}
            {this.state.tagunEks ? <_TagunEks /> : null}
            {this.state.tagunRen ? <_TagunRen /> : null}
            {this.state.FKH ? <_Fkh /> : null}
            {this.state.PL2011 ? <_PL2011 /> : null}
            {this.state.PL2012 ? <_PL2012 /> : null}
            {this.state.PL2013 ? <_PL2013 /> : null}
            {this.state.PL2014 ? <_PL2014 /> : null}
            {this.state.PL2015 ? <_PL2015 /> : null}
            {this.state.PL2016 ? <_PL2016 /> : null}
            {this.state.PL2017 ? <_PL2017 /> : null}


            <KabupatenDesa />
            <_DaBuffer />
            <_Da_Kab />

          </FeatureGroup>
          <div>
            <Login loginmodal={this.state.loginmodal} loginmodals={this.loginmodals} />
          </div>

          {/* <_FKH/> */}

        </Map>

        <Sidebar
          id="sidebar"
          position="left"
          collapsed={this.state.collapsed}
          closeIcon={<FiChevronRight />}
          selected={this.state.selected}
          onOpen={this.onOpen.bind(this)}
          onClose={this.onClose.bind(this)}
        >
          {/* <p>this check? <span>{this.state.FKH ? 'on' : null}</span></p> */}
          <Tab id="home" header="Home" icon={<FiHome />}>
            {/* <SimpleExpansionPanel   /> */}
            <div>
              <ExpansionPanel>
                <ExpansionPanelSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>PEMETAAN BATAS PARTISIPATIF</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <FormControl component="fieldset">
                    <FormGroup>
                      <FormControlLabel
                        control={<Switch

                          checked={this.state.FKH} onChange={this.switchChange('FKH')} value="FKH" />}
                        label="FUNGSI KAWASAN HUTAN"
                      />

                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel
                        control={<Switch checked={this.state.BD1} onChange={this.switchChange('BD1')} value="BD1" />}
                        label="BATAS DESA (GARIS)"
                        backgroundColor="primary"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel
                        control={<Switch checked={this.state.BD2} onChange={this.switchChange('BD2')} value="BD2" />}
                        label="BATAS DESA (AREA)"
                        backgroundColor="primary"
                      />
                    </FormGroup>
                    <h3>Tata Guna Lahan</h3>
                    <FormGroup>
                      <FormControlLabel
                        control={<Switch checked={this.state.tagunEks} onChange={this.switchChange('tagunEks')} value="tagunEks" />}
                        label="TATA GUNA LAHAN (Eksisting)"
                        backgroundColor="primary"
                      />
                      <FormControlLabel
                        control={<Switch checked={this.state.tagunRen} onChange={this.switchChange('tagunRen')} value="tagunRen" />}
                        label="TATA GUNA LAHAN (Rencana)"
                        color="primary"

                      />
                    </FormGroup>
                    <h3>Penutupan Lahan</h3>
                    <FormGroup>
                      <FormControlLabel
                        control={<Switch checked={this.state.PL2011} onChange={this.switchChange('PL2011')} value="PL2011" />}
                        label="Penutupan Lahan 2011"
                        backgroundColor="primary"
                      />
                      <FormControlLabel
                        control={<Switch checked={this.state.PL2012} onChange={this.switchChange('PL2012')} value="PL2012" />}
                        label="Penutupan Lahan 2012"
                        color="primary"
                      />
                      <FormControlLabel
                        control={<Switch checked={this.state.PL2013} onChange={this.switchChange('PL2013')} value="PL2013" />}
                        label="Penutupan Lahan 2013"

                      />

                      <FormControlLabel
                        control={<Switch checked={this.state.PL2014} onChange={this.switchChange('PL2014')} value="PL2014" />}
                        label="Penutupan Lahan 2014"
                      />

                      <FormControlLabel
                        control={<Switch checked={this.state.PL2015} onChange={this.switchChange('PL2015')} value="PL2015" />}
                        label="Penutupan Lahan 2015"

                      />

                      <FormControlLabel
                        control={<Switch checked={this.state.PL2016} onChange={this.switchChange('PL2016')} value="PL2016" />}
                        label="Penutupan Lahan 2016"

                      />

                      <FormControlLabel
                        control={<Switch checked={this.state.PL2017} onChange={this.switchChange('PL2017')} value="PL2017" />}
                        label="Penutupan Lahan 2017"

                      />
                    </FormGroup>
                  </FormControl>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>AGROFORESTRY</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <FormControl component="fieldset">
                    <FormGroup>
                      <FormControlLabel
                        control={<Switch

                          checked={this.state.Per} onChange={this.switchChange('Per')} value="Per" />}
                        label="PERSAMAIAN"
                      />

                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel
                        control={<Switch

                          checked={this.state.Pen} onChange={this.switchChange('Pen')} value="Pen" />}
                        label="PENANAMAN"
                      />

                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel
                        control={<Switch

                          checked={this.state.Pem} onChange={this.switchChange('Pem')} value="Pem" />}
                        label="PEMELIHARAAN"
                      />

                    </FormGroup>
                  </FormControl>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel >
                <ExpansionPanelSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography>PERHUTANAN NASIONAL</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <FormControl component="fieldset">
                    <FormGroup>
                      <FormControlLabel
                        control={<Switch

                          checked={this.state.Persos} onChange={this.switchChange('Persos')} value="Persos" />}
                        label="PERHUTANAN NASIONAL"
                      />

                    </FormGroup>
                  </FormControl>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel >
                <ExpansionPanelSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography>DEMPLOT</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <FormControl component="fieldset">
                    <FormGroup>
                      <FormControlLabel
                        control={<Switch
                          checked={this.state.SilvFish} onChange={this.switchChange('SilvFish')} value="SilvFish" />}
                        label="Silvofishery"
                      />

                    </FormGroup>

                    <FormGroup>
                      <FormControlLabel
                        control={<Switch
                          checked={this.state.SilvPas} onChange={this.switchChange('SilvPas')} value="SilvPas" />}
                        label="Silvopastural"
                      />

                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel
                        control={<Switch
                          checked={this.state.Hortik} onChange={this.switchChange('Hortik')} value="Hortik" />}
                        label="Hortikultura" />

                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel
                        control={<Switch
                          checked={this.state.HHBK} onChange={this.switchChange('HHBK')} value="HHBK" />}
                        label="HHBK"
                      />

                    </FormGroup>

                    <FormGroup>
                      <FormControlLabel
                        control={<Switch
                          checked={this.state.PSP} onChange={this.switchChange('PSP')} value="PSP" />}
                        label="Perbaikan Sistem Perladangan"
                      />

                    </FormGroup>
                  </FormControl>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel >
                <ExpansionPanelSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography>PATROLI HUTAN</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <FormControl component="fieldset">
                    <FormGroup>
                      <FormControlLabel
                        control={<Switch

                          checked={this.state.WP} onChange={this.switchChange('WP')} value="WP" />}
                        label="WILAYAH PATROLI"
                      />

                    </FormGroup>

                    <FormGroup>
                      <FormControlLabel
                        control={<Switch

                          checked={this.state.TP} onChange={this.switchChange('TP')} value="TP" />}
                        label="TEMUAN PATROLI"
                      />

                    </FormGroup>

                    <FormGroup>
                      <FormControlLabel
                        control={<Switch

                          checked={this.state.JP} onChange={this.switchChange('JP')} value="JP" />}
                        label="JALUR PATROLI"
                      />

                    </FormGroup>
                  </FormControl>
                </ExpansionPanelDetails>
              </ExpansionPanel>

            </div>

          </Tab>
          <Tab id="add" header="Tambah Data" icon={< FiFilePlus />}>

          </Tab>

          <Tab id="img" header="Documentasi" icon={<FiImage />}>
            <p>We don't want privacy so much as privacy settings!</p>
          </Tab>


          <Tab id="login" header="login" icon={<  FiUsers />}>
            <Form style={{ paddingTop: "50px" }}>
              <FormGroup>

                <Card>
                  <Label for="exampleSelect" > <h4 style={{ textAlign: "center" }}> Account </h4></Label>
                  <div style={{ paddingLeft: "138px" }}>
                    <Avatar size="100" round={true} src="https://cdn2.vectorstock.com/i/thumb-large/20/76/man-avatar-profile-vector-21372076.jpg">
                    </Avatar>
                  </div>

                </Card>

                <Card>
                  <Button color="info" onClick={this.loginmodals} > Login  </Button>
                </Card>

                <Card>
                  <Button onClick={this.tambahJabar} > Register </Button>
                </Card>
              </FormGroup>
            </Form>
          </Tab>
          <Tab id="settings" header="Settings" anchor="bottom" icon={<FiSettings />}>
            <p>We don't want privacy so much as privacy settings!</p>
          </Tab>
        </Sidebar>
      </div>
    );
  }
}
