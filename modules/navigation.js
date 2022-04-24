
const addNewSection = document.getElementById('add-new');
const contactSection = document.getElementById('contact');
const ListSection = document.getElementById('list');

document.querySelector('#nav-add-new').addEventListener('click', () => {
  addNewSection.style.display = 'block';
  contactSection.style.display = 'none';
  ListSection.style.display = 'none';
});

document.querySelector('#nav-list').addEventListener('click', () => {
  addNewSection.style.display = 'none';
  contactSection.style.display = 'none';
  ListSection.style.display = 'block';
});

document.querySelector('#nav-contact').addEventListener('click', () => {
  addNewSection.style.display = 'none';
  contactSection.style.display = 'block';
  ListSection.style.display = 'none';
});



