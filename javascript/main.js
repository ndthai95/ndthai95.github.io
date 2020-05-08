//dojobs
// let cookingRice = resolve => {
//   console.log("Start cookin rice");
//   setTimeout(() => {
//     resolve({status: true, des: 'Done cooking rice'})
//   }, 1000)
// }

// let cookingSoup = resolve => {
//   console.log("Done cookin rice");
//   console.log("Start cookin soup");
//   setTimeout(() => {
//     resolve({status: true, des: 'Done cooking soup'})
//   }, 1000)
// }

// let cookingFish = resolve => {
//   console.log("Done cookin soup");
//   console.log("Start cookin fish");
//   setTimeout(() => {
//     resolve({status: true, des: 'Done cooking fish'})
//   }, 1000)
// }

// var p = new Promise(cookingRice);
// p.then(data => {
//   console.log(data);
//   return new Promise(cookingSoup);
// }).then(data => {
//   console.log(data);
//   return new Promise(cookingFish);
// }).then(data => {
//   console.log(data);
// })

//Mocky API
var url = "https://www.mocky.io/v2/5185415ba171ea3a00704eed";
//----- js
// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       // Typical action to be performed when the document is ready:
//       // document.getElementById("demo").innerHTML = xhttp.responseText;
//       console.log(this.responseText);
      
//     }
// };
// xhttp.open("GET", url, true);
// xhttp.send();

//----- fetch
// async function requestAPI(url){
//   const response = fetch(url)
//   const data = await response
//   const myJson = await data.json()
//   console.log(myJson);
// }
// requestAPI(url);

//----- promise
// function requestAPIXml(url) {
//   return new Promise((resolve, reject) => {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//           resolve(this.responseText);
//         }
//     };
//     xhttp.open("GET", url, true);
//     xhttp.send();
//   });
// }
// const pData = requestAPIXml(url);
// pData.then((data) => {
//   console.log(data);
  
// })