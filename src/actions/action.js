export const USER_NAME = 'USER_NAME';
export const userName = (name) => ({
  type: USER_NAME,
  name
})



export const fetchUser = (googleId,name,email,profilePicURL,accessToken,expiresAt) => dispatch => {
    console.log("fetching user data...");
   
}