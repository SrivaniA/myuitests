/ * Press enter text and click "Enter" keyboard strokes* /

let textToEnter = 'text to be entered';
await $(elemfinder).sendKeys(textToEnter);
await $(elemfinder).sendKeys(protractor.Key.ENTER);

