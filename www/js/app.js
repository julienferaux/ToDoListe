// App logic.
window.myApp = {};

document.addEventListener('init', function(event) {
  var page = event.target;

  // Each page calls its own initialization controller.
  if (myApp.controllers.hasOwnProperty(page.id)) {
    myApp.controllers[page.id](page);
  }

  // Fill the lists with initial data when the pages we need are ready.
  // This only happens once at the beginning of t he app.
  if (page.id === 'menuPage' || page.id === 'pendingTasksPage') {
    if (document.querySelector('#menuPage')
      && document.querySelector('#pendingTasksPage')
      && !document.querySelector('#pendingTasksPage ons-list-item')
    ) {
      list.forEach(myApp.services.tasks.create);
      myApp.services.fixtures.forEach(function(data) {
        myApp.services.tasks.create(data);
      });
    }
  }
});

function editSelects (event) {
  //console.log(event.target.value)
  //console.log(document.querySelector('#category-input').getElementsByClassName("text-input")[0]);
  document.querySelector('#category-input').value = event.target.value;
}
function get_Categorie(){
  let tab_Cat = [];
  list.forEach(function(list){
    if (!tab_Cat.includes(list.category)){
      tab_Cat.push(list.category);
    }
  });
  return tab_Cat;
}
