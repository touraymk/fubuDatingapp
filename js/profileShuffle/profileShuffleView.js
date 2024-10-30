function updateViewProfileShuffle() {
  model.app.page = "profileShuffle";
  app.innerHTML = /*html*/ `
    <div class="m-b padding">
      ${createBtn("handleLogOut", "Logg ut")}
    </div>
    <div id="carouselContainer"></div>
  `;
  drawImgCarousel();
}

function drawImgCarousel() {
  const otherProfiles = model.profiles.filter(
    (p) => p.id !== model.app.loggedInUser
  );

  if (otherProfiles.length > 0) {
    let carouselIndex = 0;

    const displayImg = () => {
      if (otherProfiles[carouselIndex].albumImg.length > 0) {
        document.getElementById("carouselContainer").innerHTML = /*html*/ `
          <img src="${otherProfiles[carouselIndex].albumImg[0]}" alt="Profile image" id="profileImgCarousel"/>
        `;
      }

      //Ny profil
      carouselIndex++;
      if (carouselIndex >= otherProfiles.length) {
        carouselIndex = 0; //Starter karusellen på første profil som ikke er logget inn
      }
    };

    displayImg();
    setInterval(displayImg, 3500); //Endrer til ny profil hvert 4sec
  }
}
