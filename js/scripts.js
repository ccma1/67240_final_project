function validateForm() {
    console.log("hi");
    var fields = document.getElementsByClassName("item");
    var correct_form = true;
    //iterate through all form fields
    for (let i = 0; i < fields.length; i++) {
        var field_item = fields[i];
        var field_item_error = field_item.getElementsByClassName("error")[0];
        var field_item_input;
        if (field_item.className.includes("body")) {
            field_item_input = field_item.getElementsByTagName("textarea")[0].value;
        } else {
            field_item_input = field_item.getElementsByTagName("input")[0].value;
        }
        if (field_item_input.length == 0) {
            field_item_error.textContent = "Field cannot be empty";
            field_item_error.className = "error active";
            correct_form = false;
        } else {
            field_item_error.textContent = "";
            field_item_error.className = "error";
        }
        if (field_item.className.includes("email")) {
            if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(field_item_input))) {
                field_item_error.textContent = "Invalid email entered";
                field_item_error.className = "error active";
                correct_form = false;
            } else {
                field_item_error.textContent = "";
                field_item_error.className = "error";
            }
        }

    }
    if (correct_form) {
        document.getElementsByTagName("form")[0].reset();
    }
    return correct_form;
}