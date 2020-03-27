import { useEffect, useRef } from 'react'

export default function useLatest(value) {
    const ref = useRef(value)
    useEffect(() => {
        ref.current = value
    })
    return ref
}
