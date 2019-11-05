import React, { Component } from 'react';
import { Form, FormGroup, Label, Input,  CardHeader, Button } from 'reactstrap';
import { DKI } from '../assets/dataDKI';
class TambahDki extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kegiatan: " ",
      partisipan: " ",
      Peserta: " ",
      Hasil: " ",
      Datetime: " ",
      Keterangan: " "

    }
  }

  render() {
    let DataDki = DKI
    
    return (
      // <div onClick={this.props.add}>
      //            <div className="modal-dialog"> 
      //            <Modal  isOpen={this.props.editJabar} toggle={this.props.add} className={this.props.className} style={{opacity:1, paddingLeft:"100px"}}  fade={false} >
      //           <ModalHeader toggle={this.props.add} style={{paddingLeft:"165px"}}>Tambah</ModalHeader>

      //           <ModalBody>
<div>
              
                     {DataDki.features.slice(0, 1).map((datas, index) => {
                    let namaDesa = datas.properties["namadesa"];
                    let NamaProv = datas.properties["namaprov"]
                    let NamaKot = datas.properties["namakabkot"]
                    let NamaKec = datas.properties["namakec"]
                    let KodePos = datas.properties["kodepodes"]

                    return(
                      <div key={index}>
                         
        <Form>
          <FormGroup>
         
            <CardHeader style={{ backgroundColor: "lightcyan", paddingTop: "15px" }}>   
             <h4 style={{ textAlign: "center" }}> Tambah Kegiatan</h4></CardHeader>
         
          </FormGroup>

          <FormGroup>
            <Label for="exampleEmail">Kegiatan</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder=" "
            />
          </FormGroup>
          <FormGroup>
            <Label for="nama">Peserta</Label>
            <Input
              type="nama"
              name="nama"
              id="nama"
              placeholder=""
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleNumber">Hasil</Label>
            <Input
              type="number"
              name="number"
              id="exampleNumber"
              placeholder=""
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleDatetime">Datetime</Label>
            <Input
              type="datetime"
              name="datetime"
              id="exampleDatetime"
              placeholder=" "
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Keterangan </Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
        </Form>
        <div style={{ backgroundColor: "primary", display: "flex" }}>
          <div >
            <Button color="primary"
             
            > Simpan </Button>
          </div>
          <div style={{ paddingLeft: "10px" }}>
            <Button color="danger" onClick={this.props.clickHandler}> Batal </Button> {' '}
          </div>
        </div>
      </div>
    );
  })
}
</div>
  );
}                
}
export default TambahDki;
