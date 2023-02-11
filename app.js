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
        code = "*111#";
        description = "Dial *111# to get your Mobilis phone number.";
        break;
      case "check-balance":
        code = "*112#";
        description = "Dial *112# to check your Mobilis balance.";
        break;
      case "services-portal":        code = "*123#";
        description = "Dial *123# to access Mobilis services portal.";
        break;
      default:
        break;
    }
  } else if (operator === "Ooredoo") {
    switch (task) {
      case "phone-number":
        code = "*121#";
        description = "Dial *121# to get your Ooredoo phone number.";
        break;
      case "check-balance":
        code = "*100#";
        description = "Dial *100# to check your Ooredoo balance.";
        break;
      case "services-portal":
        code = "*222#";
        description = "Dial *222# to access Ooredoo services portal.";
        break;
      default:
        break;
    }
  } else if (operator === "Djezzy") {
    switch (task) {
      case "phone-number":
        code = "*888#";
        description = "Dial *888# to get your Djezzy phone number.";
        break;
      case "check-balance":
        code = "*124#";
        description = "Dial *124# to check your Djezzy balance.";
        break;
      case "services-portal":
        code = "*550#";
        description = "Dial *550# to access Djezzy services portal.";
        break;
      default:
        break;
    }
  }

  codeTextarea.value = `${code}\n\n${description}`;
}
