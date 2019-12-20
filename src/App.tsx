import React, {useState} from 'react';
import './App.css';
import Header from './_components/Header/';

const LINKS = ['commercial', 'stories', 'graphic', 'info'];
const TITLE = 'Marco D\'Andolfi';

const App: React.FC = () => {
  const [active, setActive] = useState(LINKS[0]);
  return (
    <div className="App">
        <Header
          links={LINKS}
          openedLink={active}
          setActive={setActive}
          title={TITLE}
        />
    </div>
  );
};

export default App;
