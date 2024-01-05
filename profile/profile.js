"use strict";

// Imported functions
import { isLoggedIn, getLoginData, logout } from "../auth.js";

window.onload = () => {

    // If the user is not logged in, redirect to the home page
    if (!isLoggedIn()) {
        window.location.replace("/");
    }

    // Logout button variable
    let logoutBtn = document.getElementById('logout');
    // Event listener for the logout button
    logoutBtn.onclick = () => {
        console.log("Logout button clicked")
        logout();
    };

};

// Initialized variables
const createPostForm = document.getElementById('create-post-form');
const allPosts = document.getElementById('all-posts')


// Event handler for creating a new post
createPostForm.onsubmit = (e) => {
    e.preventDefault();
    let postText = document.getElementById('post-text').value;

    let postDataContent = {'text': postText};

    const loginData = getLoginData();

    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${loginData.token}`,
        },
        body: JSON.stringify(postDataContent)
    };

    fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts", options)
    .then((res) => res.json())
    .then((newPostData) => {

        // Formats date into: (MON DD, YYYY, 0:00 AM/PM)
        let date = new Date(newPostData.createdAt);
        let options = {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        };
        let formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

        let newPost = document.createElement('div');
        newPost.classList.add('container', 'd-flex', 'justify-content-center');

        newPost.innerHTML = 
        `<div class="card" style='width: 75%;'>
            <div class="card-body bg-dark text-white">
                <p class="card-title">${newPostData.username}</p>
                <p class="card-text">${newPostData.text}</p>
                <p class="card-text fw-lighter">${formattedDate}</p>
            </div>
        </div>`;
        console.log(allPosts)
        allPosts.prepend(newPost);
        console.log(newPostData);

    })
    .catch((err) => console.error('Error fetching posts:', err))


    createPostForm.reset();
};

function getAllPosts() {

    let profilePostsEl = document.getElementById('profile-posts');
    profilePostsEl.innerHTML = "<p>Loading posts...</p>";  // Display a loading message
  
    const loginData = getLoginData();
    const options = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${loginData.token}`,
        },
    };
  
    fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts?limit=100&offset=0&username=Berleezy", options)
        .then((res) => res.json())
        .then((posts) => {
            profilePostsEl.innerHTML = "";  // Clear the loading message
  
            if (posts.length === 0) {
                profilePostsEl.innerHTML = "<p>No posts available.</p>";  // Display a message for no posts
            } else {
                posts.forEach((post) => {
                    let postEl = document.createElement('div');
                    postEl.classList.add('card');
  
                    let usernameEl = document.createElement('div');
                    usernameEl.classList.add('username');
                    usernameEl.textContent = `${post.username}`;
  
                    let postTextEl = document.createElement('div');
                    postTextEl.classList.add('post-text');
                    postTextEl.textContent = post.text;
  
                    postEl.appendChild(usernameEl);
                    postEl.appendChild(postTextEl);
  
                    profilePostsEl.appendChild(postEl);
                });
            }
            console.log(posts);
        })
        .catch((err) => {
            console.error('Error fetching posts:', err);
            profilePostsEl.innerHTML = "<p>Error fetching posts.</p>";  // Display an error message
        });
  } getAllPosts()