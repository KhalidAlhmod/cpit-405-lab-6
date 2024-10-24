const initialLikes = 100;
const initialDislikes = 20;

let likesCount= initialLikes
let dislikesCount= initialDislikes
// Get all UI elements
const likesBtn = document.getElementById("LikeBtn")
const dislikesBtn = document.getElementById("DisLikeBtn")
const commentBox= document.getElementById("commentBox")
const submitBtn = document.getElementById("submit")
const clearBtn = document.getElementById("clear")
const commentsList = document.getElementById("commentList")

likesBtn.innerText = "👍"+ likesCount;
dislikesBtn.innerText="👎"+dislikesCount;
// Handle like btn
likesBtn.addEventListener("click", () =>{
likesCount ++;
likesBtn.innerText = "👍" +likesCount;
setCookie();
})
// Handle dislike btn
dislikesBtn.addEventListener("click", () =>{
    dislikesCount++;
dislikesBtn.innerText = "👎"+dislikesCount;
setCookie();
})


// handle submit a comment
submitBtn.addEventListener("click", () => {
    // create a <p>
    const pElem = document.createElement("p");
    pElem.innerText = commentBox.value.trim();
    commentsList.appendChild(pElem)
    commentBox.value = "";
    setCookie();
    })
    // handle clear
    clearBtn.addEventListener("click",() =>{
        commentBox.value ="";
        document.cookie= "voted=true; path=/; expires=" + new Date(Date.now()-1).toUTCString();
        console.log("cookie cleared")
    })

    function setCookie() {
        // Set a cookie that expires in a minute from now
        const expireon= new Date(Date.now() + 1* 60 * 1000);
        const cookieString = "voted=true; path=/; expires=" + expireon.toUTCString();
        document.cookie =cookieString;
        }
        // check for cookies when the page is loading
        window.onload = function () {
        if (document.cookie && document.cookie.indexOf("voted") -1) {
        console.log("cookie exists")
        // disable all buttons
        likesBtn.disabled = true;
        dislikesBtn.disabled = true;
        submitBtn.disabled = true;
        }
        }