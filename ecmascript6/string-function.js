

function stringFunctions(){

    const str = "My Name is DHeeraj and I am a Software Developer";
    const result = str.includes("Software");
    console.log(result);
    console.log(str.toLowerCase());
    console.log(str.toUpperCase());

    const one = 1;
    const two = "two";
    console.log(Number.isInteger(one));
    console.log(Number.isInteger(two));
    const concatresult = one+undefined;
    console.log(Number.isNaN(concatresult));
}

stringFunctions();