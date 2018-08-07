var webTitle = document.querySelector('.web-title');
var webUrl = document.querySelector('.web-url');
var enterBtn = document.querySelector('.enter-btn');
var linksCardWrapper = document.querySelector('.link-cards-wrapper');
var readBtnOne = document.querySelector('.read-btn-one');
var deleteBtn = document.querySelector('.delete-btn-one');
var errorMessage = document.querySelector('.error');

enterBtn.addEventListener('click', function(event) {
  event.preventDefault()
  returnError()
  });
linksCardWrapper.addEventListener('click', markAsRead);
webTitle.addEventListener('keyup', btnDisabled);
webUrl.addEventListener('keyup', btnDisabled);

function grabLinks(event) {
  var webT = webTitle.value;
  var webU = webUrl.value;
  var bookMarkCard = ` 
    <section class="link-one">
      <h2 id="Title-card-one">${ webT }</h2>
      <h3 id="Url-card-one" >${ webU }</h3>
      <button class="read-btn-one">Read</button>
      <button class="delete-btn-one">Delete</button>
    </section>
  `;
  linksCardWrapper.innerHTML += bookMarkCard
  resetInput()
  btnDisabled()
}

function resetInput() {
  webTitle.value = '';
  webUrl.value = '';
  errorMessage.innerHTML = ' '
}

function markAsRead (event) {
  if(event.target.className === 'read-btn-one' && event.target.parentElement.className === 'link-one') {
    event.target.parentElement.classList.add('red')
  } else {event.target.parentElement.classList.remove('red')}
  if(event.target.className === 'delete-btn-one') {
    event.target.parentElement.remove()
  }
}

function returnError () {
  var inputLengths = (webUrl.value.length * webTitle.value.length);
  if (inputLengths === 0){
    errorMessage.innerHTML = "Please Enter a Title and URL"
  } else { grabLinks()}
}

function btnDisabled(event) {
  if (webTitle.value !== '' && webUrl.value !== '') {
    enterBtn.disabled = false;
  } else {
    enterBtn.disabled = true;
  }
}
