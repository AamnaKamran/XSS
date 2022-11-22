var comments = [];

function getComment(){
    var input = document.getElementById("textbox").value;
    console.log(input);

    //var safe_input = input.replace(/[^a-zA-Z0-9 .,]/g, '');

    saveComment(safe_input);
    displayComments(safe_input);
};

function displayComments(feedback){
        document.getElementById("input").innerHTML = comments;
}

function saveComment(feedback){
    comments.push(feedback);
}

//setTimeout(document.getElementById("textbox").value,1);