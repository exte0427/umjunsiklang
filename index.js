const varIndex = prompt(`몇 번째 변수를 사용할 지 입력 해 주세요(0번째 부터 시작)`);
const endNum = prompt(`초기값을 정해주세요 (반복문이 진행될 수록 초기값에서 -1식 더해집니다)(변수 이름을 사용하실려면 어, 어어 와 같이 입력 해 주세요)`);
const codeFirst = prompt(`반복문이 들어가는 코드의 번호를 입력 해 주세요`);
const codeLength = prompt(`반복문 안에 여러분이 짤 코드의 줄 수를 입력 해 주세요`);

const mainCode = `
(varIndex)엄(strNum)
(yourCode)(varIndex)엄(varIndex)어,
동탄(varIndex)어?준(codeLength)(codeFirst)....
준(codeFirst).`
.replaceAll(`(varIndex)`, `어`.repeat(varIndex))
.replaceAll(`(strNum)`, isFinite(endNum) ? `.`.repeat(endNum) : endNum)
.replaceAll(`(codeLength)`, `.`.repeat(codeLength))
.replaceAll(`(codeFirst)`, `.`.repeat(codeFirst))
.replaceAll(`(yourCode)`,`//당신의 코드\n`.repeat(codeLength))

console.log(mainCode);