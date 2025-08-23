import React from "react";

class UserClass extends React.Component{
  constructor(props){
    super(props);
    // console.log(props);
    console.log("child constructor");

    this.state={
      userInfo:{
        name:"Dummy",
        location:"Default",
      },
    };
  };

  async componentDidMount(){
    console.log("Child component did mount");
    const data=await fetch("https://api.github.com/users/pragati-dehankar");
    const json=await data.json();
       
    this.setState({
      userInfo:json,
    });


    console.log(json);
  }

  render(){
    const {name,location,avatar_url}=this.state.userInfo;
    //const {count,count2}=this.state;
    //console.log("child render");
    return (
    <div className="user-card">
      {/* <h1>Count:{count}</h1>
      <h1>Count:{count2}</h1> */}
      {/* <h1>Count:{count2}</h1> */}
      {/* <button onClick={()=>{
           this.setState({
           count: this.state.count+1,
           count2: this.state.count2+1,
           });
      }}>Count Increase</button>
     <h2>Name: {name}</h2>
     <h3>Location:{location}</h3>
     <h4>@pragatidehankar1234</h4> */}

     <img src={avatar_url}/>
     <h2>Name:{name}</h2>
     <h3>Location:{location}</h3>
     
  </div>
    )
  }
};
export default UserClass;