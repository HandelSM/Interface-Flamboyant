import OSC from 'osc-js';
import { useNavigationStore } from './store/navigation';
import { useEffect } from 'react';
import { CONTENT } from './content';

const osc = new OSC({ plugin: new OSC.DatagramPlugin() });
osc.open({ host: '192.168.1.100', port: 9000 }); // IP do TouchDesigner

export const useOscBridge = () => {
  const { section, category, floor, hotspot } = useNavigationStore();
  useEffect(() => {
    if (!section || !category || !floor || !hotspot) return;
    const index =
      CONTENT[section]
        .find((c) => c.id === category)!
        .floors.find((f) => f.id === floor)!
        .hotspots.find((h) => h.id === hotspot)!.oscIndex;

    osc.send(new OSC.Message('/index', index));
  }, [section, category, floor, hotspot]);
};
