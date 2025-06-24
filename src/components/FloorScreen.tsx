import { FC } from 'react';
import { FloorHeader } from './FloorHeader';
import { HotspotList } from './HotspotList';
import { ArrowRail } from './ArrowRail';
import { FloorPlan } from './FloorPlan';
import { BackButton } from './BackButton';
import type { FloorSpec } from '../content';
import { useNavigationStore } from '../store/navigation';

interface Props {
    category: string;
    floor: FloorSpec;
}

export const FloorScreen: FC<Props> = ({ category, floor }) => {
    /* precisamos do hook aqui dentro */
    const { setNav } = useNavigationStore();

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <FloorHeader category={category} />

            {/* botão voltar para o menu de categorias */}
            <BackButton onClick={() => setNav({ category: null, floor: null, hotspot: null })} />

            <div style={{ flex: 1, display: 'flex' }}>
                {/* lista de hotspots à esquerda */}
                <HotspotList hotspots={floor.hotspots} />

                {/* planta ao centro */}
                <div style={{ flex: 1, position: 'relative' }}>
                    <FloorPlan planImage={floor.planImage} hotspots={floor.hotspots} />
                </div>

                {/* setas + nome do andar à direita */}
                <ArrowRail arrows={floor.arrows} floorId={floor.id} />
            </div>
        </div>
    );
};
