import Unvailable from './components/Unvailable'
import NotFoundComponent from './components/NotFound'

interface Props {
    params: {
        code: string
    }
}

const ERROR_COMPONENTS: { [key: string]: () => JSX.Element } = {
    'not-found': NotFoundComponent,
    'unavaible': Unvailable
}

export default function ErrorPage({ params }: Props) {
    const ErrorComponent = ERROR_COMPONENTS[params.code] || Unvailable
    return (
        <div className="flex items-center justify-center h-screen">
            <ErrorComponent />
        </div>
    )
}