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
            //alert(data);
            showModal(data);
//            window.location.reload();
    })
    .catch(error => Error(error))
    //.finally(() => Finally(window.location.reload()))
    ;
}