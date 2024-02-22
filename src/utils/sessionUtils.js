const sessionData = {
  userId: 123,
  username: "example",
  isLoggedIn: true,
  auth :'asfsdfsdtwdsfsdhdsfdsfdsfdsfdsfdsfdsf'
};
const  sessionTemp =()=>{
  const jsonSessionData = JSON.stringify(sessionData);
  sessionStorage.setItem('session', jsonSessionData);
}
const  getSession =()=>{
  const session = sessionStorage.getItem('session');
  if (session) {
    return JSON.parse(session);
  }
  return null;
}

const  getSessionUserId =()=>{
  const session = sessionStorage.getItem('session');
  if (session) {
    const date = JSON.parse(session);
    return date?.userId ?? null;
  }
  return null;
}

export default { sessionTemp , getSession ,getSessionUserId }
