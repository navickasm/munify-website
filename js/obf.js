function startObfuscation(selector, interval = 100) {
  document.querySelectorAll(selector).forEach(element => {
    const originalText = element.dataset.original || element.innerText;

    if (!element.dataset.original) {
      element.dataset.original = originalText;
    }

    function obfuscate() {
      let obfuscatedText = Array.from(originalText).map(char => {
        if (char >= '0' && char <= '9') {
          return Math.floor(Math.random() * 10).toString();
        }
        return char.trim()
          ? String.fromCharCode(Math.floor(Math.random() * 26) + 65)
          : char;
      }).join('');

      element.innerText = obfuscatedText;
    }

    setInterval(obfuscate, interval);
  });
}

startObfuscation('.obf', 100);
