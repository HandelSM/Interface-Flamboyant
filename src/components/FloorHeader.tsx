import { FC } from 'react';

interface Props {
    title: string;
}

export const FloorHeader: FC<Props> = ({ title }) => (
    <div
        style={{
            width: '100%',
            top: 'calc(20px * var(--ui-scale))',
            left: 'calc(35px * var(--ui-scale))',
            fontFamily: 'Utile, sans-serif',
            fontSize: 'var(--font-big)',
            color: '#5a1e1b',
            position: 'relative',
            zIndex: 9
        }}
    >
        {title}
        <div
            style={{
                position: 'absolute',
                bottom: 0,
                left: 'calc(-20px * var(--ui-scale))',
                right: 'calc(100px * var(--ui-scale))',
                height: 2,
                background: '#5a1e1b',
            }}
        />
    </div>
);
