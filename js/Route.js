
const routes = {
    '#cv' : Resume,
    '#kontakt' : Contact,
    '#om' : About
  };
  
const renderPageDiv = document.querySelector('.render-page');
 renderPageDiv.innerHTML = routes[window.location.hash];
  
  const onNavigate = (pathname) => {
    window.history.pushState(
      {},
      pathname,
      window.location.pathname + pathname
    )
   renderPageDiv.innerHTML = routes[pathname]
  }

  window.addEventListener('popstate', (event) => {
   renderPageDiv.innerHTML = routes[window.location.hash];
  });