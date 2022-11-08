// create a users
const User1 = new User("Shoam", "Pupkin", "TA");
const User2 = new User("Itay", "Levi", "Haifa");
const User3 = new User("Andrey", "Vekselman", "Nof HaGalil");

///// create a books
const Book1 = new Book("War and Peace", "Leo Tolstoy");
const Book2 = new Book("A Little Life", "Hanya Yanagihara");
const Book3 = new Book("Broken Glass", "Alain Mabanckou");
const Book4 = new Book(
  "Harry Potter and the Order of the Phoenix",
  "J. K. Rowling"
);
const Book5 = new Book(
  "Harry Potter and the Philosopher's Stone",
  "J. K. Rowling"
);
const Book6 = new Book(
  "Harry Potter and the Chamber of Secrets",
  "J. K. Rowling"
);
const Book7 = new Book("Fifty Shades of Grey", "E. L. James");

/// create a users Books and inform
User1.AddBookToUser(Book1);
User1.AddBookToUser(Book2);
User1.AddBookToUser(Book3);

User2.AddBookToUser(Book4);
User2.AddBookToUser(Book5);
User2.AddBookToUser(Book6);

User3.AddBookToUser(Book7);
User3.AddBookToUser(Book2);

/// create a report
const report = new WeeklyReport();
report.AddUser(User1);
report.AddUser(User2);
report.AddUser(User3);
report.PrintReport();
