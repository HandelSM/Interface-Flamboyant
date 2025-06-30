import { FC } from 'react'
import { useNavigationStore } from '../store/navigation'
import { BackButton } from './BackButton'
import { SectionButton } from './SectionButton'

interface Props {
  floors: { id: string }[]
  onBack: () => void
}

export const FachadaMenu: FC<Props> = ({ floors, onBack }) => {
  const { section, setNav, floor: active } = useNavigationStore()

  return (
    <div style={{
      width:'100vw', height:'100vh', background:'#fff',
      display:'flex', justifyContent:'center', alignItems:'center',
      position:'relative'
    }}>
      <BackButton onClick={onBack} />

      <div style={{ display:'flex', gap:120 }}>
        {floors.map(f => (
          <SectionButton                                 // mesmo visual
            key={f.id}
            label={f.id}
            onClick={() => setNav({
              category:'Fachada',     // mantém a categoria
              floor: f.id,            // 'Imagem' ou 'Video'
              hotspot: null
            })}
          />
        ))}
      </div>
    </div>
  )
}
