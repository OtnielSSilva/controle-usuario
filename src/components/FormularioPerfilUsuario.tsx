import React, { ChangeEvent, useState } from "react";

interface Usuario {
	nome: string;
	idade: number;
	email: string;
	hobbies: string[];
}

interface FormularioPerfilUsuarioProps {
	handleAddNovoUsuario: (usuario: Usuario) => void;
}

const FormularioPerfilUsuario: React.FC<FormularioPerfilUsuarioProps> = ({
	handleAddNovoUsuario,
}) => {
	const [usuario, setUsuario] = useState<Usuario>({
		nome: "",
		idade: 0,
		email: "",
		hobbies: [],
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setUsuario((prev) => ({
			...prev,
			[name]: name === "idade" ? parseInt(value) : value,
		}));
	};

	const handleHobbyChange = (
		index: number,
		e: ChangeEvent<HTMLInputElement>
	) => {
		const novosHobbies = [...usuario.hobbies];
		novosHobbies[index] = e.target.value;
		setUsuario((prev) => ({
			...prev,
			hobbies: novosHobbies,
		}));
	};

	const adicionarHobby = () => {
		setUsuario((prev) => ({
			...prev,
			hobbies: [...prev.hobbies, ""],
		}));
	};

	const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		handleAddNovoUsuario(usuario);
	};

	return (
		<div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
			<h1 className="text-2xl font-bold mb-4">Adicionar um novo usuário</h1>
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label htmlFor="nome">Nome:</label>
					<input
						type="text"
						id="nome"
						name="nome"
						value={usuario.nome}
						onChange={handleChange}
						className="mt-1 p-2 w-full border rounded-md"
					/>
				</div>
				<div>
					<label htmlFor="idade">Idade:</label>
					<input
						type="number"
						id="idade"
						name="idade"
						value={usuario.idade}
						onChange={handleChange}
						className="mt-1 p-2 w-full border rounded-md"
					/>
				</div>
				<div>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						value={usuario.email}
						onChange={handleChange}
						className="mt-1 p-2 w-full border rounded-md"
					/>
				</div>
				<div>
					<label htmlFor="hobbies">Hobbies: </label>
					{usuario.hobbies.map((hobbie, index) => (
						<input
							key={index}
							type="text"
							value={hobbie}
							onChange={(e) => handleHobbyChange(index, e)}
							className="mt-1 p-2 w-full border rounded-md mb-2"
						/>
					))}
					<button
						type="button"
						onClick={adicionarHobby}
						className="mt-2 p-2 bg-blue-500 text-white rounded-md"
					>
						Adicionar Hobbie
					</button>
				</div>
				<button
					type="submit"
					className="mt-4 p-2 bg-green-500 text-white rounded-md"
				>
					Enviar
				</button>
			</form>
		</div>
	);
};

export default FormularioPerfilUsuario;
