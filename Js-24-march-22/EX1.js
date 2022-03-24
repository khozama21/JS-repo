/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/
let khozama={
    FName: 'Khozama',
    LName:'obeidat',
    age:23,
    dob:'08-12-98',
    favFood:['soup', 'rice','flafel'],
    favMovie: ['mov1','mov2','mov3','mov4','mov5']
}
console.log(khozama);

var persons = [
  { name: { first: 'John',  last: 'Hob' },age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides

Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/
let fname=[];
function firstName(p){
    for(i=0;i<5;i++){
     fname.push(p[i].name.first);
    }
    console.log(fname);
}

 firstName(persons);

/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons

Ex: averageAge(persons) => 41.2
*/
let sum=0;
let avg=0;
function averageAge(persons){
    for(i=0;i<5;i++){
       sum+=this.persons[i].age;
      
    }
    
   avg=sum/5;
    console.log(`the average age is ${avg}`);
}

averageAge(persons);

/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person

Ex: olderPerson(persons) => "Soso Al-Amora"
*/
 
function olderPerson(p)
{
     p.sort(function(a,b){
         if(a.age>b.age)
         console.log(` ${a.name.first} ${a.name.last} : ${a.age}`);
     });
}
console.log(`the two oldest in the group: `);olderPerson(persons);

/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/


/*
 

//////////////////////////////////////////////////////////////////

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??

Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/



/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??

Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/


/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array

Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/



