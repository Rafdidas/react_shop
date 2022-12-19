/* eslint-disable */
import './App.css';

function App() {
  return (
    <div className="App">
      <div id='#wrapper'>
        <header id='header'>
          <div className='gnb'>
            <div className='wrap_inner_hd'>
              <h1 className='title'><img src={process.env.PUBLIC_URL + './img/lesop_logo.png'}/></h1>
              <ul className='hd_menu'>
                <li><a href="#">모든 제품</a></li>
                <li><a href="#">브랜드 소개</a></li>
                <li><a href="#">프로모션</a></li>
                <li><a href="#">커뮤니티</a></li>
                <li><a href="#">고객센터</a></li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;