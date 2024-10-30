function updateViewLogIn() {
  app.innerHTML = /*html*/ `
    <div class="container">
      <input type="text" name="username" onchange="model.input.logIn.username=this.value" placeholder="Brukernavn"/>
      <input type="password" name="password" onchange="model.input.logIn.pwd=this.value" placeholder="Passord"/>
      ${createBtn("handleLogIn", "Logg inn")}
    </div>
  `;
}
