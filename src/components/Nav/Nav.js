import React from 'react';
import SearchForm from '../SearchForm/SearchForm';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">BhoJAn</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#home">Home
                    <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#RecommendedSection">Collections</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#restaurantsSection">Restaurants</a>
                    </li>
                </ul>
               <SearchForm />
            </div>
        </nav>
    )
}

export default Nav
