import React, { useState } from 'react';

const plus = (number1: number, number2: number) => {
	return (
		number1 + number2
	) % 5;
};

const multi = (number1: number, number2: number) => {
	return (
		number1 * number2
	) % 5;
};

const minus = (number1: number, number2: number) => {
	const res = number1 - number2;
	return res < 0 ? res + 5 : res;
};

const divide = (number1: number, number2: number) => {
	let res = 0;
	for (let i = 0; i < 5; i++) {
		if (multi(number2, i) === 1) {
			res = multi(number1, i);
		}
	}
	return res;
};

type op = '+' | '-' | '*' | '/'

const calculator = (number1: number, number2: number, operation: op) => {
	const operators = {
		'+': plus, '-': minus, '*': multi, '/': divide
	};
	return operators[operation](number1, number2);
};

export const Blok1 = () => {
	const [number1, setNumber1] = useState<number | null>(null);
	const [number2, setNumber2] = useState<number | null>(null);
	const [operation, setOperation] = useState<op>('+');

	const [result, setResult] = useState<number | null>(null);
	const [error, setError] = useState<string | null>(null);

	const calculate = () => {
		if (number1 && number2 && operation) {
			const num1 = +(
				number1
			);
			const num2 = +(
				number2
			);
			const oper = operation;
			if (num1 > 4 || num1 < 0) {
				setError('Ошибка в первом числе');
			} else if (num2 > 4 || num2 < 0) {
				setError('Ошибка во втором числе');
			} else if (oper !== '+' && oper !== '-' && oper !== '*' && oper !== '/') {
				setError('Ошибка в первом числе');
			} else setResult(calculator(num1, num2, oper));
		}
	};

	const onChangeOp = (e: React.MouseEvent<HTMLButtonElement>) => {
		setResult(null);
		setError(null);
		setOperation(e.currentTarget.name as op);
	};

	const onChangeNum = (e: React.MouseEvent<HTMLButtonElement>) => {
		setResult(null);
		setError(null);
		if (number1 === null) {
			setNumber1(+(
				e.currentTarget.name
			));
		} else if (number2 === null) {
			setNumber2(+(
				e.currentTarget.name
			));
		}
	};

	const onDelete = () => {
		setResult(null);
		setError(null);
		setNumber2(null);
		setNumber1(null);
	};

	return (
		<div style={{
			padding: '40px', display: 'flex', gap: '50px', flexDirection: 'row', alignItems: 'start'
		}}>
			<div style={{
				display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px'
			}}>
				<button onClick={onChangeNum} name={'0'}>0</button>
				<button onClick={onChangeNum} name={'1'}>1</button>
				<button onClick={onChangeNum} name={'2'}>2</button>
				<button onClick={onChangeNum} name={'3'}>3</button>
				<button onClick={onChangeNum} name={'4'}>4</button>
			</div>
			<div style={{
				display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px'
			}}>
				<button onClick={onChangeOp} name={'+'}>+</button>
				<button onClick={onChangeOp} name={'-'}>-</button>
				<button onClick={onChangeOp} name={'*'}>*</button>
				<button onClick={onChangeOp} name={'/'}>/</button>
			</div>
			<button onClick={onDelete}>Delete</button>
			<button onClick={calculate}>Решаем</button>
			<div style={{
				fontSize: '40px',
				color: 'red',
				border: '1px solid black',
				padding: '20px',
				borderRadius: '20px',
				backgroundColor: 'lightgray'
			}}>
				{`${number1 ?? 'x'} ${operation ?? ' '} ${number2 ?? 'y'} = ${result ?? ''}`} (mod 5)
			</div>
			<div style={{
				fontSize: '40px', color: 'red'
			}}>{error}</div>
			<style>{`
                button {
                    background-color: blue;
                    color: white;
                    border-radius: 20px;
                    padding: 20px;
                    height: min-content;
			`}
			</style>
		</div>
	);
};