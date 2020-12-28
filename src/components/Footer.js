import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="row pie">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                    <h3><i>Contacto</i></h3>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/luisalejandroperalta/" target="_blank" className="redes"><i
                                    className="fab fa-linkedin-in"></i> Linkedin</a></li>
                        <li><a href="https://github.com/Luis-Peralta" target="_blank" className="redes"><i
                                    className="fab fa-github"></i> GitHub</a></li>
                        <li><a href="https://www.instagram.com/luisperalta8/" target="_blank" className="redes"><i
                                    className="fab fa-instagram"></i> Instagram</a></li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <p className="luis">By Luis Peralta®</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
