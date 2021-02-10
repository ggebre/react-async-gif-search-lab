import React from 'react' 
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
    state = {
        gifs: [],
        title: ""
        
    }

    resetGifs = () => {
        this.setState({gifs: []})
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.resetGifs()
        this.fetchGifs(this.state.title)
    } 
    handleChange = (event) => {
        this.setState({title: event.target.value})
    }
    componentDidMount() {
        this.fetchGifs()
    }

    fetchGifs = (query="dolphin") => {
        fetch("https://api.giphy.com/v1/gifs/search?q="+query+"&api_key=7fJj0GHnfWEZ1p4xTxlkJQEVW1rJx7IR&rating=g")
        .then(resp => resp.json())
        .then(respObj => {
            respObj.data.forEach(dataObj => {
                const title = dataObj.title 
                const imageUrl = dataObj.images.original.url 
                this.setState((prevState) => ({
                    gifs: [...prevState.gifs, {title: title, imageUrl: imageUrl}],
                    title: ""
                }))
            }) 
        })
    }
    render() {
        
        return (
            <div className="container">
                <div className="row">
                    <GifList  gifs = {this.state.gifs.slice(0,3)}/>
                    <GifSearch 
                        title={this.state.title} 
                        handleChange={this.handleChange}
                        handleSubmit= {this.handleSubmit} />
                </div>
            </div>
        )
    }
}