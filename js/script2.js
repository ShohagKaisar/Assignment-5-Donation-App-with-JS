// 2nd Section Donation

const donateNowBtn2 = document.getElementById("donate-now-btn2");
const inputBox2 = document.getElementById("input-box2");

currentBalance2 = 0;

donateNowBtn2.addEventListener("click", () => {
  let numberValue = getNumber("input-box2");
  if (
    typeof numberValue == "number" &&
    0 < numberValue &&
    inputBox2.value < balance
  ) {
    currentBalance2 += numberValue;
    balance -= numberValue;
    document.getElementById("current-donation-amount2").innerText =
      currentBalance2;
    document.getElementById("main-balance").innerText = balance;
    inputBox2.value = "";
    donateNowBtn2.setAttribute("onclick", "my_modal_4.showModal()");
    my_modal_4.showModal();

    let time = Date();
    let history2 = `<div class="flex items-center px-16 gap-20 container mx-auto w-full border-2 rounded-xl h-fit">
            <div class="px-4">
              <p class="font-bold">${numberValue} taka is Donated for Flood Relief in Feni,Bangladesh</p>
              <p class="text-slate-500">${time}</p>
            </div>
      </div>`;
    historyInfoDiv.insertAdjacentHTML("beforeend", history2);
  } else {
    alert(
      "Please Input Legal Amount Only \n and \n Write Amount Bellow Main Balance"
    );
    inputBox2.value = "";
    donateNowBtn2.removeAttribute("onclick");
  }
});
