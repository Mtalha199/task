import React from 'react';

function Card({ title, subtitle, imagePath }) {
    const cardStyle = {
        width: '300px',
        height: '350px',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '10px',
        margin: '20px',
        backgroundImage: `url(${imagePath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    };

    return (
        <div style={cardStyle}>
                <h2 className="card-title">{title}</h2>
                <p className="card-subtitle">{subtitle}</p>
        </div>
    );
}

export default Card;
