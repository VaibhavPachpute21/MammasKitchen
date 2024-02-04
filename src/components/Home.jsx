import React from 'react'
import '../styles/home.css'
import { random_recipe } from '../assets/recipes_data';

const Home = () => {
    return (
        <>
            <div className='container-fluid header-section'>
                <div className="row p-0">
                    <div className="col-md-6 p-0">
                        <div className="static">
                            <div className="box">
                                <h2 className="heading1">Chrismas Special Meals</h2>
                                <div className="content">
                                    <p>GLUTEN FREE / OCTOBER 6</p>
                                    <h3>10 easy recipes that you can try!</h3>
                                    <button className="btn btn-info">READ MORE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 p-0 border-left">
                        <div className="">
                            {random_recipe.slice(0, 4).map((recipe, index) => {
                                return <>
                                    <div className="box">
                                        <div className='recipe-card'>
                                            <figure>
                                                <img src={recipe.image_url} alt={recipe.Name} height={index == 1 || index == 3 ? '350px' : '250px'} width={'100%'} />
                                            </figure>
                                            <p>{recipe.Author}</p>
                                            <h3>{recipe.Name}</h3>
                                        </div>
                                    </div>
                                </>
                            })}
                        </div>
                    </div>
                    <div className="col-md-3 p-0 border-left" >
                        <div className="">
                            {random_recipe.slice(4, 8).map((recipe, index) => {
                                return <>
                                    <div className="box" >
                                        <div className='recipe-card'>
                                            <figure>
                                                <img src={recipe.image_url} alt={recipe.Name} height={index == 0 || index == 2 ? '350px' : '250px'} width={'100%'} />
                                            </figure>
                                            <p>{recipe.Author}</p>
                                            <h3>{recipe.Name}</h3>
                                        </div>
                                    </div>
                                </>
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid section2" style={{ backgroundColor: '#FCDDC8', }}>
                <di className="row">
                    <div className="col-md-6">
                        <div className="box">
                            <div className="content">
                            <h3 className='heading2'>Hello, we're Nataly and Jane.</h3>
                            <p className='subheading1'>Eum altera facilisis an, unum novum appellantur vis ut, no suas utroque appellantur his. Vim error legere cu, ut amet antiopam mei. Per te utamur erroribus molestiae. Mei virtute complectitur ut, no autem semper ius, movet adipisci his.</p>
                            <button className='btn btn-success'>LEARN MORE</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 border-left">
                        <div className="box">
                            <figure>
                                <img src="https://qi142.qodeinteractive.com/wp-content/uploads/2021/10/home-img-1.jpg" alt="IMG" /></figure>
                        </div>
                    </div>
                </di>
            </div>

            <div className="container-fluid section3">
                <div className="row">
                    {random_recipe.slice(8,14).map((recipe,index)=>{
                        return <>
                        <div className="col-md-6 border-left topBorder">
                            <div className="box">
                            <div className="row">
                                <div className="col-md-6"><figure><img src={recipe.image_url} alt={recipe.Name} /></figure></div>
                                <div className="col-md-6">
                                    <div className="content">
                                        <p>{recipe.Author}</p>
                                        <h3>{recipe.Name}</h3>
                                        <p>{recipe.Description.slice(0,200)}...</p>
                                        <button className='btn btn-success'>READ MORE</button>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </>
                    })}
                </div>
            </div>
        </>

    )
}

export default Home