//メイン
/* let mainFunction = () => {
  alert(document.title);
}; */

//google fonts読み込み
let fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css?family=Libre+Barcode+39+Text";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

//ボタン追加
let printArea = document.querySelectorAll("[id=PrintBase");
/* let insertElement = document.createElement("input");
insertElement.type = "button";
insertElement.classList.add("non_print");
insertElement.classList.add("run_btn");
insertElement.value = "テスト";
document.body
  .insertBefore(insertElement, printArea[0])
  .addEventListener("click", function() {
    mainFunction();
  }); */

//バーコード追加
printArea.forEach(element => {
  let barcode = document.createElement("div");
  barcode.classList.add("barcode");
  let orderNo = document.createElement("p");
  orderNo.innerText = element.innerText.match(/注文番号\s*(\d+)\s/)[1];
  barcode.appendChild(orderNo);
  element.appendChild(barcode);
});

/* chrome.extension.onMessage.addListener((request, sender, sendResponse) => {
  if (request == "Action") {
    mainFunction();
  }
}); */
