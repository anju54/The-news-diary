import React, { Component }from 'react';
import { 
    Navbar, Nav, NavbarBrand, Container,
    NavbarToggler, Collapse, NavItem,
    Modal, ModalHeader, ModalBody, Button, FormGroup, Label,
    Form, Input} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import '../../index.css';

class Header extends Component{

    constructor(props){

        super(props);
        this.state = {
            isNavOpen : false,
            isModelOpen : false
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModel = this.toggleModel.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen : !this.state.isNavOpen
        });
    }

    toggleModel(){
        this.setState((prevState) =>({
            isModelOpen : !prevState.isModelOpen
        }), ()=>{console.log(this.state)});
    }

    async handleLogin(event){

        this.toggleModel();
        alert("Username: "+this.username.value + "password "+ this.password.value +
        "Remember me " +this.remember.checked );
        event.preventDefault();

        const data = {
            "name":this.username.value,
            "password":this.password.value
        };
        console.log(data);
        const response = await fetch(`http://localhost:8085/user/login`, {
            method: "POST",
            cache: "no-cache",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then( response => {
            if(response.ok){
                return response.json();
                console.log(response);
            }else{
                let error = response.status;
                throw error;
            }
        })
        console.log(response);
    }

    render(){
        return(
            <>
                <Navbar dark expand="md" className="navbarStyle">
                    <Container>
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto serif" href="/">
                            <img src="assets/images/rss.png" height="50" width="30"
                            alt="" id="logo" />
                            The-News-Hub
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link serif" to="/home">
                                    <span className="fa fa-info fa-lg"></span> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link serif" to="/categories">
                                    <span className="fa fa-list fa-lg"></span> Categories
                                </NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink className="nav-link serif" to="/contactus">
                                    <span className="fa fa-address-card fa-lg"></span> Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModel}>
                                    <span className="fa fa-sign-in fa-lg serif"></span>Login
                                </Button>
                            </NavItem>
                        </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
                {/* <Jumbotron>
                    <Container>
                        <div className="row row-header">
                            <Col sm="12" xs="6">
                                <h1>Resto Con Fusion</h1>
                                <p>We take inspiration from the world's best cuisines,
                                    and creates a unique fusion experiance. Our lipsmacking creations will tickle your culinary senses! </p>
                            </Col>
                        </div>
                    </Container>
                </Jumbotron> */}
                <div>
                    <Modal isOpen={this.state.isModelOpen} toggle={this.toggleModel} id="loginModel">
                        <ModalHeader toggle={this.toggleModel}>Login</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleLogin}>
                                <FormGroup>
                                    <Label htmlFor="username" className="serif">Username</Label>
                                    <Input type="text" id="username"  name="username" 
                                    innerRef={(input) => this.username = input} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password" className="serif">Password</Label>
                                    <Input type="password" id="password" name="password" 
                                    innerRef={(input) => this.password = input} />
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="remember" className="serif"
                                    innerRef={(input) => this.remember = input}/>
                                        Remember me
                                    </Label>
                                </FormGroup>
                                <Button type="submit" className="bg-primary" >Login</Button>
                            </Form>
                        </ModalBody>
                    </Modal>
                </div>
            </>
        );
    }
}

export default Header;