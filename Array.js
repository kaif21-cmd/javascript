console.log('kaif shaikh')
const car=["sab","volvo","BMW"];
console.log(car[0])
console.log(car[2])
//Using the JavaScript Keyword new
1.//The following example also creates an Array, and assigns values to it:
const car1=new Array("audi","Mercedes")
console.log(car1[1])
2.//Changing an Array Element
//This statement changes the value of the first element in cars:
car1[0]="kaif";
console.log(car1[0])
3.//acces full array
console.log(car)
4.//create person and acces elemet
const person=["kaif","shaikh",21]
console.log(person[0],person[2])
5.//the lenght property of array
const fruits=["banana","orange","apple","mango"];
console.log(fruits.length)
6.//adding array element
const fruits1=["banana","orange","Apple"];
console.log(fruits1)
function myFunction(){
    fruits[fruits1.length]="lemon";
}
7.//console.log(fruits1)

8.//pop and push in the array
const fruits2=["banana","orange","Apple","Mango"];
console.log(fruits2)
9.//fruits2.pop()
fruits2.push("Kiwi")
10.//console.log(fruits2)
console.log(fruits2)
11.//shift() remove the first letter of the array
const fruits3=["banana","orange","Apple","Mango"];
fruits3.shift();
console.log(fruits3)
12.//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
const fruits4=["Banana","orange","Apple"]
fruits4.unshift("Lemon")
console.log(fruits4)
13.//delete the array element
const fruits6=["banana","Apple","Pomgerante","Milk"]
console.log("The first fruits is:"+fruits6[0])
delete fruits6[0];
console.log("The first fruits is " + fruits6[0])
14.//The concat() method creates a new array by merging (concatenating) existing arrays:
const mygirls=["zara","sara"]
console.log("My girls="+mygirls)
const mybois=["kaif","saif"]
console.log("My bois=" +mybois)
const mychildren=mygirls.concat(mybois);
console.log( "My childrens= "+ mychildren)
15.//merging three array
const ar1=["kaif","srk"]
const ar2=["zaid","u.v"]
const ar3=["harun","Anas"]
const myfreinds=ar1.concat(ar2,ar3)
console.log("My freinds are ="+myfreinds)
16.//Example (Merging an Array with Values)
const myarr=["kaif","srk","zaid"]
const myfreinds1=myarr.concat("Anas")
console.log(myfreinds1)
17.//sorting the array
//The sort() method sorts an array alphabetically
const items=["Apple","Banana","Orange","Grapes"]
console.log("Fruits are="+items)
items.sort()//sort function
console.log("Fruits are sort alpahbetically= "+ items)
//Reverse the array The reverse() method reverses the elements in an array.
//By combining sort() and reverse() you can sort an array in descending order:
const items2=["Apple","Grapes","Mango","Papaya","Watermelon"]
console.log("my fruits are=" + items2)
items2.sort();
items2.reverse();
console.log("fruits are in reverse order="+ items2)
//numeric sort sort the arry in ascending and descending order
const points=[40,100,1,5,25,10]
console.log("Numbers before sort="+points)
points.sort(function(a,b){return a-b})
console.log("Numbers after sort in ascending order="+points)
points.sort(function(a,b){return b-a})
console.log("Numbers after sort in descending order" + points)
//Find highest and lowest element in the array
const points2=[40,100,1,5,25,10];
console.log("The array points are="+points2)
points2.sort(function(a,b){return a-b})
points2.sort(function(a,b){return b-a})
console.log("The lowest no in the array is ="+ points2[0])
//console.log("The Highest no in the array is ="+ points2[0])
//using Math min max ()
const points3 = [40, 100, 1, 5, 25, 10];
console.log("The points are="+ points3)
function myArrayMax(arr) {
    return Math.max.apply(null, arr);
  }
