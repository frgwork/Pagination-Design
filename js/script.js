const block = document.querySelector('.pagination__block');
const list = document.querySelector('.pagination__list');
const items = document.querySelectorAll('.pagination__item');

//*******************************************************

let activeItem;
list.addEventListener('click', e => {
   e.preventDefault();
   const target = e.target;
   //const link = target.closest('.pagination__link');
   const item = target.closest('.pagination__item');
   if (!item) return;
   if (!item.contains(item)) return;
   hoverActive(item)
})

function hoverActive(item) {
   if (activeItem) {
      activeItem.classList.remove('active');
   }
   activeItem = item;
   activeItem.classList.add('active');
}

////******************************************************* */



const li = document.createElement('li');
const a = document.createElement('a');
li.classList.add('pagination__item');
a.classList.add('pagination__link')
a.setAttribute('href', '123')
a.textContent = 'Новый';
li.append(a)
list.append(li)

