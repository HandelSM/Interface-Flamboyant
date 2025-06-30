import { FC, useRef, useEffect } from 'react'
import { useNavigationStore } from '../store/navigation'
import { CONTENT } from '../content'

export const Tela: FC = () => {
  const { section, category, floor, hotspot } = useNavigationStore()

  /* idle is standard */
  let mediaSrc = '/assets/idle.mp4'

  if (section && category && floor) {
    const floorObj =
      CONTENT[section]
        .find(c => c.id === category)!
        .floors.find(f => f.id === floor)!

    /* hotspot has priority */
    if (hotspot) {
      mediaSrc = floorObj.hotspots.find(h => h.id === hotspot)!.media

    /* if not, try to use floor media */
    } else if (floorObj.media) {
      mediaSrc = floorObj.media
    }
  }

  const isVideo = mediaSrc.endsWith('.mp4')
  const ref = useRef<HTMLVideoElement>(null)

  /* simple watchdog for loop */
  useEffect(() => {
    if (!isVideo) return
    const v = ref.current
    if (!v) return

    const onEnded = () => { v.currentTime = 0; v.play().catch(() => {}) }
    v.addEventListener('ended', onEnded)
    return () => v.removeEventListener('ended', onEnded)
  }, [mediaSrc, isVideo])

  return isVideo ? (
    <video
      ref={ref}
      src={mediaSrc}
      autoPlay
      muted
      loop
      style={{ width:'100%', height:'100%', objectFit:'cover' }}
    />
  ) : (
    <img
      src={mediaSrc}
      style={{ width:'100%', height:'100%', objectFit:'cover' }}
    />
  )
}
