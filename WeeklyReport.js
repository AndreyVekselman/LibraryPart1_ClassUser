class WeeklyReport {
  AllUsers = [];
  AddUser(user) {
    this.AllUsers.push(user);
  }
  PrintReport() {
    this.AllUsers.forEach((user) => {
      console.log(
        user.Name + " " + user.LName + " from " + user.City + " holds books: \n"
      );
      user.UserBook.forEach((book) => {
        console.log(book.BookName);
      });
    });
  }
}
