import { FC } from 'react';

interface Props {
    label: string;
    onClick: () => void;
}

export const SectionButton: FC<Props> = ({ label, onClick }) => (
    <button
        onClick={onClick}
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
        }}
    >
        <img
            src="/assets/Imagens Finais/logo.png"
            alt=""
            style={{ width: 200, height: 200, objectFit: 'contain' }}
        />
        <span
            style={{
                marginTop: 8,
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 26,
                letterSpacing: 1,
                color: '#5a1e1b',
            }}
        >
            {label}
        </span>
    </button>
);
