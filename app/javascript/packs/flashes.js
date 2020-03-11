const alert_undisplay = () => {
  const alert = document.querySelector('.div-flashes');
  console.log(alert);
  setTimeout(() => {
    if (alert.innerHTML != "") {
      setTimeout(2000);
      alert.className = "undisplay-flash"
    }
  }, 2000)
};

alert_undisplay();
export { alert_undisplay };
