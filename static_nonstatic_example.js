
/*You need to create a class with the static and non-static methods as well as variables. It will be a simple class of our Playwright 2x batch. 
You will be also printing out the students. Create 10 objects of students and print them. Also create a print method.*/

class Students {

    static course = "Playwright 2x batch";

    constructor(name) {
        this.name = name;
    }

    Print() {
        console.log(`Name of the student is : ${this.name}`);
    }
    static print2() {
        console.log(`***${this.course}***`);
    }
}

Students.print2();

let s1 = new Students("kalyan")
let s2 = new Students("suesh")
let s3 = new Students("Sharma")
let s4 = new Students("Dinesh")
let s5 = new Students("Rakesh")
let s6 = new Students("Rajesh")
let s7 = new Students("Vinay")
let s8 = new Students("Dilip")
let s9 = new Students("Rekha")
let s10 = new Students("Vidya")

s1.Print();
s2.Print();
s3.Print();
s4.Print();
s5.Print();
s6.Print();
s7.Print();
s8.Print();
s9.Print();
