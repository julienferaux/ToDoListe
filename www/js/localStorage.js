var storage = window.localStorage;

function save(key,objet) {
    storage.setItem(key,objet);
    console.log(storage.getItem(key))
}
