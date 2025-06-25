import { FC } from 'react';

interface Props {
    onClick: () => void;
    size?: number;
}

export const BackButton: FC<Props> = ({ onClick, size = 40 }) => (
    <button
        onClick={onClick}
        style={{
            position: 'absolute',
            bottom: 24,
            right: 24,
            zIndex: 10,              /* ← garante prioridade nos cliques */
            border: 'none',
            background: 'transparent',
            fontSize: size,
            lineHeight: 1,
            color: '#5a1e1b',
            cursor: 'pointer',
        }}
    >
        ◀
    </button>
);
