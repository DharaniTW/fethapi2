const cat_btn = document.getElementById("cat_btn");
const cat_result = document.getElementById("cat_result");
cat_btn.addEventListener("click", getRandomCat);
function getRandomCat() {
  fetch("https://aws.random.cat/meow")
    .then((response) => response.json())
    .then((data) => {
      cat_result.innerHTML = `<img src=${data.file} width="300px height="350px"> `;
    });
}
