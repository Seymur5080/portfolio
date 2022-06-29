import React from "react";
import seymurImg from "../image/Seymur(Foto)2.jpeg";

const Info = () => {
    return (
        <div>
            <section className='info'>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="image">
                                <img src={seymurImg} alt=""/>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="context">
                                <p>My name is Seymur. I’m 22 years old. I have been studying frontend development about a
                                    year. I can work with HTML5, CSS3, Bootstrap, SASS/SCSS, JavaScript, (ES6-ES8),
                                    JQuery, React+Redux/Context API, Vue+Vuex, REST API, Git/GitHub. I recently started
                                    learning PHP for backend development. I‘ m very hardworking , diligent and also I
                                    can work in a team.The goal is to become a full stack developer in the future.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Info;