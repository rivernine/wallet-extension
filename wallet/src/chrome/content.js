const messagesFromReactAppListener = (message, sender, response) => {
  console.log('[content.js]. Message received', {
    message, sender,
  })

  if (sender.id === chrome.runtime.id &&
    message.from === 'React' &&
    message.message === "Hello from React") {
    response("Hello from content.js");
  }

  if (sender.id === chrome.runtime.id &&
    message.from === 'React' &&
    message.message === "delete logo") {
    const logo = document.getElementsByClassName('lnXdpd')[0];
    logo.parentElement.removeChild(logo)
  }
}

chrome.runtime.onMessage.addListener(messagesFromReactAppListener)