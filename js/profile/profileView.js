function updateViewProfile() {
  app.innerHTML = /*html*/ `
    <div class="m-b padding">
    ${createBtn("updateViewMain", "Tilbake")}
    ${createBtn("handleLogOut", "Logg ut")}
    ${createBtn("updateViewProfileShuffle", "Finn en date")}
    </div>
    <div class="profile-container d-flex-row">
      <div class="img-container">
        ${drawImg()}
        </div>
        <div class="profile-info">
         ${drawProfileInfo()}
         ${createBtn("updateViewDM", "Meldinger")}
         </div>
         ${drawBio()}
    </div>
  `;
}

function handleLogOut() {
  model.app.isLoggedIn = false;
  model.app.loggedInUserId = null;
  updateViewMain();
}

function drawBio(i) {
  let html = "";
  const loggedInUserId = model.app.loggedInUserId;

  if (loggedInUserId !== undefined) {
    const profile = model.profiles.find((p) => p.id === loggedInUserId);

    if (profile && profile.isLoggedIn === true)
      html += /*html*/ `

    <p>Om meg: <br/><br/>${profile.bio}</p>
  `;
  } else {
    return /*html*/ `<p>Finner ikke profil</p>`;
  }
  return html;
}

function drawProfileInfo(i) {
  let html = /*html*/ `<ul>`;
  const loggedInUserId = model.app.loggedInUserId;

  if (loggedInUserId !== undefined) {
    const profiles = model.profiles.find((p) => p.id === loggedInUserId);
    if (profiles && profiles.isLoggedIn === true) {
      html += /*html*/ `
        <small>
          <li>Navn: ${profiles.name}</li>
          <li>Alder: ${profiles.age} år</li>
          <li>By: ${profiles.location}</li>
        </small>
      `;
    }
  }
  html += /*html*/ `</ul>`;
  return html;
}

function drawImg() {
  let html = "";
  const loggedInUserId = model.app.loggedInUserId;

  if (loggedInUserId !== undefined) {
    const profiles = model.profiles.find((p) => p.id === loggedInUserId);
    if (profiles) {
      if (profiles.albumImg.length > 0) {
        html += /*html*/ ` 
    <img class="profile-img" src="${profiles.albumImg[0]}" alt="${profiles.name}"/>
    `;
      }

      html += /*html*/ `<div class="small-img-container">`;
      for (let i = 1; i < profiles.albumImg.length; i++) {
        html += /*html*/ `
    <img class="small-img" src="${profiles.albumImg[i]}" alt="${profiles.name}"/>
    `;
      }
    }
  }
  html += /*html*/ `</div>`;

  return html;
}
