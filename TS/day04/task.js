// Day 4: Loops
// Activity 1: For Loop
// task 1 : Write a program to print numbers from 1 to 10 using a for loop.
for (var i_1 = 1; i_1 <= 10; i_1++) {
    console.log(i_1);
}
// task 2 : Write a program to print the multiplication table of 5 using a for loop.
for (var i_2 = 1; i_2 <= 10; i_2++) {
    console.log(5 * i_2);
}
// Activity 2: While Loop
// task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
var sum = 0;
var i = 1;
while (i <= 10) {
    sum += i;
    i++;
}
console.log(sum);
// task 4: Write a program to print numbers from 10 to 1 using a while loop.
i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}
// Activity 3: Do...While Loop
// task 5 : Write a program to print numbers from 1 to 5 using a do...while loop.
i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);
// task 6 : Write a program to calculate the factorial of a number using a do...while loop.
var num = 5;
var fact = 1;
i = 1;
do {
    fact *= i;
    i++;
} while (i <= num);
console.log(fact);
// Activity 4: Nested Loops
// task 7 : Write a program to print the following pattern using a nested for loop.
for (var i_3 = 1; i_3 <= 5; i_3++) {
    var star = '';
    for (var j = 1; j <= i_3; j++) {
        star += '*';
    }
    console.log(star);
}
// Activity 5: Loop Control Statements
// task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (var i_4 = 1; i_4 <= 10; i_4++) {
    if (i_4 === 5) {
        continue;
    }
    console.log(i_4);
}
// task 9: Write a program to print numbers from 1 to 10, but skip the number 7 using the break statement.
for (var i_5 = 1; i_5 <= 10; i_5++) {
    if (i_5 === 7) {
        break;
    }
    console.log(i_5);
}
