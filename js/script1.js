const donationBtn = document.getElementById("donation-btn");
const historyBtn = document.getElementById("history-btn");
const mainCardDiv = document.getElementById("main-card-div");
const historyInfoDiv = document.getElementById("history-nfo-div");


// Donation btn & Hisport Btn Functionality
historyBtn.addEventListener("click", ()=>{
  historyBtn.classList.add("bg-lime-300");
  donationBtn.classList.remove("bg-lime-300");
  mainCardDiv.classList.add("hidden");
  historyInfoDiv.classList.remove("hidden");
})
donationBtn.addEventListener("click", ()=>{
  historyBtn.classList.remove("bg-lime-300");
  donationBtn.classList.add("bg-lime-300");
  mainCardDiv.classList.remove("hidden");
  historyInfoDiv.classList.add("hidden");
})

const mainBalance = Number(document.getElementById("main-balance").innerText);
const currentDonationAmount = Number(document.getElementById("current-donation-amount").innerText);
const donateNowBtn = document.getElementById("donate-now-btn");
const inputBox = document.getElementById("input-box");

let currentBalance = 0;
let balance = 10000;

donateNowBtn.addEventListener("click", ()=>{
  let numberValue = Number(inputBox.value);
  // console.log(typeof numberValue);
if(typeof numberValue == "number" && 0 < numberValue){
currentBalance += numberValue;
balance -= numberValue;
document.getElementById("current-donation-amount").innerText = currentBalance;
document.getElementById("main-balance").innerText = balance;
inputBox.value = "";
}else{
  // document.getElementById("my_modal_5").classList.add("hidden");
  // document.getElementById("my_modal_5").remove();
  alert("please Input The Number Only");
  inputBox.value = "";
}
})