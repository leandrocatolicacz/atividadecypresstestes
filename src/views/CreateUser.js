import React, { useState, useEffect } from 'react';
import Card from './Card';
import NavBar from './NavBar';
import { Formik } from 'formik';


const TelaFormulario = () => {

    const ValueLogin = {
        email: '',
        registration: '',
        password: ''
    }
    const ValueCurso = {
        area: '',
        name: ''
    }
    const Valuecontatos = {
        email: '',
        telephone: ''
    }
    const ValueEndereco = {
        road: '',
        number: '',
        city: '',
        uf: '',
        neighborhood: ''
    }


    let initialValues = {
        period_course: '',
        cpf: '',
        name_user: '',
        enumGender: '',
        address: {

        },
        contactList: [
            {

            }
        ],
        login: {

        },
        course: {

        }
    }
    const [values, setStartValues] = useState(initialValues)

    const [endereco, setEndereco] = useState({ ValueEndereco });
    const [contatos, setContatos] = useState({ Valuecontatos });
    const [Login, setLogin] = useState({ ValueLogin });
    const [curso, setCurso] = useState({ ValueCurso });
    const [perfil, setPerfil] = useState('Estudante');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [genero, setGenero] = useState('');


    function handleGeneroChange(event) {
        setGenero(event.target.value);
    };

    function onChange(ev) {
        setGenero(ev.target.value);
        const { name, value } = ev.target
        setStartValues({ ...values, [name]: value })
        console.log(values)
    }

    function onChangeEndereco(ev) {
        const { name, value } = ev.target
        setEndereco({ ...endereco, [name]: value })
        console.log(endereco)
    }

    function onChangeLogin(ev) {
        const { name, value } = ev.target
        setLogin({ ...Login, [name]: value })
        console.log(Login)
    }

    function onChangeContacs(ev) {
        const { name, value } = ev.target
        setContatos({ ...contatos, [name]: value })
        console.log(contatos)
    }

    function onChangeCurso(ev) {
        const { name, value } = ev.target
        setCurso({ ...curso, [name]: value })
        console.log(curso)
    }

    const handlePerfilChange = (event) => {
        setPerfil(event.target.value);
    };

    const handleMostrarSenhaChange = () => {
        setMostrarSenha((prevState) => !prevState);
    };


    function sendValues(ev) {
        ev.preventDefault();
        values.address = endereco
        values.contactList = contatos
        values.course = curso
        values.login = Login
        console.log(values)
    }
    return (
        <div>
            <NavBar />
            <form className="container mt-5">
                <Card titulo="Cadastro de Usuario">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <div className="mb-3">
                                    <label htmlFor="perfil" className="form-label">
                                        Perfil:
                                    </label>
                                    <select
                                        id="perfil"
                                        className="form-select"
                                        name='perfil'
                                        onChange={handlePerfilChange}
                                        required
                                    >
                                        <option value="">Selecione o perfil</option>
                                        <option value="Estudante">Estudante</option>
                                        <option value="Professor">Professor</option>
                                        <option value="Bibliotecário">Bibliotecário</option>
                                    </select>
                                </div>
                                {perfil !== 'Professor' && perfil !== 'Bibliotecário' && (
                                    <div className="mb-3">
                                        <label htmlFor="periodoCurso" className="form-label">
                                            Período do Curso:
                                        </label>
                                        <select
                                            id="periodoCurso"
                                            className="form-select"
                                            name='period_course'
                                            onChange={onChange}
                                            required
                                        >
                                            <option value="">Selecione o período</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                        </select>
                                    </div>
                                )}
                                <label htmlFor="cpf" className="form-label">
                                    CPF:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cpf"
                                    name='cpf'
                                    onChange={onChange}
                                    placeholder="Digite o CPF"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="nomeUsuario" className="form-label">
                                    Nome :
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nomeUsuario"
                                    name="name_user"
                                    onChange={onChange}
                                    placeholder="Digite seu nome"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="genero" className="form-label">
                                    Gênero:
                                </label>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        id="generoMasculino"
                                        name="enumGender"
                                        value="Masculino"
                                        checked={genero === 'Masculino'}
                                        onChange={onChange}
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="generoMasculino">
                                        Masculino
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        id="generoFeminino"
                                        name="enumGender"
                                        value="Feminino"
                                        checked={genero === 'Feminino'}
                                        onChange={onChange}
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="generoFeminino">
                                        Feminino
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Endereço:</label>
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Rua"
                                    name='road'
                                    onChange={onChangeEndereco}
                                    required
                                />
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Número da Casa"
                                    name='number'
                                    onChange={onChangeEndereco}
                                    required
                                />
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Cidade"
                                    name='city'
                                    onChange={onChangeEndereco}
                                    required
                                />
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="UF"
                                    name='uf'
                                    onChange={onChangeEndereco}
                                    required
                                />
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Bairro"
                                    name='neighborhood'
                                    onChange={onChangeEndereco}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Contato:</label>
                                <div className="d-flex mb-2">
                                    <input
                                        id='email'
                                        type="text"
                                        className="form-control me-2"
                                        name="email"
                                        placeholder="Email"
                                        onChange={onChangeContacs}
                                        required
                                    />
                                    <input
                                        type="text"
                                        className="form-control me-2"
                                        name="telephone"
                                        placeholder="Telefone"
                                        onChange={onChangeContacs}
                                        required
                                    />
                                </div>

                            </div>

                            <div className="mb-3">
                                <label className="form-label">Login:</label>
                                <input
                                    id='emailLogin'
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Email"
                                    name='email'
                                    onChange={onChangeLogin}
                                    readOnly="false"
                                    required

                                />
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Matrícula"
                                    name='registration'
                                    onChange={onChangeLogin}
                                    required
                                />
                                <div className="input-group mb-2">
                                    <input
                                        type={mostrarSenha ? 'text' : 'password'}
                                        className="form-control"
                                        placeholder="Senha"
                                        name='password'
                                        
                                        onChange={onChangeLogin}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={handleMostrarSenhaChange}
                                    >
                                        {mostrarSenha ? (
                                            <>
                                                <i className="bi bi-eye-slash"></i> Ocultar Senha
                                            </>
                                        ) : (
                                            <>
                                                <i className="bi bi-eye"></i> Mostrar Senha
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {perfil !== 'Bibliotecário' && (
                                <div className="mb-3">
                                    <label className="form-label">Curso:</label>
                                    <input
                                        id="cursoNome"
                                        type="text"
                                        className="form-control mb-2"
                                        placeholder="Nome do Curso"
                                        name='name'
                                        onChange={onChangeCurso}
                                        required
                                    />

                                    <label className="form-label">
                                        Area do Curso:
                                    </label>
                                    <select
                                        id="areadocurso"
                                        className="form-select"
                                        name='area'
                                        onChange={onChangeCurso}
                                        required
                                    >
                                        <option value="">Selecione a area do curso</option>
                                        <option value="HUMAN">Humanas</option>
                                        <option value="EXACT_SCIENCES">Exatas</option>
                                    </select>
                                </div>
                            )}
                        </div>
                    </div>
                    <button onClick={(event) => sendValues(event)} className="btn btn-primary btn-lg w-100">
                        Enviar
                    </button>
                </Card>
            </form>
        </div >
    );
};

export default TelaFormulario;
