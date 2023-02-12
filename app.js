const operatorSelect = document.getElementById("operator-select");
const taskSelect = document.getElementById("task-select");
const codeTextarea = document.getElementById("code");

operatorSelect.addEventListener("change", updateCode);
taskSelect.addEventListener("change", updateCode);

function updateCode() {
  const operator = operatorSelect.value;
  const task = taskSelect.value;

  let code = "";
  let description = "";

  if (operator === "Mobilis") {
    switch (task) {
      case "phone-number":
        code = "*101#";
        description = "Dial *101# to get your Mobilis phone number.";
        break;
      case "check-balance":
        code = "*222#";
        description = "Dial *222# to check your Mobilis balance.";
        break;
      case "services-portal":
        code = "*600#";
        description = "Dial *600# to access Mobilis services portal.";
        break;
      case "call-me":
        code = "*606*num#";
        description = "Dial *606*num# to call your Mobilis prepaid line to your prepaid and postpaid correspondents if your balance is not enough.";
        break;
      case "send-credit":
        code = "*610*num*amount#";
        description = "Dial *610*num*amount# to send credit to a friend.";
        break;
      case "hide-number":
        code = "#31#num";
        description = "Dial #31#num to hide your number.";
        break;
      default:
        break;
    }
  } else if (operator === "Ooredoo") {
    switch (task) {
      case "phone-number":
        code = "*113*1*1#";
        description = "Dial *113*1*1# to get your Ooredoo phone number.";
        break;
      case "check-balance":
        code = "*200#";
        description = "Dial *200# to check your Ooredoo balance.";
        break;
      case "services-portal":
        code = "*113#";
        description = "Dial *113# to access Ooredoo services portal.";
        break;
      case "call-me":
        code = "*444*1*num#";
        description = "Dial *444*1*num# to call your Ooredoo prepaid line to your prepaid and postpaid correspondents if your balance is not enough.";
        break;
      case "send-credit":
        code = "*115*num*amount#";
        description = "Dial *115*num*amount# to send credit to a friend.";
        break;
      case "hide-number":
        code = "#31#num";
        description = "Dial #31#num to hide your number.";
        break;
      default:
        break;
    }
  } else if (operator === "Djezzy") {
    switch (task) {
      case "phone-number":
        code = "*99#";
        description = "Dial *99# to get your Djezzy phone number.";
        break;
      case "check-balance":
        code = "*710#";
        description = "Dial *710# to check your Djezzy balance.";
        break;
      case "services-portal":
        code = "*700#";
        description = "Dial *700# to access Djezzy services portal.";
        break;
      case "call-me":
        code = "*100*2*num#";
        description = "Dial *100*2*num# to call your Djezzy prepaid line to your prepaid and postpaid correspondents if your balance is not enough.";
        break;
      case "send-credit":
        code = "*710*num*amount#";
        description = "Dial *710*num*amount# to send credit to a friend.";
        break;
      case "hide-number":
        code = "#31#num";
        description = "Dial #31#num to hide your number.";
        break;
      default:
        break;
    }
  }

  codeTextarea.value = `${code}\n\n${description}`;
}

mermaid.initialize({startOnLoad:true});
