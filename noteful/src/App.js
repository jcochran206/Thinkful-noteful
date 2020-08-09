import React from 'react';
import './App.css';
import STORE from './dummy-store';
import { Route, Link, Switch} from 'react-router-dom';
import Header from './Header'
import ShowFolders from './Folder/showFolder';
import AddNote from './Note/addNote';
import AddFolder from './Folder/addFolder';

class App extends React.Component {
  state = {
    notes: [],
    folders: []
  };

  componentDidMount() {
    setTimeout(() => this.setState(STORE), 600);
  }

  renderNavRoutes() {
    return (
        <>
            {['/', '/folder/:folderId'].map(path => (
                <Route
                    exact
                    key={path}
                    path={path}
                    component={ShowFolders}
                />
            ))}
            <Route path="/note/:noteId"  />
            <Route path="/add-folder" component={AddFolder} />
            <Route path="/add-note" component={AddNote} />
        </>
    );
}
  render() {
    return (
      <div className="App">
      <Header/>
      {/* side routes */}
      <aside>
        <h2>folders</h2>
        {/* {this.renderNavRoutes()} */}
      </aside>

      <main>
        
      </main>
      {/* <Route exact path='/' component={}/> */}
      </div>
    );
  }
}

export default App;