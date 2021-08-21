import React from 'react';
import { useHistory } from 'react-router-dom';

const Button =({
    className="btn btn-primary",
    type="button",
    text ="ENVIAR",
    loading,
    to,
    ...rest
}) =>{
    const handleClick = (e) => {
        if(to){
            e.preventDefault();
        }
    };
    return (
        <button
        className={className}
        type={type}
        text={text}
        disabled={loading}
        {...rest}
        onClick={handleClick}
        >
            {loading ? (
                <>
                    <i className="fas fa-spinner fa-pulse"/>
                    <span className="px-2">REDIRECCIONANDO..</span>
                </>
            ): (text)}

        </button>
    )
}

export default Button;