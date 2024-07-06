import React, { useEffect, useState } from "react";
import usuariosData from "../data/usuarios.json";
import FormularioPerfilUsuario from "./FormularioPerfilUsuario";

interface Usuario {
	nome: string;
	idade: number;
	email: string;
	hobbies: string[];
}

const ListaUsuarios: React.FC = () => {
	const [usuarios, setUsuarios] = useState<Usuario[]>([]);

	useEffect(() => {
		setUsuarios(usuariosData.usuarios);
	}, []);

	const handleAddNovoUsuario = (usuario: Usuario) => {
		setUsuarios((prev) => [...prev, usuario]);
	};

	return (
		<div className="max-w-2xl mx-auto p-6">
			<FormularioPerfilUsuario handleAddNovoUsuario={handleAddNovoUsuario} />
			<h1 className="text-2xl font-bold mt-6 mb-4">Lista de Usuários</h1>
			<ul className="space-y-4">
				{usuarios.map((usuario, index) => (
					<li key={index} className="p-4 border rounded-lg shadow-md">
						<h2 className="text-xl font-semibold">{usuario.nome}</h2>
						<p>Idade: {usuario.idade}</p>
						<p>Email: {usuario.email}</p>
						<ul className="list-disc pl-5">
							{usuario.hobbies.map((hobbie, index) => (
								<li key={index}>{hobbie}</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ListaUsuarios;
