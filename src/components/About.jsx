import React from 'react';
import User from './User';
import UserClass from './UserClass';

class About extends React.Component{
  constructor(props){
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount(){
    console.log("Parent component did Mount");
  }

  render(){
    console.log("Parent render");
    return(
      <div>
        <h1>About Class Component</h1>
        <h2>This is namaste react web series</h2>
        <User name={"Pragati Dehankar(functional comp)"}/>
  
        <UserClass name={"Pragati Dehankar(class comp)"} location={"Ballarshah (class)"}/>
      </div>
    );
  }
}

export default About;