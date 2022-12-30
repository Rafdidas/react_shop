/* eslint-disable */
import './App.css';

function App() {
  return (
    <div className="App">
      <div id='wrapper'>
        {/* header */}
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
              <ul className='right_menu'>
                <li className='hd_srch'><a href='#'>검색</a></li>
                <li className='hd_my'><a href='#'>마이페이지</a></li>
                <li className='hd_wish'><a href='#'>위시리스트</a></li>
                <li className='hd_cart'><a href='#'>장바구니</a></li>
              </ul>
            </div>
          </div>
        </header>
        {/* cnt */}
        <div id="cnt">
          <div className='cntbody'>
            {/* main */}
            <div id='main'>
              {/* visual */}
              <div className='main_visual'>
                <div className='visual_box'><img src={process.env.PUBLIC_URL + './img/main_banner_2.png'}></img></div>
                <ul className='event_box'>
                  <li><img src={process.env.PUBLIC_URL + './img/event_1.png'}></img></li>
                  <li><img src={process.env.PUBLIC_URL + './img/event_2.png'}></img></li>
                </ul>
              </div>
              {/* best */}
              <div className='main_best'>
                <div className='wrap_inner'>
                  <div className='title_section'>
                    <h3>BEST</h3>
                    <a href='#'>더 보러가기</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;