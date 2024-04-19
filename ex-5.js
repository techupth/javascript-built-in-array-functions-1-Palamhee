const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  const averageScore = students.reduce(sum,0);
  return averageScore / students.length;
}

function sum(accumulator, student) {
  return accumulator + student.score;
}

const result = getAverageStudentScore(students);
console.log(result)