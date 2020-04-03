const alert_undisplay = () => {
  const alert = document.querySelector('.div-flashes');
  setTimeout(() => {
    if (alert.innerHTML != "") {
      setTimeout(1000);
      alert.className = "undisplay-flash"
    }
  }, 2500)
};

alert_undisplay();
export { alert_undisplay };
