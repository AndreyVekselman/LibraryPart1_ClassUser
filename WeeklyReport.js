class WeeklyReport {
  AllUsers = [];
  AddUser(user) {
    this.AllUsers.push(user);
  }
  PrintReport() {
    this.AllUsers.forEach((element) => {
      console.log(
        element.Name +
          " " +
          element.LName +
          " from " +
          element.City +
          " holds books: \n" +
          element.UserBook
      );
    });
  }
}
