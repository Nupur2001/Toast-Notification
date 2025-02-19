document.addEventListener("DOMContentLoaded", () => {
  let btn = document.querySelector("button");
  let toasts = document.querySelector(".toasts");

  btn.addEventListener("click", () => {
    let mesgArr = ["Message1", "Message2", "Message3"];
    let diffMsg = ["toastSuccess", "toastError", "toastInfo"];

    let randomMessageArray =
      mesgArr[Math.floor(Math.random() * mesgArr.length)];
    let randomDiff = diffMsg[Math.floor(Math.random() * diffMsg.length)];
    console.log(randomMessageArray);
    console.log(randomDiff);

    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.classList.add(randomDiff);

    toasts.appendChild(toast);
    toast.innerHTML = randomMessageArray;
  });
});
