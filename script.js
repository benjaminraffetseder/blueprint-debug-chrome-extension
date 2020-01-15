window.onload = () => {
  const styles = ["blueprint", "night", "light", "reset"];
  styles.forEach(style => {
    document.getElementById(style).onclick = () => {
      chrome.tabs.insertCSS({ file: `styles/${style}.css` });
    };
  });
};
