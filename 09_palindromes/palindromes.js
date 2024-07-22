const palindromes = function (strX) {
    let filtered = strX.toLowerCase().split('').filter((char)=>{
        return /[a-zA-Z0-9]/.test(char);
    });
    const filteredStrX = filtered.join();
    return filteredStrX === filtered.reverse().join();

    // let inverted = filtered.reverse();
    // console.log(inverted);
    // console.log(filteredCopy);
    // console.log(filtered.reverse());


    // let strXFiltered = filtered.join('');
    // let strXFilteredInverted = inverted.join('');

    // console.log(strXFiltered);
    // console.log(strXFilteredInverted);

    
    
    // console.log(strX.split('').reverse().join(''));
    // console.log(strX);
};


// console.log(palindromes('abcd'));

// Do not edit below this line
module.exports = palindromes;
