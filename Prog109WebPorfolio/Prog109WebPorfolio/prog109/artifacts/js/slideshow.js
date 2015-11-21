var listImages = ["https://d1tijy5l7mg5kk.cloudfront.net/assets/custom/review/2014/2014-javascript-road-trip-part-1-e04efc79c465b890f6b9680abf3f44b5.png",
  "http://www.ginger-cookielaw.com/wp-content/uploads/2015/07/js-logo-badge-512.png",
   "http://localhost:64688/../../images/looping.png",
    "https://achievement-images.teamtreehouse.com/javascript-loops-stage3.png",
"https://assets-cdn.github.com/images/modules/logos_page/Octocat.png"];
   

var captionImage = ["CSS 3 & HTML 5", "JavaScript", "Web Development", "JavaScript Loops", "GitHub"];


var i = 0;

//Way to assign the onclick action to a button

document.getElementById("next").onclick = Next;
document.getElementById("previous").onclick = Previous;

window.setInterval(showImages, 2000);

function showImages() {
    if (document.getElementById("auto").checked) {
        if (i < captionImage.length) {
            document.getElementById("htmlcss").src = listImages[i];
            document.getElementById("captions").textContent = captionImage[i];
            i++;
        }
        else
            i = 0;
    }
}

//Next function

function Next() {
    if (i < captionImage.length - 1)
        i++;
    else
        i = 0;

    document.getElementById("htmlcss").src = listImages[i];
    document.getElementById("captions").textContent = captionImage[i];

}


//Previous function

function Previous() {
    if (i > 0)
        i--;
    else
        i = 4;

    document.getElementById("htmlcss").src = listImages[i];
    document.getElementById("captions").textContent = captionImage[i];

}























