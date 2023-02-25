import React, { Component } from 'react';
import Card from './Card';

import arrowIcon from "../Assets/Icons/arrow-icon.svg";
import Spinner from './Spinner';

export class BlogData extends Component {
    static defaultProps = {
        pageSize: 6,
    }
    
    constructor (props) {
        super(props);
        this.state = {articles: [], loading: false, page: 1, totalResults: 0, query: ""};
    }
    
    updateNews = async (page, loadMore) => {
        const url = `https://lyrical-deer-production.up.railway.app/api/posts?page=${page}&limit=${this.props.pageSize}`;
        this.setState({loading: true});
    
        const data = await fetch(url);
        const parsedData = await data.json();
    
        if (loadMore === false) {
          this.setState({articles: parsedData.results});
        } else if (loadMore === true) {
          this.setState({articles: this.state.articles.concat(parsedData.results)});
        }
        this.setState({
          loading: false,
          totalResults: parsedData.totalResults
        })
      }
    
      loadFunc = () => {
        this.updateNews(this.state.page + 1, true);
        this.setState({page: this.state.page + 1});
      }
    
      async componentDidMount() {
        this.updateNews(this.state.page, false);  
      }
    

  render() {
    return (
        <section className="pt-12">
            <div className="pt-8 pb-4 px-4 md:px-12 xl:px-24 flex shadow-xs bg-gray-50">
                <input type="text" className="w-full border px-3 border-gray-500 h-10 focus:outline-none"
                placeholder="Search something ..." onChange={(event) => this.setState({query: event.target.value})} />
            </div>
            <section className="my-8 mb-12 px-4 md:px-12 xl:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                    {this.state.articles.filter(e => {
                        if (this.state.query === "") {
                            return e;
                        } else if (e.title.toLowerCase().includes(this.state.query.toLowerCase())) {
                            return e;
                        }
                    }).map(e => {
                        return <Card key={e._id} title={e.title} desc={e.desc} image={e.image} id={e._id} />
                    })}
                </div>
                {this.state.loading && 
                <div className="flex justify-center items-center w-full mt-12">
                    <Spinner width="w-12" />
                </div>}
            </section>
            
            <div className="flex justify-between px-4 md:px-12 xl:px-24 py-3 bg-gray-100">
                <button className="bg-black text-white font-proximaNovaSemiBold text-xl flex justify-center
                items-center p-2 px-4  btn btn-background-slide hover:border-cyan-600" onClick={this.loadFunc}>
                    Show more <img src={arrowIcon} alt="" className="invert w-4 ml-2" />
                </button>
            </div>
        </section>
    )
  }
}

export default BlogData
