import { Link } from 'react-router-dom';
import'./login.css'
export default function Login() {
  return (
    <div>
      <header>
        <div className="container_login">
        <div className="tittle-login">
          <h3>INICIE SESSÃO</h3>
        </div>
        <div className="body-login">
          <div className='body-email'>
          <h4>Email</h4>
          <input
            type="text"
            className="input"
            name="searchBox"
            placeholder="Digite seu email"
            maxLength={32}
          />
          </div>
          <div className='body-senha'>
          <h4>Senha</h4>
          <input
            type="text"
            maxLength={24}
            className="input"
            name="searchBox"
            placeholder="Digite sua senha"
          />
        </div>
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
