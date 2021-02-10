import React from 'react' 

export default class GifList extends React.Component {
    listOfGifs = () => {
        return this.props.gifs.map((gif, index) => <li key={index}><img src={gif.imageUrl} alt={gif.title}/></li> )
    }
    render() {
        return (<ul>
                {this.listOfGifs()}
            </ul>)
    }
}