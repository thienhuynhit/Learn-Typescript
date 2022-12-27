// generic

type List<T> = {
  length: number;
  [index: number]: T;
};

const numberList1: List<number> = [1, 2, 3];
const wordList: List<string> = ["Hello", "Xin chao"];

interface Student4 {
  id: number;
  name: string;
}

const studentList: List<Student4> = [
  { id: 1, name: "Harvey" },
  { id: 2, name: "Bod" },
];
console.log(studentList.length);

// keyof
type StudentKeys = keyof Student4;
const keys: StudentKeys = "id";
