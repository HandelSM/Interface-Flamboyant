import { FC } from 'react';

interface Props {
    category: string;
}

export const FloorHeader: FC<Props> = ({ category }) => (
    <div
        style={{
            width: '100%',
            padding: '24px 40px 8px',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 32,
            color: '#5a1e1b',
            position: 'relative',
        }}
    >
        {category}
        <div
            style={{
                position: 'absolute',
                bottom: 0,
                left: 40,
                right: 40,
                height: 2,
                background: '#5a1e1b',
            }}
        />
    </div>
);
