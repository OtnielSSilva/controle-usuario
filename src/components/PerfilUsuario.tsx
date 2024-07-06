import React, { useState } from "react";

interface Usuario {
	nome: string;
	idade: number;
	email: string;
	hobbies: string[];
}

const PerfilUsuario: React.FC = () => {
	// setUsuario estava dando erro por não ser utilizado
	const [usuario] = useState<Usuario>({
		nome: "Marcos Silva",
		idade: 25,
		email: "marcos_silva@email.com",
		hobbies: ["Ler", "Correr", "Nadar"],
	});

	return (
		<div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
			<h1 className="text-2xl font-bold mb-4">{usuario.nome}</h1>
			<p className="text-gray-700">Idade: {usuario.idade}</p>
			<p className="text-gray-700">Email: {usuario.email}</p>
			<ul className="list-disc pl-5 mt-2">
				{usuario.hobbies.map((hobbie, index) => (
					<li key={index} className="text-gray-700">
						{hobbie}
					</li>
				))}
			</ul>
		</div>
	);
};

export default PerfilUsuario;
