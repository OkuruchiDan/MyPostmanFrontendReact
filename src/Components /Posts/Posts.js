import React, {Component, useState} from "react";

export class Posts extends Component {

    render() {
        return(
            <div >
                {this.props.posts ? this.props.posts.map(post => <div style={{padding:"1rem 0rem 1rem 0rem"}}>
                    <div style={{float: "left" , width: "100%"}}>id: {post.id}</div>
                    <div style={{}}>postName: {post.postName}
                    <div>
                        userName: {post.userName}
                    </div></div>

                    <div style={{}}>description: {post.description}</div>
                    <div style={{}}>body: {post.body}</div>
                </div>) : " "}
            </div>
        )
    }
}