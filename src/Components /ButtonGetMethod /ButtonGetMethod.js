import React, {useState} from "react";
import {Posts} from "../Posts/Posts";

export const ButtonGetMethod = () => {
    const [ posts , setPosts] = useState();
    const url = "http://localhost:8080/posts";
    console.log(posts);

    function getMethod() {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                setPosts(result);
            })
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    }

    return (
        <div>
            <button onClick={() => getMethod()}>get</button>
            <Posts posts={posts}/>
        </div>

    )
}