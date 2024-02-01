'use client'

import { useState } from "react";

interface Props{
    value?: number;
}

export const CartCounter = ({value = 0}: Props) => {
    
    const [count, setCount] = useState(value)

    return (
        <>
            <h2 className="text-9xl font-bold">{count}</h2>
            <div className="flex space-x-4 mt-4">
                <button className="bg-gray-900 py-2 rounded-lg w-[100px] hover:bg-gray-700 transition-all duration-300 hover:scale-110" onClick={() => { count > 0 && setCount(count - 1) }}>-1</button>
                <button className="bg-gray-900 py-2 rounded-lg w-[100px] hover:bg-gray-700 transition-all duration-300 hover:scale-110" onClick={() => { setCount(count + 1) }}>+1</button>
            </div>
        </>
    )
}