import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { chrismas_recipe, random_recipe } from '../data/recipes_data.js'
import Sidebar from './Sidebar.jsx';

const Recipe = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(id);
    if (id.startsWith('r')) {
      const r = random_recipe.find(recipe => recipe.id === id);
      if (r) {
        setRecipe(r);
      } else {
        console.error(`Recipe with ID ${id} not found`);
        navigate('/recipe-not-found');
      }
    } else if (id.startsWith('c')) {
      const c = chrismas_recipe.find(recipe => recipe.id === id);
      if (c) {
        setRecipe(c);
      } else {
        console.error(`Christmas Recipe with ID ${id} not found`);
        navigate('/recipe-not-found');

      }
    } else {
      navigate('/recipe-not-found');
    }
  }, [id]);

  return (
    <div>
      <div>
        <div className="container pt-md-5 mt-md-5 pt-5 pb-md-5 mb-md-5 pb-5 recipes">
          <div className="row gap-5 pb-md-5 pb-5">
            <div className="col-md-8">
              <div className="container p-0">
                {recipe && <div className="recipe_container">
                  <figure><img src={recipe.image_url} alt={recipe.Name} width={'100%'} /></figure>
                  <p className="subheading2 mt-4">{recipe.Author}</p>
                  <h3 className="heading2 mt-3">{recipe.Name}</h3>
                  <p className="subheading1 mt-3">{recipe.Description}</p>
                  <h5 className="heading4 mt-5">Ingredients:</h5>
                  <ul style={{ listStyle: 'square' }}>
                    {recipe.Ingredients.map((ingredient, index) => {
                      return <li className='subheading1 mb-1'>{ingredient}</li>
                    })}
                  </ul>
                  <h5 className="heading4 mt-5">Steps:</h5>
                  {recipe.Method.map((step, index) => {
                    return <p className='subheading1'> <span className='heading4'>{index + 1}:</span> {step}</p>
                  })}
                </div>}
              </div>

            </div>
            <div className="col-md-3">
              <Sidebar />
            </div>
          </div>
          <div className="row">
            <div className="container-fluid  topBorder mt-0 pt-3 section5">
              <div className="row">
                {random_recipe.slice(14, 17).map((recipe, index) => {
                  return (
                    <div className="col-md-4 p-0">
                      <div className="box">
                        <figure><img src={recipe.image_url} alt="" /></figure>

                        <p className='subheading2 mb-1'>{recipe.Author}</p>
                        <h3 className='heading3'>{recipe.Name}</h3>
                        <p className='subheading1 mt-1'>{recipe.Description.slice(0, 200)}...</p>
                        <Link to={`/recipe/${recipe.id}`} className='btn texual-btn mt-1'>read more</Link>
                      </div>
                    </div>)
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Recipe