class user {
  Name;
  LName;
  City;
  UserBook = [];

  constructor(FirstName, LastName, CityName) {
    this.Name = FirstName;
    this.LName = LastName;
    this.City = CityName;
  }
  AddBookToUser(book) {
    this.UserBook.push(book);
    this.InformUsers(book);
  }
  InformUsers(book) {
    console.log(this.Name + " borrow  " + book);
  }
}
