function postSend(url, request){
    var result;
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
    },
        body: request,
        })
    .then((response) => response.json())
    .then((data) => {
        result = data;
            //alert(data);
            showModal(data);
//            window.location.reload();
    })
    .catch(error => Error(error))
    //.finally(() => Finally(window.location.reload()))
    ;
    return result;
}



function getSend(url, request){
    var result;
    fetch(url, {
        method: "GET",
        body: request,
        })
    .then((response) => response.json())
    .then((data) => {
        result = data;
            alert(data);
            console.log("getSend " + result);
            //showModal(data);
//            window.location.reload();
    })
    .catch(error => Error(error))
    //.finally(() => Finally(window.location.reload()))
    ;
}
function sendGetRequestWithParams(url, params) {
    const queryString = new URLSearchParams(params).toString();
    const requestUrl = `${url}?${queryString}`;

    return fetch(requestUrl, {
        method: 'GET'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        //console.log('GET 요청 성공:', data);
        // 여기서 데이터를 처리하거나 원하는 작업을 수행할 수 있습니다.
        return data; // 비동기 작업 결과를 반환합니다.
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        throw error; // 에러를 다시 던져서 처리할 수 있도록 합니다.
    });
}