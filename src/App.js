import React, { Component } from 'react'
import axios from 'axios';

export class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
         text:'',
         text2:'',
         text3:'',
         text4:'',
         text5:'',
         resultExt:'',
         resultNeu:'',
         resultAgr:'',
         resultCon:'',
         resultOpn:''
    }
}

  changeHAndler=(e)=>{
    this.setState({[e.target.name]:e.target.value});
    //console.log(this.state);
}

submitHandler=(e)=>{
    e.preventDefault();
    console.log(this.state);
   
       axios.post('http://127.0.0.1:5000/',this.state)
     .then(Response=>{
        console.log(Response)
        this.setState({resultExt:Response.data.resultExt});
        this.setState({resultNeu:Response.data.resultNeu});
        this.setState({resultAgr:Response.data.resultAgr});
        this.setState({resultCon:Response.data.resultCon});
        this.setState({resultOpn:Response.data.resultOpn});
        console.log(this.state)
     })
     .catch(error=>{
         console.log(error)
     });

}


  render() {
    const {text,text2,text3,text4,text5}=this.state;

    return (
      <div className="col-sm-10 " className="container">
        <br/><br/>
         <h1 class='text-center'><b>Cheak your personality</b></h1>
         <br/><br/>
      <form onSubmit={this.submitHandler}>
      <div className="form-group">
        <label>1.	If you could change one thing about your personality, what would it be?</label>
        <textarea class="form-control" rows="2" id="comment" placeholder="Enter Answer"  name="text" onChange={this.changeHAndler}></textarea>
      </div>
      <div className="form-group">
        <label>2.	Can you tell me about a stressful scenario in the past and how you handled it?</label>
        <textarea class="form-control" rows="2" id="comment" placeholder="Enter Answer"  name="text2" onChange={this.changeHAndler}></textarea>
      </div>
      <div className="form-group">
        <label>3.	What hobbies or sports are you involved with outside of work, and why do you enjoy them?</label>
        <textarea class="form-control" rows="2" id="comment" placeholder="Enter Answer"  name="text3" onChange={this.changeHAndler}></textarea>
      </div>
      <div className="form-group">
        <label>4. Can you tell me about a time when you went above and beyond in your job?</label>
        <textarea class="form-control" rows="2" id="comment" placeholder="Enter Answer"  name="text4" onChange={this.changeHAndler}></textarea>
      </div>
      <div className="form-group">
        <label>5. What makes you unique?</label>
        <textarea class="form-control" rows="2" id="comment" placeholder="Enter Answer"  name="text5" onChange={this.changeHAndler}></textarea>
      </div>
      

      

      <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <br/><br/>
      <label><b>Extreversion : </b>{this.state.resultExt}</label>
      <br/><br/>
      <label><b>Neurotism : </b>{this.state.resultNeu}</label>
      <br/><br/>
      <label><b>Agreebleness : </b>{this.state.resultAgr}</label>
      <br/><br/>
      <label><b>Conscientiousness : </b>{this.state.resultCon}</label>
      <br/><br/>
      <label><b>Openness : </b>{this.state.resultOpn}</label>
      <br/><br/><br/><br/>
      </div>   
    
    )
  }
}

export default App
