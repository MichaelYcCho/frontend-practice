const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d"); /*  DOM 객체로부터 2D 컨텍스트를 얻는다 */
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700; 


/*캔버스에도 사이즈를 부여해야 정상적으로 작동함 */
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR; /*도형의 윤곽선 색 설정. */
ctx.fillStyle= INITIAL_COLOR;
ctx.lineWidth = "2.5"; /*그 선의 너비가 2.5px라는 뜻  */
ctx.fillStyle="green";
/*ctx.fillRect(50, 20, 100, 49);*/

let painting = false;
let filling = false; 




function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}


function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath(); /*path(여기서는 라인의 시작점을 설정) 클릭하고 움직이면 실행되지 않음*/
        ctx.moveTo(x, y); /* x, y는 path의 값을 받음  클릭이 끝나면 path의 끝지점으로 선택됨*/
    }else{        
        ctx.lineTo(x, y);  /*마지막점을 특정좌표와 직선으로 연결한다.  */
        ctx.stroke();
    }
}




function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color; /* 오버라이딩을 통한 디폴트값의 컬러 변경 여기의 strokeStyle은 target의 컬러색상으로 변경됨  */
    ctx.fillStyle= color;  /*color을 클릭하면 fillstyle도 그 색을 따라 변경하도록 설정  */
}

function onMouseUp(event){
    stopPainting();
}

function hadleRangeChange(event){ /*오버라이딩을 통해서 브러쉬의 크기를 조절 */
    const size = event.target.value;
    ctx.lineWidth = size;

}

function handleModeClick(){
    if(filling === true){
        filling = false;
        mode.innerText = "Fill";
    }else{
        filling = true;
        mode.innerText = "Paint";
   
    }
}

function handleCanvasClick() {
    if(filling){
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);  /*0,0의 좌표부터 시작해서 캔버스 사이즈만큼 덮음 */
     
    }
}

function onMouseLeave(event){
    stopPainting();
}


function handleCM(event) {
    event.preventDefault();  /*우클릭을 방지하는 방법  */
  }


function handleSaveClick(){
    const image = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");
    link.href = image;  /*href는 이미지를 가지고와야하고  */
    link.download = "PaintJS[🎨]"; /*다운로드는 이미지의 이름을 기입해야함 */
    link.click();
}




if(canvas){   /*client set : 윈도우 전체 범위 내에서의 마우스 위치값// offset X, Y 캔버스 내에서의 마우스 위치값*/
    canvas.addEventListener("mousemove", onMouseMove); /*지정된 이벤트가 발생했을때 2번째 인자를 실행 */ 
    canvas.addEventListener("mousedown", startPainting); /*마우스를 버튼을 누르면 발생하는 이벤트) */
    canvas.addEventListener("mouseup", stopPainting); /* 마우스 버튼 빼면 발생하는 이벤트*/
    canvas.addEventListener("mouseleave", onMouseLeave); /* 마우스가 캔버스 밖으로 벗어나면 발생하는 이벤트*/
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM); /*우클릭 방지  */
}

    Array.from(colors).forEach(color =>
    color.addEventListener("click", handleColorClick)
    );


    if (range){
        range.addEventListener("input", hadleRangeChange);
    }    
    
    if (mode) {
        mode.addEventListener("click", handleModeClick);
    }

    if (saveBtn) {
        saveBtn.addEventListener("click", handleSaveClick);
      }
      /*end*/