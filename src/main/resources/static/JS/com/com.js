const removeModal = () => {
    const modal = document.querySelector('.modal-background');
    document.body.removeChild(modal);
    window.location.reload();
  };

  const handleCloseClick = () => {
    removeModal();
  };

  const handleConfirmClick = () => {
    // 처리 로직 추가
    // alert('Confirmed!');
    removeModal();
  };

  //모달창 호출
  const showModal = (data) => {
    const modal = document.createElement('div');
    modal.classList.add('modal-background');
    modal.innerHTML = `
      <div class="modal-content">
        <div class="알림 메세지">
          <h2>Modal Header</h2>
        </div>
        <div class="modal-body">
          <p>`+data+`</p>
        </div>
        <div class="modal-footer">
          <button class="close-btn" onclick="handleCloseClick()">닫기</button>
          <button class="confirm-btn" onclick="handleConfirmClick()">확인</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  };


/**################################*/

function add_tr(table_id) {//행 추가
  let table_body = document.getElementById(table_id);
  let first_tr   = table_body.firstElementChild;
  let tr_clone   = first_tr.cloneNode(true);//*1)복제된 node 반환

  table_body.append(tr_clone);
  clean_first_tr(table_body.firstElementChild);
}

function clean_first_tr(firstTr) {//값 초기화
  let children = firstTr.children;//*2) 자식 요소가 포함된 HTMLCollection을 반환
  
  children = Array.isArray(children) ? children : Object.values(children);//*3)
  children.forEach(x=>{
      if(x !== firstTr.lastElementChild){//마지막child가 아닐때
          //x.firstElementChild.value = '';//td의 첫번째 child > input값 초기화
      }
  });
}

function remove_tr(This) {//행 삭제
  //*4)closet:현재 엘리멘트에서 가장 가까운 조상을 반환
  if(This.closest('tbody').childElementCount == 1)
  {
      alert("삭제할 수 없습니다.");
  }else{
      This.closest('tr').remove();//삭제
  }
}

// 체크된 테이블 행삭제
function delRow(This){
  // javascript를 사용한 방법
  var tableData = document.getElementById(This);
  for(var i = 1 ; i < tableData.rows.length; i ++ ){
    var chkbox = tableData.rows[i].cells[1].childNodes[0].checked ;
    if(chkbox){
        tableData.deleteRow(i);
        i--;
    }
  }
}

// 전체 테이블 행 삭제
function delAllRows(tableId){
  var tableData = document.getElementById(tableId);
  var rowCount = tableData.rows.length;

  // 테이블 행을 끝에서부터 삭제합니다.
  for(var i = rowCount - 1; i > 0; i--){
    tableData.deleteRow(i);
  }
}

function printIfNotNull(input) {
  if (input !== null && input !== undefined && input.length != 0 ) {
    return true;
  }
  return false;
}