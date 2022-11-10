import React, { useState } from 'react'
import { UseGlobalContext } from '../context'

const Search = () =>
{

    const [text, setText] = useState('')

    const { setSearchTerm, fetchRandomMeals } = UseGlobalContext()

    const handleChang = (e) =>
    {
        setText(e.target.value)
    }

    const handleSubnit = (e) =>
    {
        e.preventDefault()
        if (text)
        {
            setSearchTerm(text)
            setText('')
        }
    }

    return (
        <header className='search-container'>

            <form onSubmit={handleSubnit}>
                <input type="text" placeholder='type favorite meal' value={text} onChange={handleChang} className='form-input' />
                <button type='submit' className='btn'>Search</button>
                <button type='submit' className='btn btn-hipster' onClick={fetchRandomMeals}>Random</button>
            </form>
        </header>
    )
}

export default Search
