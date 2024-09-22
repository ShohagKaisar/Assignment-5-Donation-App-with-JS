const donationBtn = document.getElementById("donation-btn");
const historyBtn = document.getElementById("history-btn");
const mainCardDiv = document.getElementById("main-card-div");

historyBtn.addEventListener("click", ()=>{
  historyBtn.classList.add("bg-lime-300")
  donationBtn.classList.remove("bg-lime-300")
  mainCardDiv.classList.add("hidden");

})
donationBtn.addEventListener("click", ()=>{
  historyBtn.classList.remove("bg-lime-300")
  donationBtn.classList.add("bg-lime-300")
  mainCardDiv.classList.remove("hidden");

})