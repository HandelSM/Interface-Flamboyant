import { FC } from 'react';
import { SectionButton } from './SectionButton';
import { useNavigationStore } from '../store/navigation';

export const HomeMenu: FC = () => {
    const { setNav } = useNavigationStore();

    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                background: '#ffffff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0 6vw',
                transform: 'translateX(-90px)'
            }}
        >
            <div style={{ display: 'flex', gap: 20 }}>
                {[
                    { label: 'LEGÍTIMO', id: 'Legitimo' },
                    { label: 'AUTÊNTICO', id: 'Autentico' },
                    { label: 'LE CLUB LACOSTE', id: 'LeClubLacoste' },
                    { label: 'FACHADA', id: 'Fachada' },
                ].map((sec) => (
                    <SectionButton
                        key={sec.id}
                        label={sec.label}
                        onClick={() =>
                            setNav({
                                section: sec.id,
                                category: null,
                                floor: null,
                                hotspot: null,
                            })
                        }
                    />
                ))}
            </div>
        </div>
    );
};
