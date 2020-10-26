// Iteration 1: Names and Input


let hacker1 = ("Pedro");
console.log(`the driver´s name is ${hacker1}`);

let hacker2 = ("Lourenço");
console.log(`the navigator´s name is ${hacker2}`);



if (hacker1.lenght > hacker2.length) {
    console.log("hacker1")
    } else {
      console.log("hacker2")
    }
    console.log ( `It seems that the navigator has the longest name, it has ${hacker2.length} characters` ) ;


// Iteration 2: Conditionals



const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue quam, bibendum maximus viverra elementum, pulvinar eu sem. Mauris feugiat euismod nisl eu mattis. Suspendisse pulvinar elit a massa gravida sollicitudin. Cras a lacinia mi, dapibus ultrices justo. Sed viverra ornare feugiat. Duis convallis nisi velit, at aliquet justo feugiat ac. Maecenas non massa ut erat finibus molestie. Maecenas fermentum velit vel massa ultricies, non pretium elit blandit. Suspendisse eros lorem, vestibulum in mauris eu, bibendum ullamcorper erat. Mauris ipsum nibh, gravida vel ipsum et, tempus fermentum ante. Curabitur ut lacinia diam. Vestibulum malesuada nisl ultrices, sagittis neque ac, dictum est. Pellentesque mauris erat, ultrices eget finibus in, lacinia eu nulla. Nulla dolor neque, tempus et ante sit amet, aliquam commodo arcu. Nulla ut interdum sapien. Praesent ultrices ac erat sit amet lacinia. et Nulla facilisi. Nam ac laoreet ante, ut sollicitudin elit. Integer commodo velit a lorem gravida pharetra. Proin ullamcorper, est id tincidunt lobortis, turpis augue tristique ligula, id interdum lectus nulla ut lorem. Fusce et ultrices mauris."

let totalWords = 0;

for(i=0; i < text.length; i++){
  if(text[i] === " "){
    totalWords++;
  }
}


//console.log(totalWords)

let etTotalCount = 0;

for(i=0; i < text.length; i++){
  const currentLetter = text[i];
  const nextLetter1 = text[i+1];
  const nextLetter2 = text[i+2];
  const nextLetter3 = text[i+3];
  if(
    currentLetter === ' ' &&
    nextLetter1 === 'e' && 
    nextLetter2 === 't' && 
    nextLetter3 === ' '  
  ){
    etTotalCount = etTotalCount + 1;
  }
}
console.log(etTotalCount)

// Iteration 3: Loops

let capitalizeWithSpaces = "";
for (let i = 0; i < hacker1.length; i = i+1){
  const letter = hacker1[i];
  capitalizeWithSpaces += letter.toUpperCase();
  if(!(i === hacker1.length - 1)){
    capitalizeWithSpaces += " ";
  }
  //console.log(capitalizeWithSpaces);
}
//console.log("Final Result", capitalizeWithSpaces);

let resultado = "" ;

for( let i = hacker1.length -1 ; i >= 0 ; i -= 1) {

 resultado += hacker1.charAt(i); 
}
console.log(resultado);