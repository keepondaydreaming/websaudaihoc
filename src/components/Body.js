import {useState, useEffect} from 'react'

const Body = () => {
    const [text, setText] = useState('')
    const [score, setScore] = useState(0)

    useEffect(() => {
        const timeOutId = setTimeout(() => setScore(text), 400)
        return () => clearTimeout(timeOutId)
    }, [text])
    
    const handleChange = (text) => {
        setText(text)
    }

    return (
        <div className='flex flex-row flex-1 justify-center'>
            <textarea className='w-5/12 border-2 rounded-md font-mono text-lg' rows='12' value={text} onChange={event => handleChange(event.target.value)} />
            <div className='px-4'></div>
            <textarea disabled className='w-5/12 border-2 rounded-md font-mono text-lg' rows='12' value={score} />
        </div>
    )
}

export default Body
