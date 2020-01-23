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

<!-- ## 05 classes and interfaces

### class

#### Basic class

> - Constructor : 定义构造函数,通过`new`生成新实例的时候，会自动调>用构造函数
> - super: 调用父类的构造函数和方法
> - readonly: 只读属性关键字，只允许出现在属性声明或索引签名中
> - get : 可以改变属性的读取行为
> - set : 可以改变属性的赋值行为

#### Properties

> - static : 不需要实例化，而是直接通过类来调用
> - private : 私有，只能被其定义所在的类访问
> - public : 公有，可以在任何地方被访问
> - protected : 受保护，可以被其自身以及其子类和父类访问

#### Abstract

>  1. 抽象类是不允许被实例化的
>  2. 抽象类中的抽象方法必须被子类实现

#### Singletons

> - 单例模式，实例化在内部进行，无法使用`new`创建新的实例

---

### interface

#### Basic interface

> - 接口（Interfaces）是一个很重要的概念，它是对行为的抽象
> - 可选属性: `{ age?: number }`
> - 任意属性: `{ [propName: string]: any }`
> - 只读属性: `{ Readonly name: string }`

#### Using Interfaces with Classes

- 类实现接口:

```typescript
interface Alarm {
    alert();
}

interface Light {
    lightOn();
    lightOff();
}

class Car implements Alarm, Light {
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
}
```

- 接口继承接口:

```typescript
interface Alarm {
    alert();
}

interface LightAlarm extends Alarm {
    lightOn();
    lightOff();
}
```

- 接口继承类:

```typescript
class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
```

- 混合类型:

```typescript
//可以使用接口的方式来定义一个函数需要符合的形状
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}

//一个函数还可以有自己的属性和方法
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
``` -->

<!-- ## 06 Advanced Types

- Intersection Types:

```typescript
interface Admin {}
interface Employee {}
interface ElevatedEmployee extends Employee, Admin {}
```

- More on Type Guards

```typescript
// string or number
type Combinable = string | number;
// number or boolean
type Numeric = number | boolean;
// number only
type Universal = Combinable & Numeric;
```

- Discriminated Unions
  - `'propertyName' in yourType`
  - `instanceof`: Used to discriminate the method or interface type
  - `{type:''}` `switch(type)`

- Type Casting:

```typescript
<HTMLInputElement>item
item as HTMLInputElement
```

- Index Properties
  - `[prop: string]: string;`

- Function Overloads
- Optional Chaining
- Nullish Coalescing -->

<!-- ## 007 Generics-->

<!-- ## 008 Decorators -->

<!-- ## 009 Practice Time! Let's build a Drag & Drop Project -->

## 010 Modules & Namespaces

- Working with Namespaces

  1. `namespace` 引用

     ```Typescript
     // a.ts
     namespace MyNamespace {
       export interface MyInterface {
         ...
       }
       ...
     }

     // b.ts
     /// <reference path="a.ts" />
     namespace MyNamespace {
       ...
     }
     ```

  2. `tsconfig` 设置

      ```JSON
      {
        "compilerOptions":
        {
          "module": "amd",
          ...
          "outFile": "./dist/bundle.js",
          ...
        }
      }
      ```

  3. 缺点 `reference` 提示不明显, 容易漏掉且极难检查

- Using ES Modules

  ```typescript
  // a.ts
  export interface MyInterface {}

  // b.ts
  import { MyInterface } from './a.js'; // 注意是js文件
  ```
