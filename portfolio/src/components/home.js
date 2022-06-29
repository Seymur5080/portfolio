import React, {useEffect} from "react";

const Home = () => {
    useEffect(() => {
        setTimeout(() => {
            document.querySelector('.home-title').classList.add('home-title-animation');
            setTimeout(() => {
                document.querySelector('.home-subtitle').classList.add('home-subtitle-animation');
            }, 2000)
        }, 2000)

    }, [])

    return (
        <div>
            <section className="home">
                <div className='container'>
                    <h1 className='home-title'>Seymur Guluzade</h1>
                    <h2 className='home-subtitle'>Frontend Developer</h2>
                </div>
            </section>
        </div>
    )
}

export default Home;