browser.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.command === 'toggleSpeed') {
    browser.tabs.sendMessage(sender.tab.id, { command: 'toggleSpeed' });
  }
});

