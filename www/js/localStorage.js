var storage = window.localStorage;

var list = JSON.parse(storage.getItem('listeTaches'));
if(!list){
    console.log(list)
  let task1 = {
      title: "Tache1",
      category: "Categorie1",
      description: "Description1",
      highlight: false,
      urgent: false
  };
  let task2 = {
      title: "Tache2",
      category: "Categorie2",
      description: "Description2",
      highlight: false,
      urgent: false
  };
  let task3 = {
      title: "Tache3",
      category: "Categorie3",
      description: "Description3",
      highlight: false,
      urgent: false
  };
  list = [task1,task2,task3];
  storage.setItem("listesTaches",JSON.stringify(list));
}

function save(tache) {
    storage.removeItem('listeTaches');
    list.push(tache);
    storage.setItem('listeTaches',JSON.stringify(list));

}

function remove(tache) {
  storage.removeItem('listeTaches');
  delete list[list.indexOf(tache)];
  storage.setItem('listeTaches',JSON.stringify(list));
}

function removeAll(){
    storage.removeItem('listeTaches');
    list = [];
    storage.setItem('listeTaches',JSON.stringify(list));
    window.location.reload(true)
}
