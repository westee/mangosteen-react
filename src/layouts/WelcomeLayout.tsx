import { useLocation, useOutlet } from 'react-router-dom'
import { animated, useTransition } from '@react-spring/web'
import type { ReactNode } from 'react'
import { useRef } from 'react'

export const WelcomeLayout: React.FC = () => {
  const map = useRef<Record<string, ReactNode>>({})
  const location = useLocation()
  const pathname = location.pathname

  const outlet = useOutlet()
  map.current[pathname] = outlet
  const transitions = useTransition(pathname, {
    from: { transform: pathname === '/welcome/1' ? 'translateX(0%)' : 'translateX(100%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(-100%)' },
    config: { duration: 300 }
  })

  return transitions((style, pathname) => (
    <animated.div
    style={style} key={pathname}
  ><div style={{ textAlign: 'center' }}> {map.current[pathname]}</div></animated.div>
  ))
}
