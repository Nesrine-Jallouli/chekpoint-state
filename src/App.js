import React, { Component } from 'react';
import './App.css';
import picture from './NesrineProfil.jpg' ; 
import chrono from './chrono.png' ;

class App extends Component {
  Persone = {
    fullName: "Nesrine Jallouli" ,
    bio : "Cité Hedi Nouira Borj Louzir Ariana",
    profession : "Student in GO MY CODE",
    imgSrc : picture
  };
 
    constructor( props ){
        super( props )
        this.state = { show : false , seconds: 0};
        this.toggleDiv = this.toggleDiv.bind(this)
    }

    toggleDiv = () => {
        const { show } = this.state;
        this.setState( { show : !show} )
        if (!show)
        {
          this.interval = setInterval(() => {
            this.setState(prevState => ({
              seconds: prevState.seconds + 1
            }));
          }, 1000);
        }
        else 
        {
          clearInterval(this.interval);
        }
        
    }
 

    render() {
      if (this.state.show ) 
        {
          return (
  
              <div className="container">
                  <br />
                  <div className="chrono"> 
                    <img src={chrono} alt="chronometre" width="40px"/> 
                    <button>{this.state.seconds}</button>
                  </div>
                  <button onClick={ this.toggleDiv } class="btn btn-success">Cacher Profil</button>
                  
                  { this.state.show && <h1>Hello {this.Persone.fullName}</h1> }
                  { this.state.show && <p>I'm from in {this.Persone.bio}</p>  }
                  { this.state.show && <p>I'm {this.Persone.profession}</p>  }
                  { this.state.show && <img src={this.Persone.imgSrc} alt="photo de profil" width="320px" />  }

              </div>
  
          );
        }  
      else 
        {
          return (
            <div className="container">
               <button onClick={this.toggleDiv } class="btn btn-success"> Afficher Profil</button>
            </div>
            )
        }
  
  }
}

export default App;


