document.addEventListener('DOMContentLoaded', function() {
  const tabContainers = document.querySelectorAll('.tab__navigation');
  
  tabContainers.forEach(container => {
    const tabs = container.querySelectorAll('.tab');
    const tabContents = container.nextElementSibling.querySelectorAll('.tab__content');

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('tab_active'));
        tabContents.forEach(c => c.classList.remove('tab__content_active'));

        tab.classList.add('tab_active');
        tabContents[index].classList.add('tab__content_active');
      });
    });
  });
});