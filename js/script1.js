const donationBtn = document.getElementById("donation-btn");
const historyBtn = document.getElementById("history-btn");
const mainCardDiv = document.getElementById("main-card-div");
const historyInfoDiv = document.getElementById("history-nfo-div");

// Donation btn & Hisport Btn Functionality
historyBtn.addEventListener("click", () => {
  historyBtn.classList.add("bg-lime-300");
  donationBtn.classList.remove("bg-lime-300");
  mainCardDiv.classList.add("hidden");
  historyInfoDiv.classList.remove("hidden");
});
donationBtn.addEventListener("click", () => {
  historyBtn.classList.remove("bg-lime-300");
  donationBtn.classList.add("bg-lime-300");
  mainCardDiv.classList.remove("hidden");
  historyInfoDiv.classList.add("hidden");
});

// 1st Section Donation
const donateNowBtn = document.getElementById("donate-now-btn");
const inputBox = document.getElementById("input-box");

let currentBalance = 0;
let balance = 10000;

donateNowBtn.addEventListener("click", () => {
  let numberValue = getNumber("input-box");
  // console.log(typeof numberValue);
  if (
    typeof numberValue == "number" &&
    0 < numberValue &&
    inputBox.value < balance
  ) {
    currentBalance += numberValue;
    balance -= numberValue;
    document.getElementById("current-donation-amount").innerText =
      currentBalance;
    document.getElementById("main-balance").innerText = balance;
    inputBox.value = "";
    donateNowBtn.setAttribute("onclick", "my_modal_5.showModal()");
    my_modal_5.showModal();

    // Add Histoy Part
    let time = Date();
    let history = `<div class="flex items-center px-16 gap-20  container mx-auto w-full h-20 border-2 rounded-xl">
            <div>
              <p class="font-bold">${numberValue} taka is Donated for Flood at Noakhali, Bangladesh</p>
              <p class="text-slate-500">${time}</p>
            </div>
      </div>`;
    historyInfoDiv.insertAdjacentHTML('beforeend', history)
  } else {
    alert(
      "Please Input Legal Amount Only \n and \n Write Amount Bellow Main Balance"
    );
    inputBox.value = "";
    donateNowBtn.removeAttribute("onclick");
  }
});

// Reusable Function for Conver Input valur string to number.
function getNumber(id) {
  let catchId = Number(document.getElementById(id).value);
  return catchId;
}

const blogBtn = document.getElementById("blog-btn");
blogBtn.addEventListener("click", () => {
  window.location.href = "./blog.html";
});
