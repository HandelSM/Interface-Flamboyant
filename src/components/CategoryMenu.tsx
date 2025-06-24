import { FC } from 'react';
import { SectionButton } from './SectionButton';
import { useNavigationStore } from '../store/navigation';
import type { FloorSpec } from '../content';

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
            {/* back arrow */}
            <button
                onClick={onBack}
                style={{
                    position: 'absolute',
                    top: 24,
                    left: 24,
                    border: 'none',
                    background: 'transparent',
                    fontSize: 32,
                    cursor: 'pointer',
                    color: '#5a1e1b',
                }}
            >
                ◀
            </button>

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
