const authExperationCheck = setInterval(function() {
  const user = localStorage.getItem("user");

  if (user) {
    const userObj = JSON.parse(user);
    return fetch(`/api/user/auth/check`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + userObj.token,
        "Content-Type": "application/json"
      }
    }).then(response => {
      if (response.status === 403) {
        if (response.statusText) {
          let error = response.statusText.split(":");
          if (error[1] === " jwt expired") {
            localStorage.clear();
            location.replace("/login");
          }
        }
      }
    });
  }
}, 60000);

export { authExperationCheck };
