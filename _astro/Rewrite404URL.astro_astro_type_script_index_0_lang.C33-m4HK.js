const t=localStorage.getItem("redirect-404");if(t){const{prevUrl:e}=JSON.parse(t);e&&window.history.replaceState({},"",e),localStorage.removeItem("redirect-404")}
