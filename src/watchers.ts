//@ts-check
/*
// USER WATCHER
export const installUserWatcher = (userUpdatedCallback) => {
  console.log('user WATCHER');
  // REDUX-THUNK - action creators that return a function instead of an action.
  window.addEventListener('userOnline',   () => userUpdatedCallback(false));
  window.addEventListener('userOffline',  () => userUpdatedCallback(true));
  userUpdatedCallback(firebase.auth().currentUser === true);
};
*/
/*
// FEEDBACK WATCHER
export const installFeedbackWatcher = (openFeedback) => {
  // REDUX-THUNK - action creators that return a function instead of an action.
  window.addEventListener('openFeedback',     () => openFeedback(true));
  window.addEventListener('closedFeedback',   () => openFeedback(false));
};

// PROJECT WATCHER
export const installProjects = (createProject) => {
  // REDUX-THUNK - action creators that return a function instead of an action.
  window.addEventListener('openProject',    () => createProject(true));
  window.addEventListener('closeProject',   () => createProject(false));
};

// PROJECT WATCHER
export const installProjects = (createProject) => {
  // REDUX-THUNK - action creators that return a function instead of an action.
  window.addEventListener('openProject',    () => createProject(true));
  window.addEventListener('closeProject',   () => createProject(false));
};
*/
/*
export const installGeo = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    console.log(geolocation);
  }
};*/
/*
export const installOfflineWatcher = (offlineUpdatedCallback) => {
  window.addEventListener('online', () => offlineUpdatedCallback(false));
  window.addEventListener('offline', () => offlineUpdatedCallback(true));
  offlineUpdatedCallback(navigator.onLine === false);
};
*/


/*
export const currentTime = (updateTime) => {
  updateTime()
}
*/