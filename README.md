# TS-learn

This repository accompanies Academind's Udemy video series :

- [Understanding TypeScript - 2020 Edition](https://www.udemy.com/course/understanding-typescript/)

<!-- ## 02 TypeScript Basic

- basic
  - number : 0, 10, 20
  - string : 'hello', 'good'
  - boolean : true, false
- objs-arrays-enums
  - object: {age:30}
  - array: [1,2,3]
  - tuple: [1,2]  `fixed-length array`
  - enum: enum{ NEW, OLD }  `automatically enumerated global constant identifiers`
- Union Types
  - `number | string`
- Literal Types
  - `'as-number' | 'as-text'`
- Aliases Types
  - `type yourCustomTypeName = number | string`
  - `type yourCustomTypeName = 'as-number' | 'as-text'`
- Functions Types
  - `let myFunction: (a: number, b: number) => number;`
  - `function app(params:type):void {...}`
- Unknown Type
  - have to check type in order to change value
- Never Type
  - return nothing -->

<!-- ## 03 The TypeScript Compiler

watch mode:

```shell
tsc app.ts --watch
# or
tsc app.ts -w
```

project folder complier:

```shell
tsc --init
tsc
# or
tsc -w
``` -->

<!-- ## 04 Next-generation JavaScript & TypeScript

[Next-gen JS Feature Table](https://kangax.github.io/compat-table/es6/)

some new api with ES6

- Let and Const
- Arrow Function
  - `const myFuc: (a: number | string) => void = props => {}`
- Default Parameters
- The Spread Operator (...)
- Rest Parameters
- Array & Object Destructuring -->

## 05 classes and interfaces

- creating a class
- Constructor Functions & The "this" Keyword
  - Constructor : 定义构造函数,通过`new`生成新实例的时候，会自动调用构造函数
- "private" and "public" Access Modifiers
  - private : 私有，只能被其定义所在的类访问
  - public : 公有，可以在任何地方被访问
- Overriding Properties & The "protected" Modifier
  - protected : 受保护，可以被其自身以及其子类和父类访问
  - super: 调用父类的构造函数和方法
  - readonly: 只读属性关键字，只允许出现在属性声明或索引签名中
- getter and setter
  - get : 可以改变属性的读取行为
  - set : 可以改变属性的赋值行为
- Static Methods & Properties
  - static : 不需要实例化，而是直接通过类来调用
- Abstract Classes
  - abstract :
    1. 抽象类是不允许被实例化的
    2. 抽象类中的抽象方法必须被子类实现
- Singletons & Private Constructors
  - singletons : 单例模式，实例化在内部进行，无法使用`new`创建新的实例
