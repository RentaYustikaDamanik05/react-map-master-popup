import React from 'react';
import { Table } from 'reactstrap';
import { DKI } from '../assets/dataDKI';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
const DataTables = (props) => {
    let Data = DKI
  return (

    <div>

  {Data.features.slice(0,6).map((datas, index) => {
                    let namaDesa = datas.properties["namadesa"];
                    let NamaProv = datas.properties["namaprov"]
                    let NamaKot = datas.properties["namakabkot"]
                    let NamaKec = datas.properties["namakec"]
                    let KodePos = datas.properties["kodepodes"]

                    return (
                        <Table hover onClick >
                        <thead>
                          <tr>
                            {/* <th>no</th> */}
                            <th> kodePodes</th>
                            <th> Desa</th>
                            <th>Provinsi</th>
                            <th> Kota</th>
                            <th> kecamatan</th>
                        
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            {/* <th scope="row"></th> */}

                            <td>{KodePos}</td>
                            <td>{namaDesa}</td>
                            <td>{NamaProv}</td>
                            <td>{NamaKot}</td>
                            <td>{NamaKec}</td>
                         
                          </tr>
                        </tbody>
                        </Table>
                      
                        
                    )
                    
                })
              
                 
                }
                  <Pagination  size="lg" aria-label="Page navigation example">
                      <PaginationItem>
                        <PaginationLink first href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink previous href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">
                          2
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink next href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink last href="#" />
                      </PaginationItem>
                    </Pagination>
                  
    </div>
  
  );
}

export default DataTables;
