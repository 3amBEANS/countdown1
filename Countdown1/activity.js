// Beginner Challenge
let bookList = [
    { title: "Don Quixote", author: "Miguel de Cervantes" },
    { title: "Ulysses", author: "James Joyce" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Moby Dick", author: "Herman Melville" },
  ];
  
  // (1) Add a new entry to bookList
  const addBook = (title, author) => {
    bookList.push({ title, author });
    return bookList;
  };
  
  // (2) Remove a specific book from bookList
  const removeBook = (title) => {
    bookList = bookList.filter(book => book.title !== title);
    return bookList;
  };
  
  // (3) List out all books or authors
  const listBooks = (type = 'titles') => {
    return type === 'titles' 
      ? bookList.map(book => book.title)
      : bookList.map(book => book.author);
  };
  
  // Intermediate Challenge
  // (4) Determine if number is positive or negative
  const checkNumber = num => num > 0 ? 'Positive' : 'Negative';
  
  // (5) Day of week switch statement
  const dayOfWeek = (day) => {
    switch(day.toLowerCase()) {
      case 'monday':
        console.log("Good luck");
        break;
      case 'wednesday':
        console.log("Hump day");
        break;
      case 'friday':
        console.log("Party");
        break;
      default:
        console.log("Just another day");
    }
  };
  
  // (6) Sum of numbers up to a given number
  const sumUp = (num) => {
    let total = 0;
    for (let i = 1; i <= num; i++) {
      total += i;
    }
    return total;
  };
  
  // Harder Challenge
  // (7) Temperature conversion and clothing recommendation
  const temperatureAdvice = (celsius) => {
    const fahrenheit = (celsius * 9/5) + 32;
    if (fahrenheit < 32) return "Wear a heavy coat and layers!";
    if (fahrenheit < 50) return "Wear a light jacket";
    if (fahrenheit < 70) return "A sweater should do";
    return "T-shirt and shorts weather!";
  };
  
  // (8) Count truthy values in an array
  const countTruthy = (arr) => {
    let count = 0;
    arr.forEach(item => {
      if (item) count++;
    });
    return count;
  };
  
  // (9) Transform attendance list with full name and grade
  const attendance = [
    { firstName: "Clay", lastName: "Tondreau", gpa: 4.0 },
    { firstName: "Tucker", lastName: "Wilson", gpa: 2.0 },
    { firstName: "Eliza", lastName: "Tobin", gpa: 3.7 },
    { firstName: "Sofia", lastName: "Ackerman", gpa: 1.1 },
    { firstName: "Thomas", lastName: "Beddow", gpa: 2.3 },
    { firstName: "Jackson", lastName: "Wolf", gpa: 4.0 },
    { firstName: "Jared", lastName: "Nguyen", gpa: 4.0 },
  ];
  
  const transformAttendance = attendance.map(student => ({
    fullName: `${student.firstName} ${student.lastName}`,
    averageGrade: student.gpa >= 4.0 ? 'A' : 
                 student.gpa >= 3.0 ? 'B' : 
                 student.gpa >= 2.0 ? 'C' : 
                 student.gpa >= 1.0 ? 'D' : 'F'
  }));
  
  // Hardest Challenge
  const numberPuzzle = (num) => {
    const path = [num];
    
    while (num !== 4) {
      if (num % 2 === 0) {
        num = num / 2;
      } else if (num % 3 === 0) {
        num = num / 3;
      } else {
        num = num - 1;
      }
      path.push(num);
    }
    
    return path;
  };
  
  // Example usage:
  console.log(numberPuzzle(11));  // [11, 6, 3, 5, 4]
  console.log(numberPuzzle(19));  // [19, 8, 5, 4]