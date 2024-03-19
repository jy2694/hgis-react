import {Container} from "react-bootstrap";
import '../css/TreeMenu.css';
import {cities} from "../constant/District";

export default function TreeMenu(){

    const renderCities = () => {
        const result = [];
        for (let i = 0; i < cities.length; i ++){
            const city = cities[i];
            const towns = [];
            for(let townIdx = 0; townIdx < city.towns.length; townIdx ++){
                towns.push(<li className="rounded">{city.towns[townIdx]}</li>)
            }
            result.push(<li key={i} className="w-100">
                <input className="" type="checkbox" id={i+""}/>
                <label className="text-black rounded fw-bold" htmlFor={i+""}>{city.title}</label>
                <div className="sub_menu">
                    {towns}
                </div>
            </li>)
        }
        return result;
    }
    
    return (
        <Container className="rounded-start overflow-y-auto" style={{background: "#F8F9FA", maxWidth: "20%", minWidth:"20%", height: "98%"}}>
            <div className="menu_tree_management w-100 ms-1 me-1 mt-3 mb-3">
                <div className="title w-100 text-center">지역 선택</div>
                <div className="table_ctn w-100 text-start">
                    <div className="menu_tree w-100">
                        <ul style={{padding: "0px"}} className="w-100">
                            {renderCities()}
                         </ul>
                    </div>
                </div>
            </div>
        </Container>
    );
}