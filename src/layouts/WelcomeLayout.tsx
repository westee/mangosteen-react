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

    return (<div>
        <header>
            <img src={logo} alt=""/>
            <h1>山竹记账</h1>
        </header>
        <main>
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

        <footer>
             <Link to={routeReflect[location.pathname]}>下一页</Link>
             <Link to={'/'}>跳过</Link>
        </footer>
    </div>)
}
