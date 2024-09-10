function checkEvenOdd(number) {
	// 여기에 코드를 작성하세요
    if(number%2==0){
        console.log("짝수입니다");
    } else{
        console.log("홀수입니다.");
    }
}
//문제 2: 나이를 입력받아 18세 이상이면 "성인입니다",
//       그렇지 않으면 "미성년자입니다"를 출력하는 함수를 작성하세요.
function checkAge(age) {
	// 여기에 코드를 작성하세요
    if (age>=18){
        console.log("성인입니다.");
    } else{
        console.log("미성년자입니다.");
    }
}

//문제 3: switch문을 사용하여 요일(1~7)을 입력받고 해당 요일의 이름을 출력하는 프로그램을 작성하세요. (1은 월요일, 7은 일요일)
function getDayName(dayNumber) {
	// 여기에 코드를 작성하세요
    switch (dayNumber){
        case 1 :
            console.log("월요일입니다");
            break;
        case 2 :
            console.log("화요일입니다");
            break;
        case 3 :
            console.log("수요일입니다");
            break;
        case 4 :
            console.log("목요일입니다");
            break;
        case 5 :
            console.log("금요일입니다");
            break;
        case 6 :
            console.log("토요일입니다");
            break;
        case 7 :
            console.log("일요일입니다");
            break;
    }
}

//문제 4: 1부터 100까지의 숫자 중에서 짝수만 출력하는 for 반복문을 작성하세요.
function printEvenNumbers() {
	// 여기에 코드를 작성하세요
    for(let i = 1; i<=100; i++){
        if(i%2==0){
            console.log(i);
        }
    }
}

//문제 5: while 문을 사용하여 5부터 15까지의 숫자를 출력하는 프로그램을 작성하세요.
function printNumbers() {
	// 여기에 코드를 작성하세요
    let num=5;
    while(num<16){
        console.log(num);
        num++;
    }
}

//문제 6: do-while 문을 사용하여 사용자가 입력한 숫자가 10이 될 때까지 숫자를 계속 입력받고, 입력된 숫자를 출력하는 프로그램을 작성하세요.
function inputUntilTen() {
	// 여기에 코드를 작성하세요
	let num = 0;
    do {
        console.log(num);
        num++;
    }while(num<11)
}

console.log(inputUntilTen());

//문제 7: 두 개의 숫자를 더하는 함수 addNumbers를 선언하고, 해당 함수를 호출하여 결과를 출력하세요.
function addNumbers(a, b) {
	// 여기에 코드를 작성하세요
    return a+b;
}

// 함수 호출
console.log(addNumbers(2,3));

//문제 8: 세 개의 숫자를 곱한 결과를 반환하는 함수 multiplyNumbers를 선언하고 호출하여 결과를 출력하세요.
function multiplyNumbers(a, b, c) {
	// 여기에 코드를 작성하세요
    return a*b*c;
}

// 함수 호출
console.log(multiplyNumbers(1,2,3));

//문제 9: 이름을 인자로 받아서 "안녕하세요, [이름]님!"을 출력하는 함수 greet를 선언하고 호출하세요.
function greet(name) {
	// 여기에 코드를 작성하세요
    return `안녕하세요, ${name}님!`;
}

// // 함수 호출
console.log(greet("홍길동"));

//문제 10: 두 숫자의 차를 구하는 함수 표현식을 작성하고 이를 호출하여 결과를 출력하세요.
const subtract = function(a, b) {
	// 여기에 코드를 작성하세요
	return a-b
};

// // 함수 호출
console.log(subtract(5,2));

//문제 11: 세 개의 숫자를 더한 값을 반환하는 함수 표현식을 작성하고, 이를 호출하여 결과를 출력하세요.
const sum = function(a, b, c) {
	// 여기에 코드를 작성하세요
	return a+b+c;
};

// // 함수 호출
console.log(sum(5,10,15));

//문제 12: 두 숫자를 더한 값을 반환하는 화살표 함수를 작성하고 호출하여 결과를 출력하세요.
const add = (a, b) => {
	// 여기에 코드를 작성하세요
	return a+b;
};

// // 함수 호출
console.log(add(5,10));

//문제 13: 숫자를 제곱하여 반환하는 화살표 함수를 작성하고 호출하여 결과를 출력하세요.
const square = (n) => {
	// 여기에 코드를 작성하세요
	return n**2;
};

// // 함수 호출
console.log(square(4));

//문제 14: 배열을 입력받아 배열의 각 요소에 2를 곱한 새로운 배열을 반환하는 화살표 함수를 작성하세요. (map 메소드를 사용하세요)
const doubleArray = (arr) => {
    // 	// 여기에 코드를 작성하세요
        return arr.map(element => element * 2);
    };
    
// // 함수 호출
console.log(doubleArray([2,4]));

//문제 15: 나이를 인자로 받아 "성인" 또는 "미성년자"를 반환하는 화살표 함수를 작성하세요.
const checkAge = (age) => {
	// 여기에 코드를 작성하세요
	return age>=20 ? "성인" : "미성년자" ; 
};

// 함수 호출
console.log(checkAge(20));

//문제 16: 두 개의 숫자를 입력받아, 큰 숫자를 출력하는 함수를 작성하세요.
function findMax(a, b) {
	// 여기에 코드를 작성하세요
	if (a>b){
		return a;
	} else if(a<b){
		return b;
	}

}
console.log(findMax(2,3));

//문제 17: 학생의 점수를 입력받아 90점 이상은 'A', 80점 이상은 'B', 70점 이상은 'C', 그 이하는 'F'를 출력하는 프로그램을 작성하세요.
function grade(score) {
	// 여기에 코드를 작성하세요
	if( score >= 90 ){
		console.log("당신의 학점은 A입니다.");
	} else if ( score >= 80 && score < 90 ){
		console.log("당신의 학점은 B입니다.");
	} else if ( score >= 70 && score < 80 ){
		console.log("당신의 학점은 C입니다.");
	} else if ( score < 60 ){
		console.log("당신의 학점은 F입니다.");
	}
}
grade(score);

//문제 18: switch문을 사용하여 사용자가 입력한 달(month)에 맞는 계절을 출력하는 프로그램을 작성하세요. (예시: 3 ~ 5월은 봄, 6 ~ 8월은 여름, 9 ~ 11월은 가을, 12 ~ 2월은 겨울)
function getSeason(month) {
	// 여기에 코드를 작성하세요
	switch(month){
		case 3:
		case 4:
		case 5:
			console.log("봅입니다.");
			break;
		case 6:
		case 7:
		case 8:
			console.log("여름입니다.");
			break;
		case 9:
		case 10:
		case 11:
			consol.log("가을입니다.");
			break;
		case 12:
		case 1:
		case 2:
			console.log("겨울입니다,");
			break;
	}

}

//문제 19: for문을 사용하여 1부터 10까지의 숫자의 합을 구하는 프로그램을 작성하세요.
function sumNumbers() {
	// 여기에 코드를 작성하세요
    let sum = 0;
	for (let i = 1; i < 11; i++){
		sum = sum + i;
	}
    console.log(sum);
}

//문제 20: while문을 사용하여 1부터 20까지의 숫자 중 3의 배수를 출력하는 프로그램을 작성하세요.
function printMultiplesOfThree() {
	// 여기에 코드를 작성하세요
	let num = 1;
	while(num <= 20){
		if(num % 3 == 0){
			console.log(num);
		}
		num++;
	}
}

//문제 21: do-while문을 사용하여 0부터 100까지의 숫자 중 10의 배수를 출력하는 프로그램을 작성하세요.
function printMultiplesOfTen() {
	// 여기에 코드를 작성하세요
	let num = 0;
	do{
		num++;
		if(num%10 == 0){
			console.log(num);
		}
	}while(num <= 100);
}

//문제 22: 세 개의 숫자 중에서 가장 큰 숫자를 찾는 함수를 선언하고 호출하세요.
function findMaxOfThree(a, b, c) {
	// 여기에 코드를 작성하세요
	return Math.max(a,b,c);
}

// 함수 호출
console.log(findMaxOfThree(5,2,10));

//문제 23: 두 문자열을 입력받아 두 문자열이 동일하면 "동일함"을, 그렇지 않으면 "동일하지 않음"을 출력하는 함수를 작성하세요.
function compareStrings(str1, str2) {
	// 여기에 코드를 작성하세요
	return str1 === str2 ? console.log("동일함"):console.log("동일하지 않음");
}

// 함수 호출
compareStrings("kim","lee");

//문제 24: 배열을 입력받아 배열에 있는 숫자들의 평균을 계산하는 함수를 작성하세요.
function calculateAverage(numbers) {
	// 여기에 코드를 작성하세요
    let sum = 0;
	for(let i = 0; i < numbers.length; i++){
		sum += numbers[i];
	}
	return sum / numbers.length;
}

// 함수 호출
console.log(calculateAverage([5,5,5]));

//문제 25: 배열의 모든 요소를 제곱한 값을 반환하는 함수 표현식을 작성하고, 이를 호출하세요.
const squareArray = function(arr) {
	// 여기에 코드를 작성하세요
	for(let i = 0; i < arr.length; i++){
		return Math.pow(arr[i],2);
	}
};

// 함수 호출
console.log(squareArray([3,6]));

//문제 26: 두 문자열을 합친 후, 그 길이를 반환하는 함수 표현식을 작성하세요. (Hint: String.prototype.lengtn)
const combineAndLength = function(str1, str2) {
	// 여기에 코드를 작성하세요
	let addStr = str1 + str2;
	return addStr.length;
};

// 함수 호출
console.log(combineAndLength("aa","bb"));

//문제 27: 배열에서 가장 큰 숫자를 찾는 함수 표현식을 작성하세요.
const findMaxInArray = function(arr) {
	// 여기에 코드를 작성하세요
	return Math.max.apply(null,arr);
};

// 함수 호출
console.log(findMaxInArray([2,6,4,9]));

//문제 28: 두 문자열을 입력받아 그 길이를 비교하고, 더 긴 문자열을 반환하는 화살표 함수를 작성하세요.
const getLongerString = (str1, str2) => {
	// 여기에 코드를 작성하세요
	if (str1.length>str2.length){
		return str1;
	} else if(str1.length < str2.length){
		return str2;
	}
};

// 함수 호출
console.log(getLongerString("str11","str1"));

//문제 29: 숫자로 이루어진 배열을 입력받아, 배열의 모든 요소에 5를 더한 새로운 배열을 반환하는 화살표 함수를 작성하세요.
const addFiveToArray = (arr) => {
    // 여기에 코드를 작성하세요
	for (let i = 0; i < arr.length; i++){
		console.log(arr[i]+5);
	}
};

// 함수 호출
addFiveToArray([1,2,3]);

//문제 30: 세 개의 숫자를 입력받아, 세 숫자의 합이 100 이상이면 "합격", 그렇지 않으면 "불합격"을 반환하는 화살표 함수를 작성하세요.
const checkSum = (a, b, c) => {
    // 여기에 코드를 작성하세요
	return (a+b+c >= 100) ? "합격" : "불합격";
};

// 함수 호출
console.log(checkSum(5,5,50));
