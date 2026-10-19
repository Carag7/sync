async function runTests(){

    const logs =
    document.getElementById("logs");

    try {

        const url =
        window.location.origin
        + "/list";

        logs.textContent =
        "Teste:\n" + url;

        const res =
        await fetch(url);

        const text =
        await res.text();

        logs.textContent +=
        "\n\nStatus: "
        + res.status;

        logs.textContent +=
        "\n\nAntwort:\n"
        + text;

    }

    catch(err){

        logs.textContent =
        "FEHLER:\n\n"
        + err.message;

    }

}
