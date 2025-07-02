document.addEventListener('DOMContentLoaded', function() {
  const tooltipElements = document.querySelectorAll('.has-tooltip');
  let activeTooltip = null;

  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  document.body.appendChild(tooltip);

  function positionTooltip(element) {
    const rect = element.getBoundingClientRect();
    tooltip.style.left = `${rect.left}px`;
    tooltip.style.top = `${rect.bottom}px`;
  }

  function handleClick(e) {
    e.preventDefault();

    if (activeTooltip === this) {
      tooltip.classList.remove('tooltip_active');
      activeTooltip = null;
      return;
    }

    tooltip.textContent = this.title;
    tooltip.classList.add('tooltip_active');
    positionTooltip(this);
    
    activeTooltip = this;
  }

  tooltipElements.forEach(element => {
    element.addEventListener('click', handleClick);
  });

  document.addEventListener('click', function(e) {
    if (!e.target.classList.contains('has-tooltip') && activeTooltip) {
      tooltip.classList.remove('tooltip_active');
      activeTooltip = null;
    }
  });
});