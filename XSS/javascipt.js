var comments = [];

function getComment(){
    var input = document.getElementById("textbox").value;
    console.log(input);

    //method 1 
    var safe_input = input.replace(/[^a-zA-Z0-9\.,&$<>]/g, '');
    
    //method 2
    safe_input = safe_input.replace(/[$]/g, 'USD');
    safe_input = safe_input.replace(/[<]/g, 'less than');
    safe_input = safe_input.replace(/[>]/g, 'greater than');
    safe_input = safe_input.replace(/[&]/g, 'and');

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