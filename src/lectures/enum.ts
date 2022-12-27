// we will learn enum
// number enum
enum Status1 {
  PENDING, // 0
  IN_PROGRESS, // 1
  DONE, // 2
  CANCELLED, // 3
}
// number enum support reverse mapping
console.log(Status1.PENDING);
console.log(Status1[1]);
// string enum dont support reverse mapping
enum Status2 {
  JSON = "application/json",
  XML = "application/xml",
}
console.log(Status2.JSON);
