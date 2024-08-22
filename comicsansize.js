normalcursor = browser.runtime.getURL('curs/normal.cur');
pointercursor = browser.runtime.getURL('curs/pointer.cur');

function makesomemagic() {

  //replace xdddd
  for (let i = 0; i < document.styleSheets.length; i++) {
    try {
      let sheet = document.styleSheets[i];
      for (let j = 0; j < sheet.cssRules.length; j++) {
        let rule = sheet.cssRules[j];
        if (rule.style) {
          if (rule.style.fontFamily) {
            rule.style.fontFamily = 'Comic Sans MS, sans-serif';
          }
          rule.style.cursor = "url("+normalcursor+") 0 0, default !important;";
        }
      }
    } catch (e) {
      //fuck exceptions
      continue;
    }
  }
}

makesomemagic();


//function observeDomChanges() {
//  makesomemagic();

  //   const observer = new MutationObserver((mutations) => {
  //     mutations.forEach(() => {
  //       makesomemagic();
  //     });
  //   });

  //   observer.observe(document.body, { childList: true, subtree: true });
  // }

  // observeDomChanges();
