const sezione = document.getElementById("sez");
const tabella = document.createElement("div");
tabella.classList.add("nuovaTab");

for (let i = 1; i < 77; i++) {
  const tabNum = document.createElement("div");
  tabNum.classList.add("new");
  tabNum.innerText = `${i}`;
  sezione.appendChild(tabNum);
}

const randomNum = function (e) {
  // const clickedButton = e.target;
  const numeroPescato = Math.ceil(Math.random() * 76);
  console.log(numeroPescato);
  const arraynumeri = document.querySelectorAll(".new");
  for (let i = 0; i < 76; i++) {
    if (parseInt(arraynumeri[i].innerText) === numeroPescato) {
      arraynumeri[i].classList.replace("new", "new2");
    }
  }
};
