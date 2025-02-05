function startObfuscation(selector, interval = 100, textPool = []) {
  document.querySelectorAll(selector).forEach(element => {
    const originalText = element.dataset.original || element.innerText;

    if (!element.dataset.original) {
      element.dataset.original = originalText;
    }

    let intervalId;

    function obfuscate() {
      let obfuscatedText;
      if (textPool.length > 0) {
        obfuscatedText = textPool[Math.floor(Math.random() * textPool.length)];
      } else {
        obfuscatedText = Array.from(originalText).map(char => {
          if (char >= '0' && char <= '9') {
            return Math.floor(Math.random() * 10).toString();
          }
          return char.trim()
            ? String.fromCharCode(Math.floor(Math.random() * 26) + 65)
            : char;
        }).join('');
      }

      element.innerText = obfuscatedText;
    }

    function handleResize() {
      if (window.matchMedia("(min-width: 900px)").matches) {
        if (!intervalId) {
          intervalId = setInterval(obfuscate, interval);
        }
      } else {
        clearInterval(intervalId);
        intervalId = null;
        element.innerText = originalText;
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);
  });
}

const textPool = [
  "The Role of the UN in Resolving the Kashmir Conflict",
  "The 2008 Financial Crisis",
  "The Rwandan Genocide",
  "The North Korean Nuclear Threat",
  "The 2011 Libyan Civil War",
  "The 2003 Iraq Invasion",
  "The Fallout of the Brexit Referendum",
  "The Paris Agreement and the US Withdrawal",
  "Rebuilding Post-Tsunami Japan",
  "The 1994 Bosnian War",
  "The Role of the UN during the Syrian Civil War",
  "The Russian Annexation of Crimea",
  "The Great Chinese Famine",
  "The Vietnam War",
  "The Legacy of Apartheid",
  "The Assassination of Archduke Franz Ferdinand",
  "The Cuban Revolution",
  "The Arab Spring",
  "The United States and the Iran Hostage Crisis",
  "The 1991 Gulf War",
  "The Suez Crisis of 1956",
  "The Berlin Wall",
  "The Cuban Missile Crisis",
  "The Balfour Declaration",
  "The Fall of the Soviet Union",
  "The Balkan Crisis of the 1990s",
  "The Atomic Bombing of Hiroshima and Nagasaki",
  "The Tiananmen Square Protests of 1989",
  "The Role of the UN in the Israeli-Palestinian Peace Process",
  "The End of Apartheid",
  "The 1979 Iranian Revolution",
  "The Battle for the Falkland Islands",
  "The Cambodia Genocide",
  "The 2007–2008 Global Financial Crisis",
  "The Attack on Pearl Harbor",
  "The Partition of India and Pakistan",
  "The Nuremberg Trials",
  "The 1980 Soviet Invasion of Afghanistan",
  "The End of the Cold War",
  "The 2014 Ukraine Revolution",
  "The 1967 Six-Day War",
  "The 1973 Oil Crisis",
  "The Assassination of JFK",
  "The Khmer Rouge",
  "The Enron Scandal",
  "The Battle of Dien Bien Phu",
  "The International Response to the Chernobyl Disaster",
  "The Iran-Contra Affair",
  "The 2010 Haiti Earthquake",
  "The NATO Bombing of Yugoslavia",
  "The Role of AI in Modern Warfare",
  "The Ethics of Space Exploration and Colonization",
  "Addressing Cybersecurity Threats to Global Stability",
  "The Impact of Climate-Induced Migration on National Borders",
  "The Role of Private Companies in Humanitarian Crises",
  "Regulating Autonomous Weapons Systems",
  "The Global Water Crisis and Its Implications for Security",
  "The Militarization of the Arctic",
  "The Rise of Cryptocurrencies and Their Effect on the Global Economy",
  "Preventing Biological Warfare in the 21st Century",
  "The Role of Emerging Economies in Shaping Global Governance",
  "The Impact of Media Manipulation on Political Stability",
  "Combatting the Proliferation of Deepfake Technology",
  "The Role of International Law in Regulating Space Debris",
  "Addressing Economic Disparities in Post-Pandemic Recovery",
  "The Consequences of Quantum Computing on Global Security",
  "Regulating the Use of Geoengineering to Combat Climate Change",
  "The Role of International Organizations in Preventing Pandemics",
  "Balancing Privacy and Surveillance in the Digital Age",
  "Revisiting Treaties for Nuclear Non-Proliferation",
  "The Global Implications of Rare Earth Mineral Trade Wars",
  "The Role of Artificial Intelligence in Humanitarian Operations",
  "Mitigating the Threat of Antibiotic Resistance on Global Health",
  "Addressing Inequality in Vaccine Distribution During Pandemics",
  "The Role of Mega-Cities in International Urban Policy",
  "The Impact of Social Media on Democratic Processes",
  "Combating Illegal Fishing in International Waters",
  "The Role of Hydrogen Technology in Decarbonizing the Global Economy",
  "Managing the Risks of Autonomous Drones in Conflict Zones"
];

startObfuscation('.obf', 50, textPool);
