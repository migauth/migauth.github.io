// Toggle page

function togglePage(currentPage) {
  
  const homePage = document.getElementById('home-page');
  const pages = document.querySelectorAll('.page');

  
  
  pages.forEach(page => {
    
    if (page.id === currentPage) {
      page.style.display = 'block';
      setTimeout(() => {
        page.style.opacity = '1';
      }, 50);
    } else {
      page.style.opacity = '0';
      setTimeout(() => {
        page.style.display = 'none';
      }, 0);
    }
  });
}
