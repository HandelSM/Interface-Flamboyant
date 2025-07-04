import { FC } from 'react';
import { useNavigationStore } from '../store/navigation';

interface Props {
  arrows: { up?: string; right?: string; down?: string; left?: string };
  floorId: string;
}

const ArrowBtn: FC<{ symbol: string; size: number; onClick: () => void }> = ({
  symbol,
  size,
  onClick,
}) => (
  <button
    onClick={onClick}
    style={{
      border: 'none',
      background: 'transparent',
      fontSize: size,
      lineHeight: 1,
      color: '#730202',
      cursor: 'pointer',
    }}
  >
    {symbol}
  </button>
);

export const ArrowRail: FC<Props> = ({ arrows, floorId }) => {
  const { setNav, section } = useNavigationStore();

  /* ───── CASO ESPECIAL ─ Le Club Lacoste ───── */
  if (section === 'LeClubLacoste') {
  return (
    <div
      style={{
        position: 'relative',
        width: 300,
        height: '100%',
        overflow: 'visible',
      }}
    >
      <img
        src="/assets/imagens_finais/le-club-lacoste_1/le_club_lacoste_2.jpg"
        alt="Le Club Lacoste"
        style={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translate(-120px, -50%)',
          height: 400,
          objectFit: 'contain',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}


  const vSize = 64 * 1.8; // ▲ ▼
  const hSize = 48 * 1.8; // ◀ ▶

  return (
    <div
      style={{
        /* ⬇ REMOVIDO width:200 px – deixa o bloco assumir a largura do conteúdo */
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',     // centra setas verticais na linha
        justifyContent: 'center',
        gap: 16,
        // paddingLeft: 32,          // respiro em relação à planta
        paddingRight:32,
        position: 'relative',
        zIndex: 2,
        color: '#730202',
      }}
    >
      {arrows.up && (
        <ArrowBtn
          symbol="▲"
          size={vSize}
          onClick={() => setNav({ floor: arrows.up, hotspot: null })}
        />
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        {arrows.left && (
          <ArrowBtn
            symbol="◀"
            size={hSize}
            onClick={() => setNav({ floor: arrows.left, hotspot: null })}
          />
        )}

        <span style={{ fontSize: 'var(--font-med)', fontWeight: 700, whiteSpace: 'pre-line', textAlign: 'center' }}>
          {floorId}
        </span>

        {arrows.right && (
          <ArrowBtn
            symbol="▶"
            size={hSize}
            onClick={() => setNav({ floor: arrows.right, hotspot: null })}
          />
        )}
      </div>

      {arrows.down && (
        <ArrowBtn
          symbol="▼"
          size={vSize}
          onClick={() => setNav({ floor: arrows.down, hotspot: null })}
        />
      )}
    </div>
  );
};
