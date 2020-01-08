// const names: Array<string> = [];
// // names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("resolve");
//   }, 1000);
// });

// promise.then(data => {
//   data.split(" ");
// });

/**
 * Creating a Generic Function
 * <T, U>
 *
 * Working with Constraints
 * <T extends Type>
 */
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Vergil", hobbies: ["Sports"] }, { age: 27 });
console.log(mergedObj.age);

/**
 * Another Generic Function
 * <T extends yourType>
 */
interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got" + element.length + "element.";
  }
  return [element, descriptionText];
}

console.log(countAndPrint(["sports", "cooking"]));

/**
 * The "keyof" Constraint
 * <U extends keyof yourType>
 */
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Vergil" }, "name");

/**
 * Generic Classes
 */
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Vergil");
textStorage.addItem("Menu");
textStorage.removeItem("Vergil");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maxObj = {name:"Vergil"}
// objStorage.addItem(maxObj);
// objStorage.addItem({name:"Menu"});
// //...
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems())

/*
 * Generic Utility Types
 */
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  data: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = data;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["vergil", "max"];
// names.push("Manu");
// names.pop();
