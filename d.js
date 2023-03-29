const employees = [
    { name: "Alice", hoursWorked: 7, salary: 1000 },
    { name: "Bob", hoursWorked: 8, salary: 1200 },
    { name: "Charlie", hoursWorked: 9, salary: "1100$" },
    { name: "Dave", hoursWorked: 7.5, salary: 900 }
  ];
  const employeesBonus = (arr) => {
  // Loop through employees array and update their salary based on hours worked
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].hoursWorked > 8) {
      employees[i].salary = parseInt(employees[i].salary)+100+"$"; // $100 bonus for working more than 8 hours
    } else {
      employees[i].salary += 50; // $50 bonus for working 8 hours or less
    }
    
  }return employees;}
  
  // Log the updated data to the console
  console.log(employeesBonus(employees));


let arr = [
        {
            name: "Robert",
            section: "Transport",
            workHours: 8,
            salary: "3000$"
        },
        {
            name: "Richard",
            section: "HR",
            workHours: 6,
            salary: "4000$"
        },
        {
            name: "Christopher",
            section: "Production",
            workHours: 10,
            salary: "4500$"
        },
        {
            name: "Andrew",
            section: "HouseKeeping",
            workHours: 9,
            salary: "3200$"
        }
    ]
    // const employeesBonus = (arr) => {

    //     // write your code here
        
    //     for (let i = 0; i < arr.length; i++) {
    //         if (arr[i].workHours > 8) {
    //           arr[i].salary =(arr[i].salary) + 100 ; 
    //         } else {
    //             arr[i].salary =arr[i].salary+ 50; 
    //         }
    //        return arr; 
    //       }
          
    //     }
    //   console.log(employeesBonus(arr));