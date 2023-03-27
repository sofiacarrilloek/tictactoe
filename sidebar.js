const triggerImage = document.querySelector('.trigger-image');
const sidebar = document.querySelector('.sidebar');

triggerImage.addEventListener('click', (event) => {
  event.stopPropagation();
  sidebar.classList.add('active');
});

document.addEventListener('click', (event) => {
  const isClickInsideSidebar = sidebar.contains(event.target);
  const isClickInsideTriggerImage = triggerImage.contains(event.target);

  if (!isClickInsideSidebar && !isClickInsideTriggerImage) {
    sidebar.classList.remove('active');
  }
});