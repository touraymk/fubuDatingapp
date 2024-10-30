function updateProfile(key, value) {
  model.input.profiles[key] = value;
}

function addProfile() {
  const { username, pwd, repeatPwd, name, age, city, interests, bio } =
    model.input.profiles;

  if (username && pwd && name && age && city && bio) {
    if (pwd !== repeatPwd) {
      console.warn("Passordene matcher ikke");
      alert("Passordene matcher ikke!");
      return;
    }
    updateViewLogIn();
  }

  //Finner max id på allerede eksiterende profiler
  const maxId =
    model.profiles.length > 0
      ? Math.max(...model.profiles.map((Profile) => Profile.id))
      : -1; //Starter på 0 om det ikke finnes en profil

  const newProfile = {
    id: maxId + 1,
    isLoggedIn: false,
    username,
    pwd,
    name,
    age: Number(age),
    city,
    interests: interests
      ? interests.split(", ").map((interests) => interests.trim())
      : [],
    bio,
    albumImg: [], //tomt array som kan populeres siden
  };

  model.profiles.push(newProfile);
  console.log("Profile added:", model.profiles);

  model.input.profiles = {
    id: null,
    username: "",
    pwd: "",
    repeatPwd: "",
    name: "",
    age: "",
    city: "",
    interests: "",
    bio: "",
  };
}
