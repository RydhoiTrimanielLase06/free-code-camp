
// 1. Variabel untuk menyimpan menu makan siang
let lunches = [];

// 2. Fungsi untuk menambahkan ke akhir menu
function addLunchToEnd(menu, item) {
  menu.push(item);
  console.log(`${item} added to the end of the lunch menu.`);
  return menu;
}

// 3. Fungsi untuk menambahkan ke awal menu
function addLunchToStart(menu, item) {
  menu.unshift(item);
  console.log(`${item} added to the start of the lunch menu.`);
  return menu;
}

// 4. Fungsi untuk menghapus item terakhir dari menu
function removeLastLunch(menu) {
  if (menu.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removed = menu.pop();
    console.log(`${removed} removed from the end of the lunch menu.`);
  }
  return menu;
}

// 5. Fungsi untuk menghapus item pertama dari menu
function removeFirstLunch(menu) {
  if (menu.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removed = menu.shift();
    console.log(`${removed} removed from the start of the lunch menu.`);
  }
  return menu;
}

// 6. Fungsi untuk memilih item acak dari menu
function getRandomLunch(menu) {
  if (menu.length === 0) {
    console.log("No lunches available.");
  } else {
    const randomIndex = Math.floor(Math.random() * menu.length);
    const randomItem = menu[randomIndex];
    console.log(`Randomly selected lunch: ${randomItem}`);
  }
}

// 7. Fungsi untuk menampilkan seluruh isi menu
function showLunchMenu(menu) {
  if (menu.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${menu.join(", ")}`);
  }
}
