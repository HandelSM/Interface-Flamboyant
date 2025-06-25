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
    const { setNav } = useNavigationStore();

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                background: '#fff',
            }}
        >
            <FloorHeader category={category} /> {/* header volta */}

            {/* grid */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '540px 1fr 700px',
                    height: 'calc(100vh - 68px)', // 68 = altura aprox. do header
                }}
            >
                <HotspotList hotspots={floor.hotspots} />
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <FloorPlan
                        planImage={floor.planImage}
                        hotspots={floor.hotspots}
                    />
                </div>
                <ArrowRail arrows={floor.arrows} floorId={floor.id} />
            </div>

            {/* botão voltar */}
            <BackButton
                onClick={() =>
                    setNav({
                        category: null,
                        floor: null,
                        hotspot: null,
                    })
                }
            />
        </div>
    );
};

