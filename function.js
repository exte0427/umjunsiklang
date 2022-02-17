const varName = prompt(`함수를 사용할 때 쓰이는 변수의 번호를 입력 해 주세요(0부터 시작)`);
const codeIndex = prompt(`함수의 시작부분이 작성될 코드의 줄을 입력 해 주세요`);
const codeLength = prompt(`작성할 함수의 코드 줄 수를 입력 해 주세요`);
const var2Name = prompt(`함수를 사용할 때 쓰이는 2번째 변수의 번호를 입력 해 주세요(0부터 시작)`);

const code = `
//함수 시작
(varName)엄(codeIndex)...
준(codeEnd)(codeLength)
준(var2Name)어
//함수 종료

//호출시
(var2Name)엄(호출할 줄 번호)..
준(varName)어
`
.replaceAll(`(varName)`, `어`.repeat(varName))
.replaceAll(`(var2Name)`, `어`.repeat(var2Name))
.replaceAll(`(codeIndex)`, `.`.repeat(codeIndex))
.replaceAll(`(codeEnd)`, `.`.repeat(Number(codeIndex) + Number(codeLength) + 4))
.replaceAll(`(codeLength)`, `\n//당신의 코드`.repeat(codeLength));

console.log(code);