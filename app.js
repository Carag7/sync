document
.getElementById("run")
.addEventListener(
"click",
runTests
);

async function runTests() {

    const status =
    document.getElementById("status");

    const result =
    document.getElementById("result");

    const logs =
    document.getElementById("logs");

    status.textContent =
    "Direkter Abruf läuft...";

    try {

        const response =
        await fetch(
            "https://wol.jw.org/en/wol/meetings/r1/lp-e/2026/42"
        );

        const html =
        await response.text();

        status.textContent =
        "Fertig";

        result.textContent =
        html.substring(0,2000);

        logs.textContent =
        JSON.stringify(
            {
                status:
                response.status,

                length:
                html.length
            },
            null,
            2
        );

    }

    catch(err){

        status.textContent =
        "FEHLER";

        logs.textContent =
        JSON.stringify(
            {
                error:
                err.message
            },
            null,
            2
        );

    }

}
