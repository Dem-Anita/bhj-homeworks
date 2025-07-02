document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const dropdownValue = dropdown.querySelector('.dropdown__value');
    const dropdownList = dropdown.querySelector('.dropdown__list');
    const dropdownItems = dropdown.querySelectorAll('.dropdown__item');

    dropdownValue.addEventListener('click', function() {
      dropdownList.classList.toggle('dropdown__list_active');
    });

    dropdownItems.forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        
        const newValue = this.querySelector('.dropdown__link').textContent.trim();
        dropdownValue.textContent = newValue;
        
        dropdownList.classList.remove('dropdown__list_active');
      });
    });
  });

  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
      dropdowns.forEach(dropdown => {
        dropdown.querySelector('.dropdown__list').classList.remove('dropdown__list_active');
      });
    }
  });
});