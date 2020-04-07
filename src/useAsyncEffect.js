import { useEffect } from 'react'

export default function (effect, inputs, destroy) {
    // eslint-disable-next-line consistent-return
    useEffect(() => {
        effect()
        if (typeof destroy === 'function') {
            return () => destroy()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, inputs)
}
