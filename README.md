<img src='/images/Y_logo_light.svg' width='50px'>

# Y

Y allows users to register, login, logout, make post, "delete all post", and view their own profiles. Y is better than X so register while you can.

## Home/Login Page

- This is the login and landing page, it shows the creators and shows the functionality of the show password checkbox.

<img src="/images/home_Page.gif">

## Register Page

- The register page allows you to input the information needed and it will redirect you to the login page. If you need to see your password you can view it.

<img src="/images/register_Page.gif">

## Post Page

- Once you login in, you will be redirected to this page and you will be able to create a new post that will display instantly. You can also see what other users have posted.

<img src="/images/post_Page.gif">

## Logging Out

- Log out button works as intented

<img src="/images/log_Out.gif">

## Code Hall of Fame

<b>Carlos M</b> - <i>This code is very interesting because we found out that when using import that there can be no onclick or onchange in the HTML it all needs to be done within JavaScript in order for it to work properly. This is due to the `type="module"`.</i>

```JS
  import { addRandomY } from "../auth.js";

  function togglePasswordVisibility() {
  let passwordInput = document.getElementById("password");
  let showPasswordCheckbox = document.getElementById("showpasswordcheckbox");

  passwordInput.type = showPasswordCheckbox.checked ? "text" : "password";
}
  window.onload = () => {
  addRandomY();

  let registerButton = document.getElementById("registerButton");
  registerButton.addEventListener("click", registerUser);

  let showPasswordCheckbox = document.getElementById("showpasswordcheckbox");
  showPasswordCheckbox.addEventListener("change", togglePasswordVisibility);
};
```

<b>Javier B</b> - <i>"My favorite piece of code has to be the 'random' sentence that appears in the footer when you refresh. Although the script is pretty simple I like the small touch it adds not only to the design but, to the brand as well".</i>

```JS
let listOfYs = [
    "Yodeling yetis yanked your yogurt yesterday.",
    "Yummy yaks yawned, yelling 'Yoohoo!'",
    "Yellow yak yoga yields youthful yodels.",
    "Yikes! Yapping yellow yahoos yodel!",
    "Yogurt-loving yeti yells 'Yum!' in yoga class."
]

// function to 'randomly' add a string from listOfYs array to footer
let addRandomY = () =>{
    let randomNum = Math.floor(Math.random() * 5)
    randomY.innerHTML = listOfYs[randomNum];
}
```

<b>Amaris S</b> - <i>This is my favorite code because at first I didn't think to put the posts I created on my profile page so instead I made fake posts. So after getting the idea from a fellow trainee and tweaking the code to fit my page seeing every new post I make pop on the profile page is super cool.</i>

```JS
function getAllPosts() {

    let profilePostsEl = document.getElementById('profile-posts');
    profilePostsEl.innerHTML = "<p>Loading posts...</p>";  // Display a loading message

    const loginData = getLoginData();
    const options = {
        method: "GET",
        headers: {
            Authorization: Bearer ${loginData.token},
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
                    usernameEl.textContent = ${post.username};

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
```

## Documentation
- <a href="http://microbloglite.us-east-2.elasticbeanstalk.com/docs/">MicroblogLite API Docs<s/a>

## Authors

- [@Javier B](https://www.github.com/Javirb26)
- [@Carlos M](https://www.github.com/tacostrash)
- [@Amaris S](https://www.github.com/AmarisNichole)