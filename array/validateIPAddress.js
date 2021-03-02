/*
Validate IP Address
Validate an IP address (IPv4). An address is valid if and only if it is in the form "X.X.X.X",
where each X is a number from 0 to 255.

For example, "12.34.5.6", "0.23.25.0", and "255.255.255.255" are valid IP addresses,
while "12.34.56.oops", "1.2.3.4.5", and "123.235.153.425" are invalid IP addresses.
*/

function oneBiteIsValid (chunk) {
    // if empty, return false
    if(chunk.length === 0) return false;

    // if not a digit, return false
    for (let i = 0; i < chunk.length; i++) {
        if (chunk[i] < '0' || chunk[i] > '9') return false
    }

    // if str has a leading 0 and isn't 0, return false
    if (chunk.length >= 2 && chunk[0] == '0') return false;

    return 0 <= Number(chunk) && Number(chunk) <= 255;
}

function validate(IP) {
    chunks = IP.split('.');
    if(chunks.length !== 4) return false;

    for(let c = 0; c < chunks.length; c++) {
        let chunck = chunks[c];
        if(!oneBiteIsValid(chunck)) return false;
    }

    return true;
}

let testA = '192.168.123.456';
console.log(validate(testA), 'should be false');

let testB = '0.0.0.0'
console.log(validate(testB), 'should be true');

let testC = '0123.24.59.99'
console.log(validate(testC), 'should be false');

let testD = '192.168.123.456'
console.log(validate(testD), 'should be false');