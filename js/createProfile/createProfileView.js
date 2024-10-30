function updateViewCreateProfile() {
  app.innerHTML = /*html*/ `
    <div class="container d-flex-row">
      <div class="d-flex-col">
        <input type="file" onchange="readFile(this)"/>
        <img id="profileImg" />
      </div>
      <div class="d-flex-col">
        ${drawInput()}
      </div>
    </div>
  `;
}

function createInput(type, placeholder, modelKey) {
  let html = "";
  html += /*html*/ `
    <input
      type="${type}"
      placeholder="${placeholder}"
      onchange="updateProfile('${modelKey}', this.value)"
    />
    `;
  return html;
}

function drawInput() {
  let html = "";
  const inputs = [
    { type: "text", placeholder: "Brukernavn", modelKey: "username" },
    { type: "text", placeholder: "Passord", modelKey: "pwd" },
    { type: "text", placeholder: "Repeter passord", modelKey: "repeatPwd" },
    { type: "text", placeholder: "Navn", modelKey: "name" },
    { type: "number", placeholder: "Alder", modelKey: "age" },
    { type: "text", placeholder: "By", modelKey: "city" },
    { type: "text", placeholder: "Interesser", modelKey: "interests" },
    { type: "text", placeholder: "Om meg", modelKey: "bio" },
  ];

  inputs.forEach((input) => {
    html += createInput(input.type, input.placeholder, input.modelKey);
  });

  html += /*html*/ `<button class="btn" onclick="addProfile()">Last opp profil</button>`;

  return html;
}
