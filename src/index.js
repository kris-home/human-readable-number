module.exports = function toReadable (number) {
    const
    ten = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    toTen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    other = ['ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let str = number.toString(), 
result = '';

if(str.length == 1) return toTen[number];
else if(str.length == 2){
    if(str[0] == 1) result = other[parseInt(str[1])];
    else result = (ten[parseInt(str[0])-1] + ((str[1]!='0')?(' ' + toTen[parseInt(str[1])]):''));
}
else if(str.length == 3){
if (str[1] == 1){
    // if(str[2] == 0)result = toTen[parseInt(str[0])]+' hundred';
    // else 
    result = (toTen[parseInt(str[0])]+' hundred' + ((str[2]=='0')?'':(' ' + other[parseInt(str[2])])));
    console.log(result);
    console.log(str[2]);
}
else result = (toTen[parseInt(str[0])]+' hundred' + ((str[1]!='0')?(' ' + ten[parseInt(str[1])-1]):'') + ((str[2]!='0')?(' ' + toTen[parseInt(str[2])]):''));
}

return result;

}
