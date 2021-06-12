import React,  { Component } from 'react';
const axios = require('axios');
// const cors = require(cors);

class Home extends Component {
  // const [register, handle, error] = useForm()

  constructor(props){
    super(props);
    this.state = {
      id:100,
      name :"",
      email : "",
      zipcode: "",
      status: false

    }
  }

    valid  (item, type) {
      let itemValue = item.target.value;
      switch(type){
        
        case"name":{
          this.setState({name:itemValue});
          break;
        }
        case"email":{
          this.setState({email:itemValue});
          break;
        }
        case"zipcode":{
          this.setState({zipcode:itemValue});
          break;
        }
        case"status":{
          if(itemValue == "on"){
            this.setState({status:true});
          }
          else {
            this.setState({status:false});
          }
          break;
        }

      }
    }
  

   async registerUser() {
    
    console.log("Data submit")
    console.log("name: " + this.state.name)
    console.log(this.state.email)
    console.log(this.state.zipcode)
    console.log(this.state.status)
 
    // const test = await 
    // fetch("GET", "http://localhost:8080/app/users").then((res) => {
    //   return res.json()
    //   // console.log(res.json())
    // })

    // test.then((res) => console.log(res))


    try {
      const response = await axios.post("http://localhost:8080",
       {
        userId: this.state.id,
        name: this.state.name,
        email: this.state.email,
        vaccineStatus: this.state.status,
        zipcode:  this.state.zipcode
      }).then(() => {
        this.setState({id: this.state.id + 1});
        console.log("POST completed")
      }).catch((err) => console.log(err));
   
      // return Promise.resolve(response);
    } catch (error) {
      console.error(
        "this the error: ",
        error.response.status,
        error.response.statusText,
        error.response.data
      );
    }

  }

    render(){


        return(
            <div className="yourStatus"> 
                <h1 style={{color: "blue"}}>Your Covid Vaccine Status</h1><br />
                <h2 style={{color: "red"}}>you are going to let people know if your area is safe with percentage of people<br />
                who already got covid 19 vaccine or not. By update your status in this website.</h2><br />
                  {/* <form > */}
                  <p>Enter your name:</p>
                  <input
                    type="text"
                    // id="name_id" name="name_id"
                    onChange={(item) => this.valid(item, "name")}
                  />
                 
                  <p>Enter your email:</p>
                  <input
                    type="text"
                    //  id="email_id" name="email_id" 
                     onChange={(item) => this.valid(item, "email")}
                  />
              
                  <p>Enter your zipcode:</p>
                  <input
                    type="text"
                    // id="zipcode_id" name="zipcode_id"
                    onChange={(item) => this.valid(item, "zipcode")}
                  />
           
                  <p>Did you get vaccine?(Y or N)</p>
                  <input
                    type="checkbox"
                    // id="status_id" name="status_id"
                    onChange={(item) => this.valid(item, "status")}
                  />
                 
                  <button type="submit" onClick={() => this.registerUser()} >Submit</button>
                  {/* </form> */}
            </div>
          )
    }
  }
  
export default Home;