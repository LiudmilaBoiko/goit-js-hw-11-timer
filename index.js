class CountdownTimer {
  constructor({selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.timerId = null;
    this.days = document.querySelector('span[data-value="days"]');
    this.hours = document.querySelector('span[data-value="hours"]');
    this.mins = document.querySelector('span[data-value="mins"]');
    this.secs = document.querySelector('span[data-value="secs"]');

  }

  start() {
    this.getTime();
    this.timerId = setInterval(() => {
       this.getTime();
    }, 1000);
  
  }

  getTime() {
      const deltaTime = this.targetDate - Date.now();
      const time = this.getTimeComponents(deltaTime);
      this.updateClockface(time);
  }

  getTimeComponents(time) {
  const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  
  return {days, hours, mins, secs};
  
  }
  
  pad(value) {
    return String(value).padStart(2, '0');
  }
    
  updateClockface({ days, hours, mins, secs }) {
  this.days.textContent = `${days}`;
  this.hours.textContent = `${hours}`;
  this.mins.textContent = `${mins}`;
  this.secs.textContent = `${secs}`;
}

}

const countDownTimer = new CountdownTimer({
  selector: '#timer-1',
    targetDate: new Date('Jan 01, 2021'),
   
});

countDownTimer.start();
