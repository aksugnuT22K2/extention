let mainFunction = function() {
  alert(document.title);
};

const printArea = document.querySelector('#PrintBase');
let insertElement = document.createElement('input');
insertElement.type = 'button';
insertElement.classList.add('non_print');
insertElement.value = 'テスト';
insertElement.width = '4rem';
insertElement.style.marginLeft = '32.5rem';
document.body
  .insertBefore(insertElement, printArea)
  .addEventListener('click', function() {
    mainFunction();
  });

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if (request == 'Action') {
    mainFunction();
  }
});
