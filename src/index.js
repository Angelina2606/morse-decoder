const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    
    // Разбиваем строку на куски по 10 символов
    for (let i = 0; i < expr.length; i += 10) {
        const chunk = expr.slice(i, i + 10);
        arr.push(chunk);
    }

    let result = '';

    // Обрабатываем каждый кусок
    for (let i = 0; i < arr.length; i++) {
        const chunk = arr[i];

        // Если кусок состоит из 10 нулей, это пробел
        if (chunk === '**********') {
            result += ' ';
            continue;
        }

        // Преобразуем бинарный код в азбуку Морзе
        let morseChar = '';
        for (let j = 0; j < chunk.length; j += 2) {
            const pair = chunk.slice(j, j + 2);
            if (pair === '10') {
                morseChar += '.';
            } else if (pair === '11') {
                morseChar += '-';
            }
        }

        // Декодируем символ из азбуки Морзе
        result += MORSE_TABLE[morseChar] || '';
    }

    return result;
}

module.exports = {
    decode
};