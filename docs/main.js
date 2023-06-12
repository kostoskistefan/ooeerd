window.onload = start_ooeerd;

let mode_select = document.getElementById("mode");
let input_textarea = document.getElementById("input-textarea");
let output_textarea = document.getElementById("output-textarea");

function start_ooeerd()
{
    mode_select.addEventListener('change', process_text);
    input_textarea.addEventListener('input', process_text);
}

function process_text(e)
{
    let text = input_textarea.value;

    text = text.replace(/i/g, "ee");
    text = text.replace(/I([a-z ])/g, "Ee$1");
    text = text.replace(/I([A-Z])/g, "EE$1");

    text = text.replace(/u/g, "oo");
    text = text.replace(/U([a-z ])/g, "Oo$1");
    text = text.replace(/U([A-Z])/g, "OO$1");

    let mode = mode_select.value;

    if (mode === "hardcore")
    {
        text = text.replace(/w/g, "oo");
        text = text.replace(/W([a-z ])/g, "Oo$1");
        text = text.replace(/W([A-Z])/g, "OO$1");

        text = text.replace(/(^|\W)y/g, "$1ee");
        text = text.replace(/(^|\W)Y([a-z ])/g, "$1Ee$2");
        text = text.replace(/(^|\W)Y([A-Z])/g, "$1EE$2");
    }

    output_textarea.value = text;
}
