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
//
// let n = 0;
//
// do {
//   if (photoData != null && photoData.altText != null)
//       document.getElementById("image").src = photoData.image;
//       document.getElementById('image').alt = photoData.altText;
//       document.getElementById("desc").innerHTML = photoData.caption;
//       n++;
//
//       if (photoData.caption != null)
//         document.getElementById("desc").style.display = "none";
//
//     }
//     while (n<photoData.image.length);

if (photoData.clientHeight > photoData.clientWidth){
  document.getElementsByClassName('gallery-image').style =`
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 6;`
}
else {
  ocument.getElementsByClassName('gallery-image').style =`
   grid-column-start: 5;
   grid-column-end: 9;
   grid-row-start: 1;
   grid-row-end: 6;`
}
