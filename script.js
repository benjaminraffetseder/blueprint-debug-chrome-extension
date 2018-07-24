window.onload = () => {
    const styles = ['blueprint', 'night', 'light', 'reset'];
    styles.forEach((style) => {
        console.log(style);
        document.getElementById(style).onclick = () => {
            chrome.tabs.insertCSS({ file: 'smooth.css' });
            chrome.tabs.insertCSS({ file: `${style}.css` });
        }
    });
};