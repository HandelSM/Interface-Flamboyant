import { FC, useRef, useEffect } from 'react';
import { useNavigationStore } from '../store/navigation';
import { CONTENT } from '../content';

export const Tela: FC = () => {
  const { section, category, floor, hotspot } = useNavigationStore();

  /* media default  ---------------------------------------------------- */
  let mediaSrc = '/assets/idle.mp4';

  if (section && category && floor && hotspot) {
    mediaSrc =
      CONTENT[section]
        .find((c) => c.id === category)!
        .floors.find((f) => f.id === floor)!
        .hotspots.find((h) => h.id === hotspot)!.media;
  }

  const isVideo = mediaSrc.endsWith('.mp4');
  const videoRef = useRef<HTMLVideoElement>(null);

  /* garante loop mesmo se o atributo falhar --------------------------- */
  useEffect(() => {
    if (!isVideo) return;

    const v = videoRef.current;
    if (!v) return;

    const handleEnded = () => {
      v.currentTime = 0;
      v.play();
    };

    v.addEventListener('ended', handleEnded);
    return () => v.removeEventListener('ended', handleEnded);
  }, [mediaSrc, isVideo]);

  if (isVideo) {
    return (
      <video
        ref={videoRef}
        src={mediaSrc}
        autoPlay
        muted
        loop          /* navegador tenta primeiro o loop nativo */
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    );
  }

  return (
    <img
      src={mediaSrc}
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
  );
};
