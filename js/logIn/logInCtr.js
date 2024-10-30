function handleLogIn() {
  var userInput = model.input.logIn.username;
  var userPwd = model.input.logIn.pwd;

  const user = model.profiles.find(
    (profiles) => profiles.username === userInput && profiles.pwd === userPwd
  );
  if (!userInput || !userPwd) {
    alert("Vennligst fyll inn begge felter");
  }
  if (user) {
    model.app.loggedInUserId = user.id;
    model.app.isLoggedIn = true;
    user.isLoggedIn = true;
    userInput = "";
    userPwd = "";
    updateViewProfile();
  } else {
    alert("Feil brukernavn eller passord");
  }
  console.log("Innlogget bruker id: ", user.id);
  console.table("Innlogget brukerprofil: ", user);
}
