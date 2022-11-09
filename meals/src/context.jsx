import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

const AppContext = React.createContext()

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a'
const randomMealsUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

export const AppProvider = ({ children }) =>
{
    const [meals, setMeals] = useState([])

    const fetchMeals = async (url) =>
    {
        try
        {
            const response = await axios(url)
            setMeals(response.data.meals)
            console.log(response.data)
        } catch (error)
        {
            console.log(error.response)
        }
    }


    useEffect(() =>
    {
        fetchMeals(allMealsUrl)
    }, [])

    return <AppContext.Provider value={{meals}}>
        {
            children
        }
    </AppContext.Provider>
}

export const UseGlobalContext = () =>
{
    return useContext(AppContext)
}


export { AppContext }