const URL = "https://cat-fact.herokuapp.com/facts";
const paraFact = document.querySelector(".fact");
const button = document.querySelector(".btn");

// const getsFetch = async () => {
//   console.log("getting data...");
//   let responce = await fetch(URL);
//   let data = await responce.json();
//   console.log(responce);
//   paraFact.innerHTML = data[0].text;
// };

/**************************************
 * by promise
 */
function getsFetch() {
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      paraFact.innerHTML = data[2].text;
    });
}
button.addEventListener("click", getsFetch);
