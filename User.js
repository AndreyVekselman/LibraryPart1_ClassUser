class user {
  #Name;
  #LName;
  #City;
    constructor(FirstName, LastName, CityName) {
    this.#Name = FirstName;
    this.#LName = LastName;
    this.#City = CityName;
    this.UserBook = [];
  }
  AddBookToUser(book) {
    this.UserBook.push(book);
  }
  PrintUserBooks() {
    let B = "";
    this.UserBook.forEach((book) => {
      B += book + " ,";
    });
    console.log("User " + this.#Name + " hold books: " + B);
  }
}
