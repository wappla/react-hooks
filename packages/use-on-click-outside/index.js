import { useEffect } from 'react'
import useLatest from '@dashdot/use-latest'

const MOUSEDOWN = 'mousedown'
const TOUCHSTART = 'touchstart'
const EVENTS = [MOUSEDOWN, TOUCHSTART]

export default function useOnClickOutside(ref, handler) {
    const handlerRef = useLatest(handler)
    useEffect(() => {
        if (!handler) {
            throw new Error('No handler defined')
        }
        const listener = (event) => {
            if (
                !ref.current
                || !handlerRef.current
                || ref.current.contains(event.target)
            ) {
                return
            }
            handlerRef.current(event)
        }
        EVENTS.forEach((event) => {
            document.addEventListener(event, listener)
        })
        return () => {
            EVENTS.forEach((event) => {
                document.removeEventListener(event, listener)
            })
        }
    }, [handler, handlerRef, ref])
}
