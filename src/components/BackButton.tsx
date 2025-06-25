import { FC } from 'react';

interface Props {
    onClick: () => void;
    size?: number;
}

export const BackButton: FC<Props> = ({ onClick, size = 50 }) => (
    <button
        onClick={onClick}
        style={{
            position: 'absolute',
            bottom: 100,
            right: 140,
            zIndex: 10,
            border: 'none',
            background: 'transparent',
            fontSize: size,
            lineHeight: 1,
            color: '#5a1e1b',
            cursor: 'pointer',
        }}
    >
        ◀ Voltar
    </button>
);
