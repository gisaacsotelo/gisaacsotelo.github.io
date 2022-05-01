Q - An analogy to describe JavaScript and its relationship to HTML and CSS.
----------------------------------------------------------------------------------
Imagine HTML as a wooden puppet, just wood no clothes no paint.
CSS would be the paint and clothing of our puppet, now it becomes more entretaining but we still have to move everythign ourselves.
Javascript would be the strings that help us make the puppet move and interact with other things, is what makes the magic of movement (for th epuppet at least bc we have animations in CCS but dont think in the color red for now...)

----------------------------------------------------------------------------------
Q - Explain control flow and loops using an example process from everyday life, for example, 'waking up' or 'brushing your teeth' (but not those).
----------------------------------------------------------------------------------
Control flow is the steps to follow what will happen if, what will happen when, what if's, and whatnot...

Eating in an all you can eat buffet:

1. Start eating:

2. Are you full?

2.1. (Yes) - (Are you like Im going to die if I dont stop eating full?)
    2.1.1. (Yes) - (For real?)
          2.1.1.1. (Yes!!) - Ok, Stop eating, weakness disgust me....

2.1. (Never!) - Keep eating champ!
    2.1.1. (Nah! just kidding!) - Keep eating champ!
          2.1.1.1. (N-n-n-no...) - Keep eating champ! 


Basically eat till you drop!

-OR-

1. Start eating
2. if (full == true){
  Stop eating
} else {
  Keep eating!
}

----------------------------------------------------------------------------------
Q - Describe what the DOM is and an example of how you might interact with it.

A - 
----------------------------------------------------------------------------------
Q - Explain the difference between accessing data from arrays and objects.
A - 
OBJECTS
I see objects as "things" inside our code, things with characteristics saved inside (key: value).
for objects, these characteristics (saved inside each object) are called properties.
(Objects can cointain arryas inside them)

Example:
let myObject = {
  key1: 'thisValue',
  key2: [value-0, value-1,...value-x]
}

The PROPERTIES inside them can be accessed and manipulated by using dot or bracket notation
 
myObject.key1 // Output will be: thisValue
myObject['key1'] // Output will be: thisValue

ARRAYS
So far we have been using them for storing more information, they are ORDERED collections of information.
We store multiple values inside a single variable.
This ones can also be accessed by bracket notation.

Example:
myArray = [value-0, value-1, ..., value-x]

Accessing it with bracket notation:
myArray[1] // Output: value-1  (*REMEMBER - We count from cero!) 

In short I would distinguish them by 2 things:
1. Objects display their information using the (key: value) notation.
2. Objects represnt things and Arrays represent information (ordered information).

----------------------------------------------------------------------------------
Explain what functions are and why they are helpful.
----------------------------------------------------------------------------------
Functions allow us to re-use code sections that we need multiple times.
Instead of copy pasting every single time, we can define a process (instructions), and put them inside a function, then whenever we need to use the function we can call it.

We also need to define what type of function will it be, if it requires parameters as inputs and if it retunrs anything after.

Example:

function myFunctionName('parametersIfRequired, SeparateThemUsingCommas) {
  Intructions to perform
  ....
  (loops, operations, calls to other functions etc...)
  if (My function returns anything?) {
    return (Whatever is returning)
  } 
}

Free wording:

You can imagine functions as helpers.
Instead of waking up, grinding coffee, brewing, sering it, then drinking it.
Think of a function as if you build a coffee maker that will grinf the required amount of coffee brew it and put in your mug for you.
You build it one and then you can re-use it every morning!

In programming lazy is good be lazy, make as many functions required so you dont have to do all the tedius work of writing and writing again!