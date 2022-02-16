const findMeasure = (num) => {
    let returningObj = {};
    const max = Math.ceil(Math.sqrt(num));

    for (let i = max; i > 0; i--){
        if (num % i==0) {
            returningObj = { num1: (i), num2: (num / i) };
            break;
        }
    }
    return returningObj;
}
const findUmmStr = (num) => {
    const measure = findMeasure(num);
    return `${`.`.repeat(measure.num1)} ${`.`.repeat(measure.num2)}`
}
const str = prompt("변환하고자 하는 문자열을 입력하세요");
let returningVal="";
for (let i = 0; i < str.length; i++) {
    const strNum = str.charAt(i).charCodeAt(0);
    returningVal += `식${findUmmStr(strNum)}ㅋ\n`;
}
console.log(returningVal);