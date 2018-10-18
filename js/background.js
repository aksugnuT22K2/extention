/* chrome.contextMenus.create({
  title: 'barcord',
  id: 'barcord',
  contexts: ['page'],
  type: 'normal'
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === 'barcord') smAction(tab);
});
chrome.browserAction.onClicked.addListener(function(tab) {
  smAction(tab);
});
function smAction(tab) {
  chrome.tabs.sendMessage(tab.id, 'Action');
} */
