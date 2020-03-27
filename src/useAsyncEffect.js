import { useEffect } from 'react'

const useAsyncEffect = (effect, inputs, destroy) => {
    // eslint-disable-next-line consistent-return
    useEffect(() => {
        effect()
        if (typeof destroy === 'function') {
            return () => destroy()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, inputs)
}

export default useAsyncEffect
