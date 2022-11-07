class User {
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
    if (book.BorrowBook) {
      this.UserBook.push(book);
      this.InformUsers(book);
      book.BorrowBook = false;
    } else {
      console.log(
        this.Name +
          ", sorry, but a  book " +
          book.BookName +
          " all ready borrowed"
      );
    }
  }
  InformUsers(book) {
    console.log(this.Name + " borrow  " + book.BookName);
  }
}
