import axios from "axios";

class UserModel {
  static logIn(username, password) {
    let request = axios.post(
      "https://wayfarerserver.herokuapp.com/api/user/login",
      {
        username: username,
        password: password
      }
    );
    console.log(request);
    
    return request;
  }

  static signUp(name, username, password, currentCity) {
    console.log("in axios sign up");

    let request = axios.post(
      "https://wayfarerserver.herokuapp.com/api/user/create",
      {
        name: name,
        username: username,
        password: password,
        currentCity: currentCity,
        image: ""
      }
    );

    return request;
  }

  static getInfo (username) {
    let url = `https://wayfarerserver.herokuapp.com/api/user/${username}`;
    let request = axios.get(url);
    console.log(url);
    
    return request;
  }

  static updateProfile(username, newName, newCurrentCity) {
    let url = `https://wayfarerserver.herokuapp.com/api/user/update/${username}`;
    let request = axios.put(url, {
      name: newName,
      currentCity: newCurrentCity,
    });
    console.log(request);
    
    return request;
  }
}

export default UserModel;

