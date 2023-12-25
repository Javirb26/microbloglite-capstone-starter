/* Posts Page JavaScript 

    prevent access to page unless visitor is logged in

    provide link to profile page

    include logoutBtn
        logout() function in auth.js
    
    

*/
"use strict";
import {logout } from "../auth.js";

window.onload = () => {
    // logout button variable
    let logoutBtn = document.getElementById('logout-btn');
    logoutBtn.onclick = () =>{
        logout();
    }
    // create post variables
    let createPostForm = document.getElementById('create-post-form');
    let postText = document.getElementById('post-text');
    let postSubmit = document.getElementById('post-submit');
    // display post variables
    let allPosts = document.getElementById('all-posts');

    
}

// let getAllPosts = () => {
    
// }
