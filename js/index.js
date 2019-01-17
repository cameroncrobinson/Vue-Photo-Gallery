// const captionElem = document.getElementById('caption');
//
// if (captionElem = "") {
//   document.getElementById('capDiv').style.display = "none";
// }

const photoData = {
  image: 'https://droneandslr.com/wp-content/uploads/2016/06/tokyo-japan-52.jpg',
  caption: 'caption',
  altText:'el capitan',
};

let n = 0;

do {
      document.getElementById("image").src = photoData.image;
      document.getElementById('image').alt = photoData.altText;
      document.getElementById("desc").innerHTML = photoData.caption;
      n++;
    }
    while (n<photoData.image.length) {

    }
