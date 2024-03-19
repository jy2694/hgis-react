import './App.css';
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect} from "react";
import NavigationBar from "./components/NavigationBar";
import TreeMenu from "./components/TreeMenu";
import {school} from "./constant/School";

function App() {

  const {kakao} = window;

  useEffect(() => {
    let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    let options = { //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 8 //지도의 레벨(확대, 축소 정도)
    };
    let map = new kakao.maps.Map(container, options);
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
      map.setCenter(new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude))
    });

    for(let i = 0; i < school.length; i ++){
      const object = school[i];
      let markerPosition  = new kakao.maps.LatLng(object.latitude, object.longitude);

      // 마커를 생성합니다
      let marker = new kakao.maps.Marker({
        position: markerPosition
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);

      let iwContent = '<div style="display: flex; flex-direction: column; justify-content: center; align-items: center; width: 300px"><h5 style="margin: 3%; width: 90%; text-align: start">'+object.name+'</h5><hr style="margin: 0px; height: 1px; background: black; border: 0px; width: 100%"/><p style="margin: 3%; width: 90%; text-align: start">주소 : '+object.address+'</p><p style="margin: 3%; width: 90%; text-align: start">설립구분 : '+object.type+'</p></div>';

      let infowindow = new kakao.maps.InfoWindow({
        content : iwContent
      });

      kakao.maps.event.addListener(marker, 'mouseover', function(){
        infowindow.open(map, marker);
      })

      kakao.maps.event.addListener(marker, 'mouseout', function() {
        infowindow.close();
      })
    }
  }, []);

  return (

    <div className="App">
      <NavigationBar/>
      <Container className="d-flex justify-content-center align-items-center" style={{height: "94vh", width: "100%"}}>
        <TreeMenu />
        <div id="map" className="m-1 rounded-end" style={{width:"80%", height: "98%"}}></div>
      </Container>
    </div>

  );
}

export default App;
