import { FC } from 'react';
import { SectionButton } from './SectionButton';
import { useNavigationStore } from '../store/navigation';

export const HomeMenu: FC = () => {
    const { setNav } = useNavigationStore();

    /* ①  container ocupa viewport inteira */
    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                background: '#ffffff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {/* ②  flow horizontal das seções */}
            <div style={{ display: 'flex', gap: 160 }}>
                {[
                    { label: 'LEGÍTIMO', id: 'Legitimo' },
                    { label: 'AUTÊNTICO', id: 'Autentico' },
                    { label: 'LE CLUB LACOSTE', id: 'LeClubLacoste' },
                    { label: 'FACHADA', id: 'Fachada' },           // NOVO
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
