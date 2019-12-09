// const person : {
//   name:string,
//   age:number
// } = 
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Vergil",
//   age: 28,
//   hobbies: ['sports','cooking'],
//   role: [2, 'author']
// }

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

/*
******
* 枚举 
* console.log(Role.READ_ONLY === 100 );   true
* console.log(Role[100] === 'READ_ONLY' ); true
******
*/
enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' }

const person = {
  name: "Vergil",
  age: 28,
  hobbies: ['sports','cooking'],
  role: Role.ADMIN
}

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [10, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['sports']

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
  // console.log(hobby.map()); // !!! ERROR !!!
}

if (person.role === Role.AUTHOR) {
  console.log('is admin');
}