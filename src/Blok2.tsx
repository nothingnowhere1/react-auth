import React, { useRef, useState } from 'react';

function babyStepGiantStep(g:number, h:number, p:number) {
	const n = Math.ceil(Math.sqrt(p))
	const values = new Map();

	for (let j = 0; j < n; j++) {
		const value = (g ** j) % p;
		values.set(value, j);
	}

	const post = (g**((p-2)*n))%p;
	let current = h;

	for (let k = 0; k < n; k++) {
		if (values.has(current)) {
			const j = values.get(current);
			return k * n + j;
		}
		current = (current * post * g**k) % p;
	}

	return undefined;
}

export const Blok2 = () => {
	const generator = useRef<HTMLInputElement>(null);
	const value = useRef<HTMLInputElement>(null);
	const module = useRef<HTMLInputElement>(null);

	const [result, setResult] = useState<number|null>(null);
	const [error, setError] = useState<string | null>(null);

	const calculate = () => {
		if (generator.current && value.current && module.current) {
			const gen = +(generator.current?.value);
			const val = +(value.current?.value);
			const mod = +(module.current?.value);
			setResult(babyStepGiantStep(gen, val, mod) ?? 'Нет такого числа')
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
			<input onChange={onChange} placeholder={'Генератор'} ref={generator}/>
			<input onChange={onChange} placeholder={'Значение'} ref={value}/>
			<input onChange={onChange} placeholder={'Модуь'} ref={module}/>
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