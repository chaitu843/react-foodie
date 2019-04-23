import React, { Component } from 'react'

class SearchSection extends Component {
    render() {
        return (
            <section class="my-5 searchSection" id="searchSection" style="display: block;">
                <h2>Search Results</h2>
                <hr />
                <div class="row searchResults" id="searchResults">
                    <div class="resto card col-md-3">
                        <img class="card-img-top" alt = "card-title" src="https://b.zmtcdn.com/data/pictures/chains/2/18603822/b285d83b2b27d54d2fb5fc29bbdc2e07.jpg" />
                        <div class="card-body">
                            <h5 class="card-title">The Pizza Bakery</h5>
                            <p class="card-text text-muted">Italian, Pizza, Beverages <br /> Cost 1200 for two </p>
                            <button type="button" class="btn btn-danger add " id="18603822" data-toggle="modal" data-target="#collectionModal">♡</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default SearchSection
