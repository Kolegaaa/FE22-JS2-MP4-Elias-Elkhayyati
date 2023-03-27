
//När "DOMContentLoaded" (Websidans innehåll har laddats upp) kör då funktionen
// Tilldelar 4 variabler "Display" letar efter det första HTML-elementet på sidan med klassen 'display' och as HTMLDivElement gör en typomvandling till HTMLDivElement.
// Dom andra är bara tomma strängar som sen ska användas när man matar siffror eller operation(+,*,-,/)
//Sen en boolean som ändras med hur användaren klickar

document.addEventListener('DOMContentLoaded', () => {
  const display = document.querySelector('.display') as HTMLDivElement;
  let operation:string = '';
  let firstOperand:string = '';
  let secondOperand:string = '';
  let calculating:boolean = false;

   // Här hämtar vi alla knappar och loopar igenom dom
  document.querySelectorAll('button').forEach(button => {
    
    // Här skapar vi en addventlistner så när man clickar kommer funktionen efter att köras
    button.addEventListener('click', () => {
      const value: string | null = button.textContent 
      // Om 'value' är 'null' eller en tom sträng går vi in i detta
      if (!value) {
        // Om 'value' är 'null' eller en tom sträng avbryter vi funktionen och går inte vidare.
        return;
      }
      
      //om 'value' är en siffra eller en punkt (decimaltecken) lärad mig att /\d/ är siffra så går vi in i detta
      if (/\d/.test(value) || value === '.') {

        //Om variabeln 'calculating' är 'true', går vi in i detta 
        if (calculating) {
          //Om 'calculating' är 'true', lägger vi till 'value' till strängen 'secondOperand'.
          secondOperand += value;
          display.textContent = secondOperand;
        } 
        //Om calculating-variabeln är false, går vi in i detta
        else {
          //Eftersom calculating är false, lägger vi till value (knappens textinnehåll) till firstOperand. Detta bygger upp det första talet som användaren matar in.
          firstOperand += value;
          display.textContent = firstOperand;
        }
      } 
      // om value har någon av dessa operation i arrayn vi använder .includes()-metoden på en array med dessa 
      //går vi in i detta
      else if (['+', '-', '*', '/'].includes(value)) {
        //tilldelar vi operation-variabeln värdet av value. Det betyder att operation kommer att lagra den operation som användaren har valt.
        //Efter att användaren har valt en operation sätter vi calculating-variabeln till true. Detta gör att vi nu befinner oss i det andra momentet där vi ska bygga upp secondOperand istället för firstOperand.
        operation = value;
        calculating = true;
      } else if (value === '=') {

        //Här kontrollerar vi om alla tre variabler firstOperand, secondOperand och operation har värden 
        if (firstOperand && secondOperand && operation) {

          // Innan vi skickar operanderna till funktionen, konverterar vi dem från strängar till tal med parseFloat().   sen konverterar vi resultatet tillbaka till en sträng med .toString() och uppdaterar texten i display
          display.textContent = calculate(parseFloat(firstOperand), parseFloat(secondOperand), operation).toString();
          firstOperand = '';
          secondOperand = '';
          operation = '';
          calculating = false;
        }
      }
      // Om Användaren klickar på C så skall allting rensas från display
      if (value === "C"){
        display.textContent = "";
        firstOperand = '';
        secondOperand = '';
        operation = '';
      }
    });
  });
   

  //funktion som tar in tre parametrar: två tal (a och b) och en sträng (op)
  //Funktionen använder en switch-sats för att avgöra vilken operation som ska utföras baserat på värdet av op
  function calculate(a: number, b: number, op: string): number {
    switch (op) {
      case '+': // Om op är '+', adderas a och b och resultatet returneras.
        return a + b;
      case '-': //Om op är '-', subtraheras b från a och resultatet returneras.
        return a - b;
      case '*': //Om op är '*', multipliceras a och b och resultatet returneras.
        return a * b;
      case '/': //Om op är '/', divideras a med b och resultatet returneras.
        return a / b;
      default: // Om op inte matchar någon av de angivna operationerna, returneras 0 som standardvärde.
        return 0;
    }
  }
});


