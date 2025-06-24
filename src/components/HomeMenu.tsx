import { FC } from 'react';
import { SectionButton } from './SectionButton';
import { useNavigationStore } from '../store/navigation';

export const HomeMenu: FC = () => {
    const { setNav } = useNavigationStore();

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 120,
                width: '100%',
                height: '100%',
                alignItems: 'center',
                background: '#ffffff',
            }}
        >
            <SectionButton
                label="LEGÍTIMO"
                onClick={() =>
                    setNav({ section: 'Legitimo', category: null, floor: null, hotspot: null })
                }
            />
            <SectionButton
                label="AUTÊNTICO"
                onClick={() =>
                    setNav({ section: 'Autentico', category: null, floor: null, hotspot: null })
                }
            />
            <SectionButton
                label="LE CLUB LACOSTE"
                onClick={() =>
                    setNav({ section: 'LeClubLacoste', category: null, floor: null, hotspot: null })
                }
            />
            <SectionButton
                label="FACHADA"
                onClick={() =>
                    setNav({ section: 'Fachada', category: null, floor: null, hotspot: null })
                }
            />
        </div>
    );
};
