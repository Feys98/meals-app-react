import { UseGlobalContext } from '../context'
import {BsHandThumbsUp} from 'react-icons/bs'

const Meals = () =>
{
  const { meals } = UseGlobalContext();
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