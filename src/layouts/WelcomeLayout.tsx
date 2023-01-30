import { Link, useLocation, useOutlet } from 'react-router-dom'
import { animated, useTransition } from '@react-spring/web'
import type { ReactNode } from 'react'
import { useRef, useState } from 'react'
import logo from '../assets/images/mangosteen.svg'

const routeReflect: Record<string, string> = {
  '/welcome/1': '/welcome/2',
  '/welcome/2': '/welcome/3',
  '/welcome/3': '/welcome/4',
  '/welcome/4': '/xxx',
}

export const WelcomeLayout: React.FC = () => {
  const map = useRef<Record<string, ReactNode>>({})
  const location = useLocation()
  const outlet = useOutlet()
  map.current[location.pathname] = outlet
  const [extraStyle, setExtraStyle] = useState<{ position: 'realative' | 'absolute' }>({ position: 'relative' })
  const transitions = useTransition(location.pathname, {
    from: { transform: location.pathname === '/welcome/1' ? 'translateX(0%)' : 'translateX(100%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(-100%)' },
    onStart: () => {
      setExtraStyle({ position: 'absolute' })
    },
    onRest: () => {
      setExtraStyle({ position: 'relative' })
    },
    config: { duration: 3000 },
  })

  return (<div h-screen flex flex-col align-center bg="#8f4cd7" pb-16px>
        <header p-t-66px flex flex-col items-center>
            <img w-64px src={logo} alt=""/>
            <h1 text={'#d4d4ee'}>山竹记账</h1>
        </header>
        <main shrink-1 grow-1 relative>
            {
                transitions((style, pathname) => (
                    <animated.div w="100%" h="100%" grow-1 p-16px flex
                        style={{ ...style, ...extraStyle }} key={pathname}
                    >
                        <div grow-1 bg-white flex justify-center items-center rounded-8px> {map.current[pathname]}</div>
                    </animated.div>
                ))
            }
        </main>

        <footer shrink-0 text-center text-24px text-white grid grid-cols-3 grid-rows-1>
             <Link style={{ gridArea: '1 / 2 / 2 / 3' }} to={routeReflect[location.pathname]}>下一页</Link>
             <Link style={{ gridArea: '1 / 3 / 2 / 4' }} to={'/'}>跳过</Link>
        </footer>
    </div>)
}
