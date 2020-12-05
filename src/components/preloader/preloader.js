import React from 'react';
import './_preloader.scss';

const preloader = () => {

    return (
        <div className="section-preloader uk-padding-large uk-section uk-section-secondary uk-flex uk-flex-center">
            <div>
                <span id="L">GO</span>
                <span id="I">I</span>
                <span id="G">V</span>
                <span id="H">I</span>
                <span id="T">.org</span>
            </div>
        </div>
    );
};

export default preloader;