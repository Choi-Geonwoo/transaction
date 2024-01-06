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
      
      document.getElementById("I_C_SECTION_CD").value = I_S_SECTION_CD;
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
    alert(JSON.stringify({request}));
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