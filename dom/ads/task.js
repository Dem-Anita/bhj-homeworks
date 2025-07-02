class TextRotator {
  constructor(rotatorElement) {
    this.rotator = rotatorElement;
    this.cases = Array.from(rotatorElement.querySelectorAll('.rotator__case'));
    this.currentIndex = 0;
    this.interval = null;
    
    this.init();
  }
  
  init() {
    this.showCurrentCase();
    
    this.interval = setInterval(() => {
      this.nextCase();
    }, 1000);
  }
  
  showCurrentCase() {
    this.cases.forEach(item => {
      item.classList.remove('rotator__case_active');
    });

    this.cases[this.currentIndex].classList.add('rotator__case_active');
  }
  
  nextCase() {
    this.currentIndex = (this.currentIndex + 1) % this.cases.length;
    this.showCurrentCase();
  }
  
  destroy() {
    clearInterval(this.interval);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const rotators = document.querySelectorAll('.rotator');
  const rotatorInstances = [];
  
  rotators.forEach(rotator => {
    rotatorInstances.push(new TextRotator(rotator));
  });

  window.rotators = rotatorInstances;
});