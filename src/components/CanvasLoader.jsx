import { Html, useProgress } from '@react-three/drei'

const CanvasLoader = () => {
    const { progress } = useProgress()

    return (
        <Html
            as='div'
            center
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >

            <span className='canvas-loader' />

            <p
                style={{
                    fontSize: 14,
                    color: '#f3f3f3',
                    marginTop: 40,
                    fontWeight: 800,
                }}
            >
                {progress != 0 ? `${progress.toFixed(2)}%` : 'Cargando...'}
            </p>
        </Html>
    )
}

export default CanvasLoader