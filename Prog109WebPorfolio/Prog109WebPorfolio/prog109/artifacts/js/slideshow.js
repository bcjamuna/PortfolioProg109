var listImages = ["http://www.animalfactsencyclopedia.com/images/animalextremeclose-up-dolphin.jpg",
  "http://cdn2.teen.com/wp-content/gallery/baby-dolphin-pictures/baby-dolphin-pictures-9.jpg",
  "http://newshour-tc.pbs.org/newshour/wp-content/uploads/2014/03/dolphin.jpg"];

var captionImage = ["Live", "Love", "Laugh"];


var i = 0;

//Way to assign the onclick action to a button

document.getElementById("next").onclick = Next;


window.setInterval(showImages, 2000);

function showImages() {
    if (document.getElementById("auto").checked) {
        if (i < captionImage.length) {
            document.getElementById("dolphin").src = listImages[i];
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

    document.getElementById("dolphin").src = listImages[i];
    document.getElementById("captions").textContent = captionImage[i];

}

























