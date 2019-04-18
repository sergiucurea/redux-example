import React from 'react';
import UserList from '../containers/user-list'
import '../../css/style.css';
import UserDetail from '../containers/user-detail';


const App = () => (
    <div>
        <h2>Username List:</h2>
        <UserList />
        <hr />
        <h2>User Details:</h2>
        <UserDetail />
    </div>
);

export default App;