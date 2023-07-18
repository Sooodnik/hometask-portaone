
const text = `C makes it easy for you to shoot yourself in the foot. C++ makes that harder, but when you do, it blows away your whole leg. (с) Bjarne Stroustrup`;

//let someText = prompt('Enter text', '');
let uniqChar = '';

function findUniqChar(str) {

    const regExp = /[a-zA-Z]+/gi;
    const newArr = [...str.match(regExp)];
    const firstLettersArr = [];
    //console.log(newArr);
    const arrChar = [];
    

    for (let i = 0; i < newArr.length; i++) {
        let word = newArr[i];
        //console.log(word);
        const arrWords = word.split('');
        //console.log(arrWords);
        for (let j = 0; j < 1; j++) {
            const duplicatesArr = arrWords.filter((number, index, numbers) => {
            return (numbers.indexOf(number) !== index);
        });
            //console.log(duplicatesArr);
            const uniqArr = arrWords.filter(x => duplicatesArr.indexOf(x) === -1);
            //console.log(uniqArr);        
            firstLettersArr.push(...uniqArr[0]);
        }    
    }
    //console.log(firstLettersArr);
    function findFirstUniqLetter() {
        uniqChar = String(firstLettersArr.filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el)));
    }

    findFirstUniqLetter();
    console.log(uniqChar);
    console.log(uniqChar[0]);
}

findUniqChar(text);

//alert(`Uniq char is - ${uniqChar[0]}`);



////////////////////////////////////////////////////////////////////////////////////
const values = [1, 100, 5, 6, 13, 13, 22, 5];
// предположим, что у нас есть числовой массив
const duplicates = values.filter((number, index, numbers) => {
//console.log(number); // number - элемент массива
//console.log(index); // index - индекс элемента массива
//console.log(numbers); // numbers - представление массива values
return (numbers.indexOf(number) !== index);
});

//console.log(duplicates);
//let difference = arrA.filter(x => !arrB.includes(x));
