import React from 'react';

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
            {text}

        </button>
    )
}

export default Button;