import { FC } from 'react';
import { FloorHeader } from './FloorHeader';
import { HotspotList } from './HotspotList';
import { ArrowRail } from './ArrowRail';
import { FloorPlan } from './FloorPlan';
import type { FloorSpec } from '../content';

interface Props {
    category: string;
    floor: FloorSpec;
}

export const FloorScreen: FC<Props> = ({ category, floor }) => (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <FloorHeader category={category} />

        <div style={{ flex: 1, display: 'flex' }}>
            <HotspotList hotspots={floor.hotspots} />

            <div style={{ flex: 1, position: 'relative' }}>
                <FloorPlan planImage={floor.planImage} hotspots={floor.hotspots} />
            </div>

            <ArrowRail arrows={floor.arrows} floorId={floor.id} />
        </div>
    </div>
);
