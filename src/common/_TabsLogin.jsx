import React from 'react';
import IsLoggedIn from '../helper/IsLoggedIn'
import store from 'store'
import {Link, Redirect} from 'react-router-dom'
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import Avatar from 'react-avatar'

class Login extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          username: "",
          password: "",
        //   error : false,
     
      };
    }
//for change value state in login input
handleChange(e) {
      let name = e.target.name;
      let value = e.target.value;
      let data = {};
      data[name] = value;
      this.setState(data);
  }


onSubmit(e) {
    e.preventDefault();

    const { username, password } = this.state;
    // const { history } = this.props;

    this.setState({ error: false });

    if (!(username === 'forclime' && password === '12345')) {
        return this.setState({ error: true , });
    } else
        store.set('loggedIn', true);
    

   
    alert('login sukses')
    return <Redirect to="/AppMainMap" />
    
}
    render() {
        if (IsLoggedIn()) {
            return <Redirect to="/AppMainMap" />
        } 
       
        //  else (alert("check password dan username"))
        return (
            <div onClick={this.props.loginmodals}>
              {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
              <div className="modal-dialog"> 
            
              <Modal  isOpen={this.props.loginmodal} toggle={this.props.loginmodals} className={this.props.className} style={{opacity:1, paddingLeft:"100px"}}  fade={false} >
              <ModalHeader toggle={this.props.loginmodals} style={{paddingLeft:"165px"}}>Login</ModalHeader>
              <div style={{paddingLeft:"138px", paddingTop:"30px"}}>
                    <Avatar  size="100" round={true} src="https://cdn2.vectorstock.com/i/thumb-large/20/76/man-avatar-profile-vector-21372076.jpg">
                    </Avatar>
                  </div>
             
                <ModalBody>
                      <Form>
                      <FormGroup>
                              <Label for="username">username</Label>
                              <Input type="username" name="username" id="username" placeholder=" " value={this.state.username} onChange={this.handleChange}/>
                          </FormGroup>
                          <FormGroup>
                              <Label for="password">Password</Label>
                              <Input type="password" name="password" id="password" placeholder="***********" value={this.state.password} onChange={this.handleChange}/>
                          </FormGroup>
                      </Form>
                </ModalBody>
                <ModalFooter>
                <Link>
                  </Link>
                  <Button color="info" onClick={this.onSubmit}>Submit</Button>{' '}
                  <Button color="danger" onClick={this.props.loginmodals} > Cancel</Button>
                
                </ModalFooter>
              </Modal>
              </div>
            </div>
          );
    }
}    
export default Login;