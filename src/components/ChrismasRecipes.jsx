import { chrismas_recipe,random_recipe } from '../assets/recipes_data'
import '../styles/recipe.css'
import {Link} from 'react-router-dom'
const ChrismasRecipes = () => {
    return (
        <div>
          <div className="container pt-md-5 mt-md-5 pb-md-5 mb-md-5 recipes">
            <div className="row gap-5 pb-md-5">
              <div className="col-md-8">
                {chrismas_recipe.map((recipe, index) => {
                  return (<div className="container p-0">
                    <div className="recipe_container">
                      <figure className=''><img src={recipe.image_url} alt={recipe.Name} width={'100%'} /></figure>
                      <p className="subheading2 mt-4">{recipe.Author}</p>
                      <h3 className="heading2 mt-3">{recipe.Name}</h3>
                      <p className="subheading1 mt-3">{recipe.Description.slice(0, 200)}...</p>
                      <Link to={`/recipe/${recipe.id}`} className='btn texual-btn mt-1'>read more</Link>
                    </div>
                  </div>)
                })}
              </div>
              <div className="col-md-3">
                <div className="box">
                  <img src="https://qi142.qodeinteractive.com/wp-content/uploads/2021/10/autor-sidebar.jpg" width={'100%'} alt="img" />
                  <h5 className='heading4 mt-4'>Hi I’m Lesli</h5>
                  <p className="subheading4 mb-5">I create simple, delicious recipes that require 10 ingredients or less, one bowl, or 30 minutes or less to prepare.</p>
                  <img src="https://qi142.qodeinteractive.com/wp-content/uploads/2021/10/widget-img.jpg" width={'100%'} alt="img" />
                  <h5 className="heading4 mt-5">Follow me</h5>
                  <div className='followme'>
                    <a href="#">INSTAGRAM</a>
                    <a href="#">FACEBOOK</a>
                    <a href="#">YOUTUBE</a>
                    <a href="#">PINTEREST</a>
                  </div>
                  <div className="subscribe mt-5">
                    <h5 className="heading4">Subscribe to Newsletter</h5>
                    <input type="email" placeholder='your email' className='form-control' />
                    <button className='btn btn-success mt-3'>SEND</button>
                  </div>
                  <h5 className="heading4 mt-5">Free Recipe Book</h5>
                  <img src="https://qi142.qodeinteractive.com/wp-content/uploads/2021/10/sidebar-img.png" alt="img" />
    
                  <button className='btn btn-success mt-3'>GET MY E BOOK</button>
                </div>
              </div>
            </div>
            <div className="row">
                <div className="container-fluid  topBorder mt-0 pt-3 section5">
                  <div className="row">
                    {random_recipe.slice(14, 17).map((recipe, index) => {
                      return (
                        <div className="col-md-4 p-0">
                          <div className="box">
                            <figure><img src={recipe.image_url} alt={recipe.Name} /></figure>
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
      )
}

export default ChrismasRecipes