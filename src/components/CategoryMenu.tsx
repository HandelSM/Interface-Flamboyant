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
                position: 'relative',
                width: '100%',
                height: '100%',
                background: '#ffffff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <BackButton onClick={onBack} />

            {/* three category buttons */}
            <div style={{ display: 'flex', gap: 120 }}>
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
