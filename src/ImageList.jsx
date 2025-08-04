import React from 'react';

const imageNames = [
    'channels4_profile.jpg',
    'channels4_profile.jpg',
    'channels4_profile.jpg',
];

export default function ImageList() {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>📷 이미지 갤러리</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {imageNames.map((name, i) => (
                    <div key={i}>
                        <img
                            src={`/public/static/img/${name}`}
                            alt={name}
                            style={{ width: '200px', objectFit: 'contain' }}
                        />
                        <p>{name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
