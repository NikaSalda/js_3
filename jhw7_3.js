var arr = ["folder", "mycomputer", "chrome", "opera", "recyclebin"]
var ran = parseInt(Math.random() * arr.length)
var x = arr[ran].split("");

z = "_".repeat(arr[ran].length)
var y = z.split("");

var aso = prompt("wanna play hangman? hint is your desktop")

while(y.join("") != arr[ran]){
    var aso = prompt(" " + y.join(""))
    for(var i in arr[ran]){
        if(aso == x[i]){
            y[i]=aso  
            console.log(y.join("")) 
        }
    }
}
var axali = prompt("you won.")






// პროექტის მესამე დავალება
// hangman
// რენდომზე უნდა აირჩეს სიტყვა მასივიდან რომელიც გამოჩნდება ქვედა ტირეების სახით
// ასოები უნდა შემოიტანოს მომხმარებელმა და სწორად გამოცნობილი ასო უნდა გამოჩნდეს ქვედა ტირის ნაცვლად
 