
// const text = `The Tao gave birth to machine language.  Machine language gave birth
// to the assembler.
// The assembler gave birth to the compiler.  Now there are ten thousand
// languages.
// Each language has its purpose, however humble.  Each language
// expresses the Yin and Yang of software.  Each language has its place within
// the Tao.
// But do not program in COBOL if you can avoid it.
//         -- Geoffrey James, "The Tao of Programming"`;

let someText = prompt('Enter text', '');
let uniqChar = '';

function findUniqChar(str) {

    const regExp = /[a-zA-Z]+/gi;
    const newArr = [...str.match(regExp)];
    const firstLettersArr = [];

    for (let i = 0; i < newArr.length; i++) {
        let word = newArr[i];
        const arrWords = word.split('');
        for (let j = 0; j < 1; j++) {
            const duplicatesArr = arrWords.filter((number, index, numbers) => {
            return (numbers.indexOf(number) !== index);
        });
            const uniqArr = arrWords.filter(x => duplicatesArr.indexOf(x) === -1);
            firstLettersArr.push(...uniqArr[0]);
        }    
    }
    function findFirstUniqLetter() {
        uniqChar = String(firstLettersArr.filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el)));
    }

    findFirstUniqLetter();
    console.log(uniqChar);
    console.log(uniqChar[0]);
}

findUniqChar(someText);

alert(`Uniq char is - ${uniqChar[0]}`);
