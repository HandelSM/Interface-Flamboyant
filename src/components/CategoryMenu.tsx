import { FC } from 'react';
import { SectionButton } from './SectionButton';
import { useNavigationStore } from '../store/navigation';
import type { FloorSpec } from '../content';
import { BackButton } from './BackButton';

interface Props {
    sectionId: string;
    categories: { id: string; floors: FloorSpec[] }[];
    onBack: () => void;
}

export const CategoryMenu: FC<Props> = ({ sectionId, categories, onBack }) => {
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
                position: 'relative',      /* necessário p/ BackButton absolute */
            }}
        >
            {/* botão voltar canto inferior‑direito */}
            <BackButton onClick={onBack} />

            <div style={{ display: 'flex', gap: 160 }}>
                {categories.map((cat) => (
                    <SectionButton
                        key={cat.id}
                        label={cat.id}
                        onClick={() =>
                            setNav({
                                category: cat.id,
                                floor: cat.floors[0].id,
                                hotspot: null,
                            })
                        }
                    />
                ))}
            </div>
        </div>
    );
};
