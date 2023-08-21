import React, { Component } from 'react'
import './Myform.css'
 class Mypostapi extends Component {
constructor(props) {
  super(props)

  this.state = {
     userid:"",
     title:"",
     body:""
  }
}
// this is long method wher we have to make handler for every event
// handleruserid = event => this.setState({userid : event.target.value})
// handlerid = event => this.setState({id:event.target.value})
// handlertitle =event => this.setState({title:event.target.value})
// handlerbody =event => this.setState({body:event.target.value})

handlerevent = event => this.setState({[event.target.name]:event.target.value})
//here we have to enclose with square brackets also

// this is how we post the data
handlersubmit= async event => {event.preventDefault()
const url ="  https://jsonplaceholder.typicode.com/posts"  
const settings = { method : "post",
                    headers :{Accept :'application/json',
                    'Content-Type': 'application/json'},
                    body:JSON.stringify(this.state),
                  }
const res= await fetch(url,settings);
const posts = await res.json();
console.log(posts);                };

 render() {
    return (
        <form onSubmit={this.handlersubmit}>
            <h2> Lets update the data you enter here on server</h2>
            <label htmlFor='userid'>User Id :</label>
            <input className = 'input1' type='text' name ='userid' id='userid' placeholder='User ID' value= {this.state.userid} onChange={this.handlerevent}></input>
             <label htmlFor='title'>Title :</label>
            <input className='input1'type='text' id='title' name='title' placeholder='Title'value= {this.state.title} onChange={this.handlerevent}></input>
            <label htmlFor='body'>Decription :</label>
            <textarea className='input1'type='text' id='body'name='body' placeholder='Description'value= {this.state.body} onChange={this.handlerevent}></textarea>
            <button className='input1'type="submit" >Submit</button>

        </form>
      
    )
  }
}

export default Mypostapi