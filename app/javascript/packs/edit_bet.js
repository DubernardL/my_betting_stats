const edit_bet = () => {
  const links = document.querySelectorAll('.edit-bet');
  links.forEach((item) => {
    const btn = item.querySelector('.hidden-btn');
    const btn_edit = item.querySelector('.btn-edit');
    btn_edit.addEventListener('click', ((event) => {
      event.preventDefault();
      btn.classList.toggle("hidden");
      if(btn_edit.innerHTML === 'Edit bet <i class=\"fas fa-caret-square-down\"></i>') {
        btn_edit.innerHTML = 'Close <i class="fas fa-caret-square-up"></i>';
      } else {
        btn_edit.innerHTML = 'Edit bet <i class=\"fas fa-caret-square-down\"></i>';
      }
    }))
  });
};

edit_bet();

export { edit_bet };


