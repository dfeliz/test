import React from 'react';

class ComboBox extends React.Component {
    state = { categories: [] };
    
    
    componentDidMount() {
        fetch('https://api.chucknorris.io/jokes/categories')
        .then(response => {
            return response.json();
        }).then(data => {
            const categoriesFromApi = data.map( category => { 
                return (
                    {display: category}
                );
            })
            this.setState({ categories: [{display: 'Select category'}].concat(categoriesFromApi) });

        }).catch(error => {
            console.log(error);
            
        });
    }

    render() {
        let categories = this.state.categories;
        let optionItems = categories.map((cat) =>
            <option key={cat.display}>{cat.display}</option>
        );

        return (
            <div>
                <select onChange={this.props.handleChange} >
                    {optionItems}
                </select>
            </div>
        );
    }
}

export default ComboBox;