let User1, User2, User3; //declare users
let Book1, Book2, Book3, Book4, Book5, Book6, Book7; //declare books
let report; //declare Report

// create a users
function CreateUsers() {
  User1 = new User("Shoam", "Pupkin", "TA");
  User2 = new User("Itay", "Levi", "Haifa");
  User3 = new User("Andrey", "Vekselman", "Nof HaGalil");
}
///// create a books
function CreateBooks() {
  Book1 = new Book("War and Peace", "Leo Tolstoy");
  Book2 = new Book("A Little Life", "Hanya Yanagihara");
  Book3 = new Book("Broken Glass", "Alain Mabanckou");
  Book4 = new Book(
    "Harry Potter and the Order of the Phoenix",
    "J. K. Rowling"
  );
  Book5 = new Book("Harry Potter and the Philosopher's Stone", "J. K. Rowling");
  Book6 = new Book("Harry Potter and the Chamber of Secrets", "J. K. Rowling");
  Book7 = new Book("Fifty Shades of Grey", "E. L. James");
}

/// create a users Books and inform
function CerateUsersBooks() {
  User1.AddBookToUser(Book1);
  User1.AddBookToUser(Book2);
  User1.AddBookToUser(Book3);

  User2.AddBookToUser(Book4);
  User2.AddBookToUser(Book5);
  User2.AddBookToUser(Book6);

  User3.AddBookToUser(Book7);
  User3.AddBookToUser(Book2);
}

/// create a report
function CreatePrintReport() {
  report = new WeeklyReport();
  report.AddUser(User1);
  report.AddUser(User2);
  report.AddUser(User3);
  report.PrintReport();
}
//ran Library
CreateUsers();
CreateBooks();
CerateUsersBooks();
CreatePrintReport();
