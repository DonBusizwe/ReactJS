import React, { Component } from "react";
import GitHub from "./GitHub";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}
class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/github">GitHub</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/github" component={GitHub} />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About}/>
            <Route path="/*" component={NotFound} />
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
class About extends Component {
  render(){
    return <div>About</div>;
  }
} 
class Home extends Component {
  render() {
    return <div>Home</div>;
  }
}
class NotFound extends Component {
  render() {
    return <div>Not Found</div>;
  }
}







/*
class App extends Component {
  render() { const isValid = false;
    return (
      <div>
        <h1> &#8686;Dreams - Turned - Reality&#8686; </h1>{" "}

        <Product/>
        <Button variant="danger" disabled={isValid}>Made it out the trenches</Button>
      
 <Rating rating="1"/>
 <Rating rating="2"/>
 <Rating rating="3"/>
 <Rating rating="4"/>
 <Rating rating="5"/> 
 


      </div>    
    );
  }
}  */

/*

class App extends Component {
    formatName(user){
    return user.firstName + ' ' + user.lastName;
    }
    render() {
    const user ={
    firstName:'Don',
    lastName:'Busizwe'
    };
    return (
    <div>
   dOwn Dream-chase &#8686;
    <h1>Hello, &#8686; {this.formatName(user)} &#8686; </h1>
    </div>
    );
    }
   }*/




export default App;
