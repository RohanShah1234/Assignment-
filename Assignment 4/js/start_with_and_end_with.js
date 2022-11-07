// program to check if a string starts with 'S' and ends with 'G'

function checkString(str) {

    // check if the string starts with S and ends with G
    if((str.startsWith('S') || str.startsWith('s')) && (str.endsWith('G') || str.endsWith('g'))) {
        document.write('The string starts with S and ends with G');
    }
    else if(str.startsWith('S') || str.startsWith('s')) {
        document.write('The string starts with S but does not end with G');
    }
     else if(str.endsWith('G') || str.endsWith('g')) {
        document.write('The string starts does not with S but end with G');
    }
    else {
        document.write('The string does not start with S and does not end with G');
    }
}


// take input
let string = prompt('Enter a string: ');
checkString(string);