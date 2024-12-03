import React, { useRef, useState } from 'react';

const plus = (number1:number, number2:number) => {
	return (number1 + number2)%5
}

const multi = (number1:number, number2:number) => {
	return (number1 * number2)%5
}

const minus = (number1:number, number2:number) => {
	const res = number1 - number2;
	return res < 0 ? res + 5 : res;
}

const divide = (number1:number, number2:number) => {
	let res = 0;
	for (let i = 0; i<5;i++) {
		if (multi(number2, i) === 1) {
			res = multi(number1, i);
		}
	}
	return res;
}

type op = '+' | '-' | '*' | '/'

const calculator = (number1:number, number2:number, operation:op)=>{
	const operators = {
		'+':plus,
		'-':minus,
		'*':multi,
		'/':divide
	}
	return operators[operation](number1, number2)
}

export const Blok1 = () => {
	const number1 = useRef<HTMLInputElement>(null);
	const number2 = useRef<HTMLInputElement>(null);
	const operation = useRef<HTMLInputElement>(null);

	const [result, setResult] = useState<number|null>(null);
	const [error, setError] = useState<string | null>(null);

	const calculate = () => {
		if (number1.current && number2.current && operation.current) {
			const num1 = +(number1.current?.value);
			const num2 = +(number2.current?.value);
			const oper = operation.current?.value as op;
			if (num1 > 4  || num1 <0) {
				setError('Ошибка в первом числе')
			}
			else if (num2 > 4  || num2 <0) {
				setError('Ошибка во втором числе')
			}
			else if (oper !== '+' && oper !=="-" && oper !== "*" && oper !=='/') {
				setError('Ошибка в первом числе')
			}
			else  setResult(calculator(num1, num2, oper))
		}
	}

	const onChange = () => {
		setResult(null);
		setError(null);
	}

	return (
		<div style={{
			padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'start',
		}}>
			<input onChange={onChange} placeholder={'Число 1'} ref={number1}/>
			<input onChange={onChange} placeholder={'Операция'} ref={operation}/>
			<input onChange={onChange} placeholder={'Число 2'} ref={number2}/>
			<button onClick={calculate}>Решаем</button>
			<div style={{
				fontSize: '40px', color: 'red'
			}}>{result}</div>
			<div style={{
				fontSize: '40px', color: 'red'
			}}>{error}</div>
		</div>
	);
};