// creaete a users
const User1 = new user("Shoam", "Pupkin", "TA");
const User2 = new user("Itay", "Levi", "Haifa");

/// create a users Books and inform
User1.AddBookToUser("War and Peace");
User1.AddBookToUser("A Little Life");
User1.AddBookToUser("A Broken Glass");

User2.AddBookToUser("Harry Potter");
User2.AddBookToUser("50 Shades of Grey");
User2.AddBookToUser("Harry Potter and the Goblet of Fire");

/// create a report
const report = new WeeklyReport();
report.AddUser(User1);
report.AddUser(User2);
report.PrintReport();
