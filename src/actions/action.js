export const USER_NAME = 'USER_NAME';
export const userName = (name) => ({
  type: USER_NAME,
  name
})



export const fetchVacation = () => dispatch => {
  console.log("fetching vacation data...");
  fetch(`/api/vacation`)
  .then(response => response.json())
  .then(json => {
    console.log("--->", json)   
  })
}