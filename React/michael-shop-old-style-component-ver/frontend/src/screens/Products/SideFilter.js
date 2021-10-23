import React from 'react'
import styled from "styled-components";

const Sidebar = styled.div`
    left: 0;
    float: left;
    margin: 5px;
    width: 220px;
    height: calc(100vh - 200px);
    overflow: hidden scroll;
    background-color:s-thumb {
    width: 250px;
    height: 140px;
    overflow: auto;
    }
    &::-webkit-scrollbar {
    width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #2f3542;
    }
    &::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: grey;
    }
  
    `;

const SimpleBarWrapper = styled.div`
    margin: 0px;
    padding-left: 38px;
    padding-right: 38px;
`;

const SimpleBarContent = styled.div`
    position: relative;

    & ul > li{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
    display: block;
    font-size: 18px;
    color: #009681;
    line-height: 50px;
   
}

& ul > li ul {
    //display: none;
}

& ul > li > ul > li{
    border-bottom: #e5e5e5 solid 1px;
}

& ul > li > ul > li input:hover {
    color: #009681;
    cursor: pointer;
    border-color: #009681;
}

`;


const CheckContent  = styled.span`
font-size: 11px;
color: #252525;
cursor: pointer;

&:hover{
    color: #009681;

}

`;





export default function SideFilter() {
    return (
        <Sidebar>
            <SimpleBarWrapper>
                <SimpleBarContent>
                    <ul>
                        <li>
                            판매 상태
                            <ul>
                                <li>
                                <input
                                    type="checkbox"
                                    id="check"
                                    ></input>
                                    <label id="check" htmlFor="check"> <CheckContent>품절 상품 제외</CheckContent></label>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </SimpleBarContent>
            </SimpleBarWrapper>


        </Sidebar>
    )
}
