//тест DB

const openRequest = indexedDB.open("todoApp", 1);
const db;
openRequest.onupgradeneeded = function() {
    console.log('initialization');
    db = openRequest.result;
    if (!db.objectStoreNames.contains('todos')) { // if there's no "books" store
      db.createObjectStore('todos', {keyPath: 'id', autoIncrement: true}); // create it
    };
  };
  
  openRequest.onerror = function() {
    console.error("Error", openRequest.error);
  };
  
  openRequest.onsuccess = function() {
    console.log('success');
    db = openRequest.result;
    // продолжить работу с базой данных, используя объект db
  };

const item = { label: 'Drink Coffee', important: false, done: false };