import {Link, useLocation, useOutlet} from 'react-router-dom'
import {animated, useTransition} from '@react-spring/web'
import type {ReactNode} from 'react'
import {useRef} from 'react'
import logo from '../assets/images/mangosteen.svg'

const routeReflect = {
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
    const transitions = useTransition(location.pathname, {
        from: {transform: location.pathname === '/welcome/1' ? 'translateX(0%)' : 'translateX(100%)'},
        enter: {transform: 'translateX(0%)'},
        leave: {transform: 'translateX(-100%)'},
        config: {duration: 300}
    })

    return (<div h-screen flex flex-col align-center bg="#8f4cd7" pb-16px>
        <header p-t-66px flex flex-col items-center>
            <img w-64px src={logo} alt=""/>
            <h1 text={"#d4d4ee"}>山竹记账</h1>
        </header>
        <main shrink-1 grow-1 bg-white m-16px rounded-8px flex justify-center items-center>
            {
                transitions((style, pathname) => (
                    <animated.div
                        style={style} key={pathname}
                    >
                        <div style={{textAlign: 'center'}}> {map.current[pathname]}</div>
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
