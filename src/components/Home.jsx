import React from 'react'
import '../styles/home.css'

const Home = () => {
    return (
        <>
        <div className='container-fluid header-section'>
            <div className="row">
                <div className="col-md-6">
                    <div className="static">
                        <div className="box">
                            <h2 className="heading1">Chrismas Special Meals</h2>
                            <div className="content">
                                <p>GLUTEN FREE / OCTOBER 6</p>
                                <h3>10 easy recipes that you can try!</h3>
                                <button className="btn text-white">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div style={{backgroundColor:'blue',minHeight:'300px', marginTop:"5px"}}></div>
                    <div style={{backgroundColor:'blue',minHeight:'300px', marginTop:"5px"}}></div>
                    <div style={{backgroundColor:'blue',minHeight:'300px', marginTop:"5px"}}></div>
                    <div style={{backgroundColor:'blue',minHeight:'300px', marginTop:"5px"}}></div>
                    <div style={{backgroundColor:'blue',minHeight:'300px', marginTop:"5px"}}></div>
                    <div style={{backgroundColor:'blue',minHeight:'300px', marginTop:"5px"}}></div>
                </div>
            </div>
        </div>

        <div className="container-fluid section2">
            <section style={{minHeight:"40vh",backgroundColor:"red",marginTop:'5px'}}></section>
            <section style={{minHeight:"40vh",backgroundColor:"red",marginTop:'5px'}}></section>
            <section style={{minHeight:"40vh",backgroundColor:"red",marginTop:'5px'}}></section>
        </div>
        </>
        
    )
}

export default Home