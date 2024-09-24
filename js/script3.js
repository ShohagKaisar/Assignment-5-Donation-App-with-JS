// 2nd Section Donation

const donateNowBtn3 = document.getElementById("donate-now-btn3");
const inputBox3 = document.getElementById("input-box3");

currentBalance3 = 0;

donateNowBtn3.addEventListener("click", () => {
  let numberValue = getNumber("input-box3");
  if (
    typeof numberValue == "number" &&
    0 < numberValue &&
    inputBox3.value < balance
  ) {
    currentBalance3 += numberValue;
    balance -= numberValue;
    document.getElementById("current-donation-amount3").innerText =
      currentBalance3;
    document.getElementById("main-balance").innerText = balance;
    inputBox3.value = "";
    donateNowBtn3.setAttribute("onclick", "my_modal_3.showModal()");
    my_modal_3.showModal();

    let time = Date();
    let history3 = `<div class="flex items-center px-16 gap-20 container mx-auto w-full border-2 rounded-xl h-fit">
            <div class="px-4">
              <p class="font-bold">${numberValue} taka is Donated for Aid for Injured in the Quota Movement</p>
              <p class="text-slate-500">${time}</p>
            </div>
      </div>`;
    historyInfoDiv.insertAdjacentHTML("beforeend", history3);
  } else {
    alert(
      "Please Input Legal Amount Only \n and \n Write Amount Bellow Main Balance"
    );
    inputBox3.value = "";
    donateNowBtn3.removeAttribute("onclick");
  }
});
