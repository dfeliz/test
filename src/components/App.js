import React from 'react';
import '../styles/App.css';
import norris from '../apis/norris';
import ComboBox from './ComboBox';
import LoadingScreen from './LoadingScreen';

class App extends React.Component {
    state = { joke:'', icon:'', category:'', isLoading: false };

    onButtonClick = async () => {
        this.setState({ isLoading: true});

        let category = this.state.category;
        
        const response = await norris.get('/jokes/random?category=' + category);
        
        this.setState({ joke: response.data.value, icon: response.data.icon_url, isLoading: false });
    }

    handleChange(event) {
        this.setState({ category: event.target.options[event.target.selectedIndex].text });
    }

    actualContent() {
        if (this.state.isLoading) {
            return (
                <LoadingScreen />
            );
        } else {
            return (
                <div className="joke">
                    <div className="joke icon"><img src={this.state.icon} alt="" /></div>
                    <div className="joke text">{this.state.joke}</div>
                </div>
            );
        }
    }

    renderContent() {
        return (
            <div className="contenido">

                <div className="ui container">
                    <div className="ui segment">
                        <h1>Chuck Norris jokes</h1>

                        <div className="ui divider" />

                        <div className="combobox" style={{textAlign: "center"}} >
                            <ComboBox handleChange={this.handleChange.bind(this)}/>
                        </div>
                        <br></br>
                        <button className="ui primary button" onClick={this.onButtonClick} style={{ width: '100%' }}>
                            Bring me a joke!
                        </button>
                        
                        <div className="ui divider" />

                        <div className="bottom">
                            {this.actualContent()}
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }

    render() {
        return (
            <div>{this.renderContent()}</div>
        )
    }
}

export default App;