import logo from './logo.svg';
import './App.css';
import Example from './Example';
import { Button } from 'react-bootstrap';

//  import 'bootstrap/dist/css/bootstrap.min.css';


 
function App() {
  return (


    <>
  <h1>Welcome demo modal & Tooltips</h1>

<button className="btn btn-danger">Hello I am Button</button>

    <div>

      {/* <!-- Button trigger modal --> */}
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

{/* <!-- Modal --> */} 
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

      <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Home</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Home</a></li>
    <li className="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Home</a></li>
    <li className="breadcrumb-item"><a href="#">Library</a></li>
    <li className="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>



<Example />   
    </div>


    {/* <span className='tt' data-bs-placement="right" data-bs-title="Tooltip on top">


<button type="button" className="btn btn-success">
  
      Tooltip on right
    </button>
    </span>
    <script>
      
    const tooltipTriggerList = document.querySelectorAll('.tt')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  
    </script> */}


    </>
  );
}

export default App;
