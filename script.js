const compile = () => {
    const html = document.getElementById("html");
    const css = document.getElementById("css");
    const js = document.getElementById("js");

    const code = document.getElementById("result").contentWindow.document;
    document.body.onkeyup = function () {
        code.open();
        code.writeln(
            html.value
            + "<style>" +
            css.value + "</style>"
            + "<script>" +
            js.value +
            "</script>"
        );
        code.close();
    }
}


compile();