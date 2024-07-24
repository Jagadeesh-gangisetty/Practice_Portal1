import React, { Component } from 'react'

export class F extends Component {
    constructor() {
        super()
        this.state = {
            u:'',
            p:''
        }
    }
    us(event)
    {
        this.setState({u:event.target.value})
    }
    pa(event)
    {
        this.setState({p:event.target.value})
    }
    
    render() {
    return (
      <div>
        <form onSubmit = {() =>this.s()}>
            <div>
                <label>Username: </label>
                <input type="text" value = {this.state.u} onChange = {(event) =>this.us(event)}/><br></br>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value = {this.state.p} onChange = {(event) =>this.pa(event)}/><br></br>
            </div>
            <button>submit</button>
        </form>
        <div>{`${this.state.u} ${this.state.p}`}</div>
      </div>
    )
  }
}

export default F
