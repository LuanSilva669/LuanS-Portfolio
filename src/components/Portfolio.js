import React, { Component } from 'react';

export default class Porfolio extends Component {
  render() {
    const { resumeData } = this.props;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>
              Check Out Some of My Works.{' '}
              <a
                href="https://github.com/stars/LuanSilva669/lists/my-stack"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project repository
              </a>
            </h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => (
                  <div className="columns portfolio-item" key={item.id}>
                    <div className="item-wrap">
                      <a
                        href={item.link}
                        onClick={(event) => {
                          window.open(item.link, '_blank');
                          event.preventDefault();
                        }}
                      >
                        <img src={item.imgurl} alt="portfolio" className="item-img" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
