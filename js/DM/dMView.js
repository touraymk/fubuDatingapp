function updateViewDM() {
  app.innerHTML = /*html*/ `
  <div class="m-b padding">
    ${createBtn("updateViewProfile", "Tilbake")}
  </div>
    <div class="container">
      <div class="dm-container">
        ${sendMessage()}
      </div>
      <input type="text" id="dMField" onchange="model.input.DM.usermessage=this.value"/>
      ${createBtn("sendMessage", "Send")}
    </div>
  `;
}

function drawSendMessage() {}

function drawRecivedMessage() {}

function sendMessage() {}
