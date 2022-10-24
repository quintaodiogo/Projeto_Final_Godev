import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div>
      <header>
        <div className="container_login">
        <div className="tittle-login">
          <h2>Login</h2>
        </div>
        <div className="body-login">
          <h4>Email</h4>
          <input
            type="text"
            className="input"
            name="searchBox"
            placeholder="Digite seu email"
            maxLength={32}
          />
          <h4>Senha</h4>
          <input
            type="text"
            maxLength={24}
            className="input"
            name="searchBox"
            placeholder="Digite sua senha"
          />
        </div>
        <div className="bottom-login">
          <div className="button-login">
            <Link to='/'><button>Entrar</button></Link>
          </div>
          <div className="forget-password-login">
            <h6>Esqueci a Senha</h6>
          </div>
        </div>
        </div>
      </header>
    </div>
  );
}
