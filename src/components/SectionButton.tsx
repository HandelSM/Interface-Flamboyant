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
            style= {{
                width: `calc(200px * var(--ui-scale))`,
                height: `calc(200px * var(--ui-scale))`,
                objectFit: 'contain',
            }}
            
        />
        <span
            style={{
                marginTop: 'calc(8px * var(--ui-scale))',
                fontSize: 'var(--font-med)',
                letterSpacing: 1,
                color: '#5a1e1b',
            }}
        >
            {label}
        </span>
    </button>
);
