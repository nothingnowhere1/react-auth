import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Authorization() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);
	const navigate = useNavigate();

	const onSubmit = () => {
		// Фетч запрос
		if (password === '111' && email !== '') {
			navigate('/yep');
		}
		setError(true);
	};

	return (
		<>
			<div style={{
				display: 'flex', flexDirection: 'column', gap: '10px'
			}}>
				<div style={{
					display: 'flex', flexDirection: 'row', gap: '8px'
				}}>
					<label>Введите email</label>
					<input value={email} onChange={(e) => setEmail(e.target.value)} type={'email'}/>
				</div>
				<div>
					<label>Введите пароль</label>
					<input value={password} onChange={(e) => {
						setPassword(e.target.value);
						setError(false);
					}} type={'password'}/>
					{error && <p>Ошибочка вышла. Исправляйка пароль</p>}
				</div>
				<button onClick={onSubmit}>Авторизоваться</button>
			</div>
		</>
	);
}