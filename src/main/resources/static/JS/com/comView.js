// 페이지 로드 후 동작
window.onload = function(){
    
// 테이블의 Row 클릭시 값 가져오기
var rows = document.querySelectorAll("#example-table-1 tr");

rows.forEach(function(row) {
  row.addEventListener("click", function() {
      var str = "";
      var tdArr = []; // 배열 선언

      // 현재 클릭된 Row(<tr>)
      var tr = this;
      var td = tr.children;

      
      // tr.textContent는 클릭된 Row 즉 tr에 있는 모든 값을 가져온다.
      //console.log("클릭한 Row의 모든 데이터 : " + tr.textContent);

      // 반복문을 이용해서 배열에 값을 담아 사용할 수 도 있다.
      Array.prototype.forEach.call(td, function(cell) {
          tdArr.push(cell.textContent);
      });

      //console.log("배열에 담긴 값 : " + tdArr);

      // 인덱스를 통해 값을 가져올 수도 있다.
      //var no = td[0].textContent;
      //var userid = td[1].textContent;
      var I_S_SECTION_CD = td[1].textContent;
      if(!printIfNotNull(I_S_SECTION_CD)){
        document.getElementById("I_C_SECTION_CD").value ="";
        document.getElementById("I_C_CLSFC_CD").value ="";
        document.getElementById("I_C_CLSFC_NM").value ="";
        document.getElementById("I_C_ITEM_01").value ="";
        document.getElementById("I_C_ITEM_02").value ="";
        document.getElementById("I_C_ITEM_03").value ="";
        document.getElementById("I_C_ITEM_04").value ="";
        document.getElementById("I_C_ITEM_05").value ="";
        document.getElementById("I_C_ITEM_06").value ="";
        document.getElementById("I_C_ITEM_07").value ="";
        document.getElementById("I_C_ITEM_08").value ="";
        document.getElementById("I_C_ITEM_09").value ="";
        document.getElementById("I_C_ITEM_10").value ="";
        document.getElementById("I_C_REG_YMD").value ="";
        delAllRows('table_body');
        return;
      }
      document.getElementById("I_C_SECTION_CD").value = I_S_SECTION_CD;
      /*
      var SECTION_CD = JSON.stringify({
        SECTION_CD: I_S_SECTION_CD,
      })
      */
      const url = '/com/clsfSelect';
      const params = { SECTION_CD: I_S_SECTION_CD };
      //result = sendGetRequestWithParams(url, params);

      // 함수 호출
      sendGetRequestWithParams(url, params)
      .then(result => {
          // 비동기 작업 결과(result)를 이용한 작업을 수행합니다.
          //console.log('비동기 작업 결과:', result);
          newAddTableRow(result);
      })
      .catch(error => {
          // 에러 처리
          console.error('Error:', error);
      });

      //var name = td[2].textContent;
      //var email = td[3].textContent;
/*
      str +=
          " * 클릭된 Row의 td값 = No. : <font color='red'>" +
          no +
          "</font>" +
          ", 아이디 : <font color='red'>" +
          userid +
          "</font>" +
          ", 이름 : <font color='red'>" +
          name +
          "</font>" +
          ", 이메일 : <font color='red'>" +
          email +
          "</font>";
*/
      //document.getElementById("ex1_Result1").innerHTML = " * 클릭한 Row의 모든 데이터 = " + tr.textContent;
      //document.getElementById("ex1_Result2").innerHTML = str;
  });
});
}

// 데이터 추가
function sectopmInput(){
    //const SECTION_CD = document.getElementById('SECTION_CD').value;
    const SECTION_NM = document.getElementById('SECTION_NM').value;
    const USE_YN = document.getElementById('USE_YN').value;
    const REG_YMD = document.getElementById('REG_YMD').value;

    var url = "/com/sectionInsert";
    var result;
    var request = JSON.stringify({
        //SECTION_CD: SECTION_CD,
        SECTION_NM: SECTION_NM,
        USE_YN: USE_YN,
        REG_YMD: REG_YMD,
      });
      result = postSend(url, request);
}

function sectopmUpdate(no){
  
  const SECTION_NO = no;
  const SECTION_CD = document.getElementById('I_S_SECTION_CD').value;
  const SECTION_NM = document.getElementById('I_S_SECTION_NM').value;
  const USE_YN = document.getElementById('I_S_USE_YN').value;

  var url = "/com/sectionUpdate";
  var result;
  var request = JSON.stringify({
      NO: SECTION_NO,
      SECTION_CD: SECTION_CD,
      SECTION_NM: SECTION_NM,
      USE_YN: USE_YN
    });
    //alert(JSON.stringify({request}));
    result = postSend(url, request);

}

function sectopmUpdate2(rowId) {
  const table = document.getElementById('example-table-1');
  const rows = table.getElementsByTagName('tr');
  var jsonArray = []; // Array to hold JSON objects
  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName('td');
    const ths = rows[i].getElementsByTagName('th');
    
      let jsonKey = ['SECTION_CD', 'SECTION_NM', 'USE_YN','REG_YMD', 'USE_NM'];
    if (ths.length > 0 && ths[0].innerText === rowId) {
      let rowData = {};
      rowData['NO'] = rowId; // Setting 'id' field in the JSON
      
      // Skip the first cell (th)
      for (let j = 1; j < cells.length; j++) {
        if (cells[j].querySelector('input, select')) {
          // If the cell contains input or select element
          rowData[jsonKey[j]] = cells[j].querySelector('input, select').value;
        } else {
          // Otherwise, take the text content
          rowData[jsonKey[j]] = cells[j].textContent;
        }
      }
      
      jsonArray.push(rowData); // Adding rowData object to jsonArray
      
      break; // Exit the loop after finding the row
    }
  }

  var url = "/com/sectionUpdate";
  var result;
  result = postSend(url, JSON.stringify(jsonArray[0]));
}

function newAddTableRow(result) {
  let jsonKey = [ 'SECTION_CD','CLSFC_CD', 'CLSFC_NM', 'ITEM_01', 'ITEM_02', 'ITEM_03', 'ITEM_04', 'ITEM_05', 'ITEM_06', 'ITEM_07', 'ITEM_08', 'ITEM_09', 'ITEM_10', 'USE_YN','REG_YMD'];

    // 테이블 내용 만들기
    var tableBody = document.getElementById('table_body');
    var bodyHtml = '';
    if(!printIfNotNull(result)){
      delAllRows('table_body');

      add_tr('table_body');
      return;
    }
/*

    for (var i = 0; i < result.length; i++) {
        bodyHtml += '<tr>';
        bodyHtml += '<th>0</th>';
        bodyHtml += '<td style="width: 10px;"><input type="checkbox" class="checkboxName"></td>';
        for (var key in result[i]) {
          
          if('SECTION_CD' == key){
            console.log("결과 1 : " + key + " js key "+ jsonKey[i] + " re " + (result[i].SECTION_CD) );
            bodyHtml +='<td><input type="text" name="I_C_SECTION_CD" id="I_C_SECTION_CD" placeholder="대분류코드" readonly value="'+result[i].SECTION_CD+'"></td>';  
          }else if(key == jsonKey[i]) {
            console.log("결과 2 : " + key + " js key "+ jsonKey[i] + " re " + (result[i][key]) );
            //bodyHtml += '<td>' + result[i][key] + '</td>';
            bodyHtml +='<td><input type="text" name="I_C_'+key+'" id=I_C_"'+key+'" value="'+result[i][key]+'"></td>';
          }
        }
        bodyHtml += '</tr>';
    }
    tableBody.innerHTML = bodyHtml;
*/
  result.forEach(function(result) {
    bodyHtml += '<tr>';
    bodyHtml += '<th ><input id="NO" name="NO" type="text" value="'+result.NO+'" style="width: 10px; border: none; background: transparent;" readonly></th>';
    bodyHtml += '<td style="width: 10px;"><input type="checkbox" class="checkboxName"></td>';
    //{"ITEM_02":null,"NO":"11","ITEM_03":null,"ITEM_01":null,"ITEM_10":null,"SECTION_CD":"BANK01","CLSFC_NM":"퇴직연금","USE_YN":"Y","REG_YMD":"2024-01-07","ITEM_08":null,"ITEM_09":null,"ITEM_06":null,"CLSFC_CD":"BANK_03","ITEM_07":null,"ITEM_04":null,"ITEM_05":null}
    //console.log("result "+JSON.stringify(result));
    var cnt = 0;
        for(var i = 0; i < jsonKey.length; i++) {
              for (var key in result) {
                if(jsonKey[i] == key){
                  
                if('SECTION_CD' == jsonKey[i]){
                  bodyHtml +='<td><input type="text" name="I_C_'+key+'" id="I_C_'+key+'" readonly value="'+result[jsonKey[i]]+'"></td>';  
                }else if('USE_YN' == jsonKey[i]){
                  console.log(i + " = result "+result.USE_YN);
                  console.log(result.USE_YN + " | " +(result.USE_YN == 'Y' ? '1': 'selected'));
                  bodyHtml +=`<td>
                        <select th:name="I_C_USE_YN" th:id="I_C_USE_YN"  class="select">
                          <option value="Y" ${result.USE_YN === 'Y' ? 'selected' : ''} >사용</option>
                          <option value="N" ${result.USE_YN === 'N' ? 'selected' : ''} >미사용</option>
                        </select></td>
                  `;
                }else{
                  bodyHtml +='<td><input type="text" name="I_C_'+key+'" id="I_C_'+key+'"  value="'+(printIfNotNull(result[jsonKey[i]] )? result[jsonKey[i]] : '' )+'"></td>';  
                }
                break;
              }
            }
        }
    
          //bodyHtml +='<td><input type="text" name="I_C_SECTION_CD" id="I_C_SECTION_CD" placeholder="대분류코드" readonly value="'+result.SECTION_CD+'"></td>';  
          
           
          
          
          //console.log(cnt+" "+jsonKey[cnt]+ " " + key);
          //continue;
        /*
        if((key == jsonKey[i])){
          //bodyHtml +='<td><input type="text" name="I_C_'+key+'" id=I_C_"'+key+'" value="'+result[key]+'"></td>';
          
          console.log("result key 2 "+key + " value " + result[key] + " = " + (key == jsonKey[i]));
        }
        */
    bodyHtml += '</tr>';
  }); 
  tableBody.innerHTML = bodyHtml;

}

var row = 1;
function addTableRow() {
  const table = document.querySelector('.table02 tbody');
  const newRow = document.createElement('tr');
  
  // Sample cells for the new row, adjust as needed
  newRow.innerHTML = `
    <th>`+row+`</th>
    <td style="width: 10px;"><input type="checkbox"></td>
    <td><input type="text" th:name="I_C_SECTION_CD" th:id="I_C_SECTION_CD" placeholder="대분류코드" readonly></td>
    <td><input type="text" th:name="I_C_CLSFC_CD" th:id="I_C_CLSFC_CD" placeholder="중분류코드"></td>
    <td><input type="text" th:name="I_C_CLSFC_NM" th:id="I_C_CLSFC_NM" placeholder="중분류명"></td>
    <td><input type="text" th:name="I_C_ITEM_01" th:id="I_C_ITEM_01" placeholder="항목01"></td><!--item-->
    <td><input type="text" th:name="I_C_ITEM_02" th:id="I_C_ITEM_02" placeholder="항목02"></td>
    <td><input type="text" th:name="I_C_ITEM_03" th:id="I_C_ITEM_03" placeholder="항목03"></td>
    <td><input type="text" th:name="I_C_ITEM_04" th:id="I_C_ITEM_04" placeholder="항목04"></td>
    <td><input type="text" th:name="I_C_ITEM_05" th:id="I_C_ITEM_05" placeholder="항목05"></td>
    <td><input type="text" th:name="I_C_ITEM_06" th:id="I_C_ITEM_06" placeholder="항목06"></td>
    <td><input type="text" th:name="I_C_ITEM_07" th:id="I_C_ITEM_07" placeholder="항목07"></td>
    <td><input type="text" th:name="I_C_ITEM_08" th:id="I_C_ITEM_08" placeholder="항목08"></td>
    <td><input type="text" th:name="I_C_ITEM_09" th:id="I_C_ITEM_09" placeholder="항목09"></td>
    <td><input type="text" th:name="I_C_ITEM_10" th:id="I_C_ITEM_10" placeholder="항목10"></td>
  `;
  row++;
  table.appendChild(newRow);
}



// 체크박스 선택한 값만 전송(중분류)
function getSelectedValues(tableId) {
  var checkboxes = document.querySelectorAll('#'+tableId+' .checkboxName:checked');
  var selectedValues = [];
  let jsonKey = ['NO','SECTION_CD', 'CLSFC_CD', 'CLSFC_NM','ITEM_01','ITEM_02' ,'ITEM_03' ,'ITEM_04','ITEM_05','ITEM_06','ITEM_07','ITEM_08','ITEM_09','ITEM_10','REG_YMD'];
  var j = 0;
  var jsonArray = []; // Array to hold JSON objects
  checkboxes.forEach(function(checkbox) {
    var row = checkbox.closest('tbody tr'); // 선택된 체크박스가 속한 행
    var textInputs = row.querySelectorAll('input[type="text"]');
    var textInputValues = [];
    let rowData = {};

    var selectElement = row.querySelector('.select');
    var selectedOption = selectElement.options[selectElement.selectedIndex].value;
    
    j = 0;
    textInputs.forEach(function(textInput) {
      textInputValues.push(textInput.value);
      rowData[jsonKey[j]] = textInput.value;
      rowData['USE_YN'] = selectedOption;
      j++;
      //console.log('선택된 값 ' +textInput.value);
      
    });
    //console.log('선택된 값 및 텍스트 값(rowData):' + JSON.stringify(rowData));
    jsonArray.push(rowData); // Adding rowData object to jsonArray
  });
  //console.log('선택된 값 및 텍스트 값:' + JSON.stringify(jsonArray));
  var url = "/com/clsfInsert";
  //var result;
  
  postSend(url, JSON.stringify(jsonArray));
}