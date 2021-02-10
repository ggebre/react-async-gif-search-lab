import React from 'react'


const GifSearch = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label> Enter a Search</label>
            <input onChange={props.handleChange} type="text" name="title" value={props.title}/>
            <input type="submit" value="Submit" />
        </form>
    )
}  

export default GifSearch