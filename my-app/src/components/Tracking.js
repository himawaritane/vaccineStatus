import React,  { Component } from 'react';

class Tracking extends Component {
    render(){
        return(
            <div className="yourZipcode"> 
                <h1 style={{color: "blue"}}>Tracking your area covid status</h1><br />
                  <form>
                  <p>Search by Zipcode:</p>
                  <input
                    type="text"
                  />
                  </form>
  
                  <form>
                  <button type="submit">Submit</button>
                  </form>
            </div>
          )
    }
  }
  

export default Tracking;