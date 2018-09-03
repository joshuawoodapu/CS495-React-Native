// Import a library to create a component
import React from 'react';
import Header from './src/components/header';

// Create a component
const App = () => (
    <Header headerText={'Albums'} />
);

// Export it so it is accessible by the index
export default App;
