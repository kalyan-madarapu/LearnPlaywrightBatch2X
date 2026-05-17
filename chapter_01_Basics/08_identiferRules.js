/*
Identifier rules with examples (all in one place)
*/

// 1) Must start with a letter, _ or $
var $ = 10;
var _ = 20;
var p = 19;

// 2) Subsequent characters can be letters, digits, _ or $
var $myVar = 30;
var _myVar = 40;
var myVar1 = 50;
var kal$yan = "kalyan";

// 3) Cannot start with a digit
// var 1abc = 10; // invalid

// 4) Cannot be a reserved keyword
// var class = "test"; // invalid

// 5) Case-sensitive (these are different)
var name = "lower";
var Name = "upper";

// 6) No spaces or hyphens
// var my name = "bad"; // invalid
// var my-name = "bad"; // invalid

// 7) Unicode letters are allowed
var cafe = "ascii";
// var café = "unicode"; // valid but keep ASCII only in source

// 8) Should be unique within the same scope
// var name = "duplicate"; // duplicate in same scope