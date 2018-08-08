var userTitle = document.querySelector('.link-title');
var userUrl = document.querySelector('.link-url');
var enterBtn = document.querySelector('.enter-btn');
var cardContainer = document.querySelector('.new-cards-wrapper');
var counterLinks = document.querySelector('.count-number');
var counterRead = document.querySelector('.count-number-read');
var counterUnread = document.querySelector('.count-number-unread');
var clearRead = document.querySelector('.clear-all-read');
var countLinks = 0;
var countRead = 0;
var countUnread = 0;

userUrl.addEventListener('keyup', enableBtn);
enterBtn.addEventListener('click', makeCard);
cardContainer.addEventListener('click', markRead);
cardContainer.addEventListener('click', deleteCard);
clearRead.addEventListener('click', clearAllRead)

function makeCard(e) {
  e.preventDefault();
  var title = userTitle.value;
  var url = userUrl.value;
  var newLink = `<section class="new-link">
       <h2 id="new-title">${ title }</h2>
       <h3 id="new-url" >${ url }</h3>
       <button class="read-btn">Read</button>
       <button class="delete-btn">Delete</button>
     </section>`
  var newCard = document.createElement('div');
  newCard.innerHTML = newLink
  cardContainer.appendChild(newCard);
  countCard();
  clearInput();
  enableBtn();
}

function countCard() {
  countLinks++
  counterLinks.innerText = countLinks;
  countUnread++
  counterUnread.innerText = countUnread;
}

function countDownCard() {
  countLinks--
  counterLinks.innerText = countLinks;
}

function addRead() {
  countRead++
  counterRead.innerText = countRead;
}

function subtUnread() {
  countUnread--
  counterUnread.innerText = countUnread;
}

function subtRead() {
  countRead--
  counterRead.innerText = countRead;

}

function addUnread() {
  countUnread++
  counterUnread.innerText = countUnread;
}


function enableBtn() {
  if (userTitle.value !== '' && userUrl.value !== ''){
    enterBtn.removeAttribute('disabled');
  } else {
    enterBtn.setAttribute('disabled', '');
  }
}

function clearInput() {
  userTitle.value = '';
  userUrl.value = '';
}

function markRead(event) {
  if (event.target.className === 'read-btn' && event.target.parentElement.className === 'new-link'){
    event.target.classList.remove('read-btn');
    event.target.classList.add('read');
    addRead();
    subtUnread();
  } else if (event.target.className === 'read' && event.target.parentElement.className === 'new-link'){
    event.target.classList.remove('read');
    event.target.classList.add('read-btn');
    subtRead();
    addUnread();
  }
}

function deleteCard() {
  if (event.target.className === 'delete-btn'){
    adjustRead()
    event.target.parentElement.remove();
    countDownCard();
  } 
}

function adjustRead() {
  if (event.target.previousElementSibling.className === 'read'){
    subtRead()
  } else {subtUnread()}
}

function clearAllRead(e) {
  e.preventDefault();
  var allRead = document.querySelectorAll('.read')
  allRead.forEach(function(i) {
    i.parentElement.remove();
    countDownCard();
    subtRead();
  })
}
 
















































// var webTitle = document.querySelector('.web-title');
// var webUrl = document.querySelector('.web-url');
// var enterBtn = document.querySelector('.enter-btn');
// var linksCardWrapper = document.querySelector('.link-cards-wrapper');
// var readBtnOne = document.querySelector('.read-btn-one');
// var deleteBtn = document.querySelector('.delete-btn-one');
// var errorMessage = document.querySelector('.error');

// enterBtn.addEventListener('click', function(event) {
//   event.preventDefault()
//   returnError()
//   });
// linksCardWrapper.addEventListener('click', markAsRead);
// webTitle.addEventListener('keyup', btnDisabled);
// webUrl.addEventListener('keyup', btnDisabled);

// function grabLinks(event) {
//   var webT = webTitle.value;
//   var webU = webUrl.value;
//   var bookMarkCard = ` 
//     <section class="link-one">
//       <h2 id="Title-card-one">${ webT }</h2>
//       <h3 id="Url-card-one" >${ webU }</h3>
//       <button class="read-btn-one">Read</button>
//       <button class="delete-btn-one">Delete</button>
//     </section>
//   `;
//   linksCardWrapper.innerHTML += bookMarkCard
//   resetInput()
//   btnDisabled()
// }

// function resetInput() {
//   webTitle.value = '';
//   webUrl.value = '';
//   errorMessage.innerHTML = ' '
// }

// function markAsRead (event) {
//   if(event.target.className === 'read-btn-one' && event.target.parentElement.className === 'link-one') {
//     event.target.parentElement.classList.add('red')
//   } else {event.target.parentElement.classList.remove('red')}
//   if(event.target.className === 'delete-btn-one') {
//     event.target.parentElement.remove()
//   }
// }

// function returnError () {
//   var inputLengths = (webUrl.value.length * webTitle.value.length);
//   if (inputLengths === 0){
//     errorMessage.innerHTML = "Please Enter a Title and URL"
//   } else { grabLinks()}
// }

// function btnDisabled(event) {
//   if (webTitle.value !== '' && webUrl.value !== '') {
//     enterBtn.disabled = false;
//   } else {
//     enterBtn.disabled = true;
//   }
// }
