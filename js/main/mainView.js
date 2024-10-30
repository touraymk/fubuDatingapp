function updateViewMain() {
  app.innerHTML = /*html*/ `
    <div class="container">
      <h1>FuBu</h1>
      <p>For U - By Us</p>
      ${createBtn("updateViewLogIn", "Logg inn")}
      <small class="m-t">Ikke medlem? <span id="register-link" onclick="updateViewCreateProfile()">Registrer deg!</span></small>
    </div>
    <footer class="text-align padding">En datingapp for kvinner - laget av en mann</footer>
  `;
}
