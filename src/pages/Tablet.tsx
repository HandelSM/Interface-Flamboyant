import React, { FC } from 'react';
import { useNavigationStore } from '../store/navigation';
import { CONTENT } from '../content';
import { HomeMenu } from '../components/HomeMenu';
import { CategoryMenu } from '../components/CategoryMenu';
import { FloorPlan } from '../components/FloorPlan';
import { FloorScreen } from '../components/FloorScreen';
import { FachadaMenu } from '../components/FachadaMenu'

/* ---- PLACEHOLDERS só para compilar ---- */
const Menu: FC<{ items: string[]; onSelect: (s: string) => void; onBack?: () => void }> =
    ({ items, onSelect, onBack }) => (
        <div>
            {onBack && <button onClick={onBack}>◀ back</button>}
            {items.map((i) => (
                <button key={i} onClick={() => onSelect(i)}>{i}</button>
            ))}
        </div>
    );

const ButtonUp: FC<React.ComponentProps<'button'>> = (p) => <button {...p}>▲</button>;
const ButtonRight: FC<React.ComponentProps<'button'>> = (p) => <button {...p}>▶</button>;
const ButtonDown: FC<React.ComponentProps<'button'>> = (p) => <button {...p}>▼</button>;
const ButtonLeft: FC<React.ComponentProps<'button'>> = (p) => <button {...p}>◀</button>;
/* --------------------------------------- */

// interface ArrowNavProps { arrows: { up?: string; right?: string; down?: string; left?: string }; }

// const ArrowNav: FC<ArrowNavProps> = ({ arrows }) => {
//     const { setNav } = useNavigationStore();
//     return (
//         <>
//             {arrows.up    && <ButtonUp    onClick={() => setNav({ floor: arrows.up, hotspot: null })}    />}
//             {arrows.right && <ButtonRight onClick={() => setNav({ floor: arrows.right, hotspot: null })} />}
//             {arrows.down  && <ButtonDown  onClick={() => setNav({ floor: arrows.down, hotspot: null })}  />}
//             {arrows.left  && <ButtonLeft  onClick={() => setNav({ floor: arrows.left, hotspot: null })}  />}
//         </>
//     );
// };

export const Tablet: FC = () => {
    const { section, category, floor, setNav } = useNavigationStore();

    /* --------- NÍVEL 1 – escolha de seção -------- */
    if (!section)
        return <HomeMenu />;

    const cats = CONTENT[section];

    /* --------- ATALHO para Le Club Lacoste -------- */
    if (section === 'LeClubLacoste' && !category) {
        // pega a 1ª categoria e 1º floor
        const firstCat   = cats[0];
        const firstFloor = firstCat.floors[0];

        // joga direto para o FloorScreen
        setNav({
            category: firstCat.id,
            floor: firstFloor.id,
            hotspot: null,
        });
        return null;               // deixa o re-render cuidar
    }

    /* --------- NÍVEL 2 – escolha de categoria -------- */
    if (!category)
        return (
            <CategoryMenu
                sectionId={section}
                categories={cats}
                onBack={() => setNav({ section: null, category: null, floor: null, hotspot: null })}
            />
        );

    /* --------- NÍVEL 3 – exibição de floor + setas -------- */
    const cat = cats.find((c) => c.id === category)!;

    if (cat.id === 'Fachada')
        return (
            <FachadaMenu
            floors={cat.floors}
            onBack={() => setNav({ category:null, floor:null })}
            />
        )

    const floorData = cat.floors.find((f) => f.id === floor)!;

    return (
        <FloorScreen
            category={cat.id}
            floor={floorData}
        />
    );
};

