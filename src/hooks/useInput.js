import { useState } from "react"

export default function useInput (initialvalue) { 
    const [value, setValue] = useState(initialvalue)

    const onChange = e => {
        setValue(e.target.value)
    }
 return {
    onChange,
    value
 }
}