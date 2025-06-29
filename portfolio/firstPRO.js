// Smooth scroll for all anchor links with a hash
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Check if the About photo loads successfully
const profileImg = document.querySelector('#about img');
profileImg.onerror = function () {
  alert('Error: Profile image not found. Please check the file path.');
  profileImg.style.display = 'none';
};

// Confirm resume download
const resumeLink = document.querySelector('#resume a');
resumeLink.addEventListener('click', function (e) {
  const confirmDownload = confirm('Do you want to download the resume?');
  if (!confirmDownload) {
    e.preventDefault();
  }
});
