function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return function () {
      return seat;
    }
  }
  let students = new Array();
  for (let i = 1; i <= numbersOfStudents; i++) {
    students.push(studentSeat(i));
  }
  return students;
}

const classRoom = createClassRoom(10);
