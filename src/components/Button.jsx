import React from 'react'

function Button({ setCount }) {


    const btnStyle = { color: 'blue', padding: "15px", borderRadius: '20px' }

    return (
        <>
            <button onClick={() => setCount((count) => count + 1)} style={btnStyle}>Increment</button>
            <button onClick={() => setCount((count) => count - 1)} style={btnStyle}>Decrement</button>
        </>
    )
}

export default Button