'use strict';

const React         = require('react');
const jQuery        = require('jquery');
const Install       = require('./install.js');
const eventhandler  = require('./eventhandler');

var AppComponent = React.createClass({

    getInitialState: function() {
        return {

        };
    },

    render: function() {

        return (
            <div id="content" className="table wide">
                <div className="table wide">
                    <div className="cell">
                        <main>
                            <header>
                                <img src="/web-assets/images/logo.svg" width="100" height="100" alt="Contao Logo" />
                                    <p className="welcome"><strong>Welcome</strong> to Contao Manager v1.0</p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                            </header>

                            <section>
                                <Install />
                            </section>

                            <footer>
                                © 2016 <a href="http://association.contao.org/" target="_blank">Contao Association</a>
                                <a href="" className="support">Support</a>
                            </footer>
                        </main>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = AppComponent;