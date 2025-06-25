import { FC } from 'react';

interface Props {
    onClick: () => void;
    size?: number;          // default 32
}

export const BackButton: FC<Props> = ({ onClick, size = 32 }) => (
    <button
        onClick={onClick}
        style={{
            position: 'absolute',
            bottom: 24,
            right: 24,
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

