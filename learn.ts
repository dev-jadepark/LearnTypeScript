export default function () {} //isolatedModules 오류 방지
let message: string = 'Hello World';
let value: number = 1;

let nullableString: string | null = null;
nullableString = 'Hi';

let undefinedOrNumber: undefined | number;
undefinedOrNumber = 10;

let numberOrStringOrNull: number | string | null = null;
numberOrStringOrNull = 1;
numberOrStringOrNull = 'Bye';
numberOrStringOrNull = null;

let isCompleted: boolean = true;
isCompleted = false;

let anyValue: any = null;
anyValue = undefined;
anyValue = 1;
anyValue = 'hellor world';

function sum(a: number, b: number) {
  return a + b;
}

const result = sum(1, 2);

function process(a: number, b: number, isDouble?: boolean) {  //isDouble은 boolean | undefined로 설정
  const sum = a + b;
  return isDouble ? sum * 2 : sum;
}

const total = process(1, 2);
const doubledTotal = process(1, 2, true);


/* 여러 반환 타입을 지닌 함수 */
function hello(value: string, returnNull?: boolean) {
  if (returnNull) {
    return null;
  }
  return `Hello ${value}`;
}

const result2 = hello('World');
const nullResult = hello('World', true);

//const replaced = result.replace('Hello', 'Bye');
const replaced = result2?.replace('Hello', 'Bye');  //옵셔널체이닝 연산자 사용

/* interface : 객체나 클래스를 위한 타입을 정할 때 사용*/

interface Profile {
  id: number;
  username: string;
  display: string;
}

function printUsername(Profile: Profile) {
  console.log(Profile.username);
}

const profile: Profile = {
  id: 1,
  username: 'jade',
  display: 'jadepark',
}

printUsername(profile);

//선언된 객체타입은 변수의 타입이나 파라미터의 타입으로 사용할 수 있다.

interface Relationship {
  from: Profile;
  to: Profile;
}

const relationship: Relationship = {
  from: {
    id: 1,
    username: 'test1',
    display: 'test1',
  },
  to: {
    id: 2,
    username: 'test2',
    display: 'test2',
  },
};

//interface 상속하기

interface Account extends Profile {
  email: string;
  password: string;
}

const account: Account = {
  id: 1,
  username: 'test1',
  display: 'test1',
  email: 'test1@gmail.com',
  password: 'password',
};

//옵셔널 속성

interface OptionalProfile {
  id: number;
  username: string;
  displayName: string;
  photoURL?: string;  // string | undefined
}

const optionalProfile = {
  id: 1,
  username: 'johndoe',
  displayName: 'john doe',
  photoURL: 'https://www.google.com',
}

//클래스에서 interace를 implement하기

interface Shape {
  getArea(): number;
  getPerimeter(): number;
}

class Circle implements Shape {
  constructor(private radius: number) { }
  getArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) { }
  getArea(): number {
    return this.width * this.height;
  }
  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const circle = new Circle(4);
const rectangle = new Rectangle(4, 6);

const area = circle.getArea;
const perimeter = rectangle.getPerimeter;



// 배열타입
const numbers: number[] = [1, 2, 3, 4, 5];
const texts: string[] = ['hello', 'world'];

interface Person {
  name: string;
}

const people: Person[] = [{ name: 'John Doe' }, { name: 'Jone Two' }];

// Type Alias 타입별칭

type Person2 = {
  name: string;
}

type Peoples = Person[];
type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';

type Employee = Person & {
  job: string;
};

const employee: Employee = {
  name: 'john Doe',
  job: 'engineer',
}

// type과 interface 혼용하지 말고 하나만 잘 사용하기


/*
  제네릭 : 함수, 객체, 클래스 타입에서 사전에 정하지 않은 다양한 타입을 다룰 때 사용
*/

function wrap<T>(value: T) {
  return { value };
}

const genericValue = wrap('Hello World');

const person3: Person = { name: 'jade' };
const result3 = wrap(person3);

/*
  객체에서 제네릭 사용하기
*/

interface Item<T> {
  id: number;
  data: T;
}

//기존 Person 사용

interface Place {
  location: string;
}

const personItem: Item<Person> = {
  id: 1,
  data: {
    name: 'john Doe',
  },
};


const placeItem: Item<Place> = {
  id: 1,
  data: {
    location: 'seoul',
  },
};

type Item2<T> = { id: number; data: T };




/*
  클래스에서 제네릭 사용하기
*/

class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue(item: T) {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
// const first = queue.dequeue();
// const second = queue.dequeue();




