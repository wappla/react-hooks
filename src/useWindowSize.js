import { useState, useEffect } from 'react'

function getSize() {
    if (typeof window === 'undefined') return {}
    return {
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
        outerHeight: window.outerHeight,
        outerWidth: window.outerWidth,
    };
}

function useWindowSize() {
    let [windowSize, setWindowSize] = useState(getSize())

    function handleResize() {
        setWindowSize(getSize())
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return windowSize
}

export default useWindowSize
