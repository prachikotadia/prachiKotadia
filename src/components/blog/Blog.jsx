/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Blog.css';

import Image1 from '../../assets/blog-1.svg';

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Latest Posts</h2>

            <div className="blog__container grid">
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="https://medium.com/@patelaksht24/at-ts-massive-data-breach-what-happened-and-what-it-means-for-you-817c7a7d3cc2" target="_blank" rel="noopener noreferrer">
                            <span className="blog__category">Example</span>
                        </a>
                        <a href="https://medium.com/@patelaksht24/at-ts-massive-data-breach-what-happened-and-what-it-means-for-you-817c7a7d3cc2" target="_blank" rel="noopener noreferrer">
                            <img src={Image1} alt="Example Blog" className='blog__img' />
                        </a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">
                            <a href="https://medium.com/@patelaksht24/at-ts-massive-data-breach-what-happened-and-what-it-means-for-you-817c7a7d3cc2" target="_blank" rel="noopener noreferrer">
                                Example Blog
                            </a>
                        </h3>
                        <div className="blog__meta">
                            <span>09 February, 2022</span>
                            <span className="blog__dot">.</span>
                            <span>Prachi Kotadia</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog;
