import { Navbar,Nav,Container } from 'react-bootstrap';
import Add  from './components/Add';
import List from './components/List';
import Edit from './components/Edit';
import View from './components/View';
import { BrowserRouter,Route,Routes } from 'react-router-dom';



function App() {
  
  return (
    <BrowserRouter>
    <div>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">API Application</Navbar.Brand>
          <Nav className="float-right">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="add">AddNew</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      <Container className='pt-5'>
        <Routes>
         <Route index element={<List/>}/>
          <Route path='add'element={<Add/>}/>
          <Route path='/users/:userid/edit'element={<Edit/>}/>
          <Route path='users/:userid'element={<View/>}/>
         
        </Routes>
      </Container>
    </div>
    
    
    </BrowserRouter>
    
  );
}

export default App;
