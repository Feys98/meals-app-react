import { UseGlobalContext } from '../context'
import {BsHandThumbsUp} from 'react-icons/bs'

const Meals = () =>
{
  const { loading, meals } = UseGlobalContext();
  
  if (loading)
  {
    return <section className="section">
    <h4>Loading...</h4>
    </section>
  }
  
    
  if (meals.length < 1)
  {
    return <section className="section">
    <h4>There is no meals here like that...</h4>
    </section>
  }
  

  return <section className='section-center'>
    {
      meals.map((singleMeal) =>
      {
        const { idMeal, strMeal: title, strMealThumb: image } = singleMeal
        return (
          <article key={idMeal} className="single-meal">
            <img src={image} className="img" alt={title}/>
            <footer>
              <h5>{title} </h5>
              <button className='like-btn'>Like <BsHandThumbsUp/></button>
            </footer>
          </article>
        )
      })
    }

  </section>
}

export default Meals