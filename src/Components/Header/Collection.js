import React from 'react'
import { Link } from 'react-router-dom';
const Collection = () => {
    return (
        <div className='Collection-container'>
            <div className="clothing">
                <Link to='/roupas'><a>Roupas</a></Link>
            </div>
            <div className="accessories">
                <Link to='/acessorios'><a>Acessórios</a></Link>
            </div>
        </div>
    );
}

export default Collection;