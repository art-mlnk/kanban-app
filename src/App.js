import {Header} from './components/header/header';
import {Main} from './components/main/main';
import {Footer} from './components/footer/footer';
import {useEffect, useState} from 'react';
import {BrowserRouter} from 'react-router-dom';

function App() {
  const initialState = JSON.parse(window.localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(initialState);

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <BrowserRouter>
    <container>
        <Header />
        <Main tasks={tasks} setTasks={setTasks}/>
        <Footer tasks={tasks}/>
    </container>
    </BrowserRouter>
  );
}

export default App;
