import hello, {birthday, calculate, goodbye} from "./hello";

let menu: number = 2
let year: number = 0
let name, profile, message: string = ""
switch (menu) {
    case 0:
        name = "홍길동"
        message = goodbye(name)
        console.log(message)
        break
    case 1:
        name = "김유신"
        year = 2002
        profile = ""
        message = birthday(name,year)
        console.log(message)
        break
    case 2:
        let num1:number = 10
        let num2:number = 30
        let addResult: number = calculate(num1,num2)
        console.log(`덧셈결과 : ${addResult}`)
    default :
        console.log("존재하지 않는 케이스입니다.")
        break
}