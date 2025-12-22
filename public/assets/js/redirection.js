"use strict"
const redirect = sessionStorage.redirect;

if(redirect) {
    history.replaceState(null, "", redirect);
    sessionStorage.removeItem("redirect");
}
