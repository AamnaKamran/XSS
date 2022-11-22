var comments = [];

function getComment(){
    var input = document.getElementById("textbox").value;
    saveComment(input);
    displayComments(input);
};

function displayComments(feedback){
        document.getElementById("input").innerHTML = comments;
        console.log(comments);
}

function saveComment(feedback){
    comments.push(feedback);
}

//setTimeout(document.getElementById("textbox").value,1);