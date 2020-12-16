import React, { Component } from 'react';

class CommentDetail extends Component {
    render() {
        return (
            <div>
                <a href="/"> {this.props.author} </a>
                <div>{this.props.time}</div>
                <div>Nice blog post {this.props.author}!</div>
            </div>
        )
    }
}

export default CommentDetail