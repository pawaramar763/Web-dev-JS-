const marks = 30;

if (marks>=45) {
    console.log('pass');
    if (marks>=90) {
        console.log('O Grade');
    } else if (marks<=70) {
        console.log('B Grade');
    } 
    else if(marks<=80){
        console.log('A Grade');
    }
} else {
    console.log('better luck next time');
}