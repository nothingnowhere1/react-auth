import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Authorization2() {
	const refEmail = useRef<HTMLInputElement>(null)
	const refPassword = useRef<HTMLInputElement>(null)

	const [error, setError] = useState(false);
	const navigate = useNavigate();

	const onSubmit = () => {
		// Фетч запрос
		if (refEmail.current && refEmail.current.value !== '' && refPassword.current && refPassword.current.value === '111') {
			navigate('/yep');
		}
		setError(true);
	};

	return (
		<>
			<div style={{
				background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,255,196,1) 100%)',
				display: 'flex', flexDirection: 'column', gap: '10px', width:'100vw', height:'100vh',
				justifyContent:'center', alignItems:'center',color:'white'
			}}>
				<div style={{
					display: 'flex', flexDirection: 'column', gap: '8px'
				}}>
					<label>Введите email</label>
					<input style={{
						width:'200px',
						borderRadius:'30px',
						padding:'10px 20px 10px 20px',
						border:'none',
						boxShadow: '0px 5px 7px 2px black',
					}} ref={refEmail} type={'email'}/>
				</div>
				<div style={{
					display: 'flex', flexDirection: 'column', gap: '8px',
				}}>
					<label style={{
						alignSelf:'start'
					}}>Введите пароль</label>
					<input style={{
						borderRadius:'30px',
						padding:'10px 20px 10px 20px',
						width:'200px',
						border:'none',
						boxShadow: '0px 5px 7px 2px black',
					}} ref={refPassword} type={'password'}/>
				</div>
				{error && <div style={{
					color:'red'
				}}>Ошибочка вышла. Исправляйка пароль</div>}
				<button style={{
					color:'white',
					backgroundColor:'blue',
					padding: '10px 20px 10px 20px',
					borderRadius:'20px',
				}} onClick={onSubmit}>Авторизоваться</button>
			</div>
		</>
	);
}