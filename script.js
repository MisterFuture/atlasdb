const buttons = document.querySelectorAll('.hbutton');
buttons.forEach(button => {
  document.querySelectorAll('.home-section').forEach((section)=>section.style.visibility = 'hidden');
  button.addEventListener('click', event => {
    console.log('sectionTarget' in event.target.dataset)
    const targetId = event.target.dataset['sectionTarget'];
    const target = document.querySelector(targetId);
    const others = Array.from(document.querySelectorAll('.home-section')).filter(
      section => section !== target
    );
    target.style.visibility = 'visible';
    others.forEach(section => (section.style.visibility = 'hidden'));
  });
});