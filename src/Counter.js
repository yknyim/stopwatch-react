import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super (props);
        this.state = {
            start: false,
            second: 0,
            minute: 0,
            hour: 0
        };
    }

    render() {
        return (
        <div>
            <h2>Elapsed Time</h2>
            <h1>{this.state.hour} hr : {this.state.minute} min : {this.state.second} sec</h1>
            <button 
                onClick={this._startTimer}
                disabled={this.state.start}
            >Start</button>
            <button onClick={this._stopTimer}>Stop</button>
            <button onClick={this._resetTimer}>Reset</button>
        </div>
        )
    }

    startTime;

    _startTimer = () => {
        this.setState({
            start: true,
        });
        this.startTime = setInterval((this._incrementTimer), 1000);
    }

    _incrementTimer = () => {
        this.setState({
            second: this.state.second + 1
        });
    }

    _stopTimer = () => {
        this.setState({
            start: false,
            second: this.state.second
        });
        clearInterval(this.startTime);
    }

    _resetTimer = () => {
        this.setState({
            start: false,
            second: this.state.second = 0
        })
    }

    componentDidMount() {
        if (this.state.second === 60) {
            this.setState({
                minute: this.state.minute + 1
            });
        }
    }

}

export default Counter
