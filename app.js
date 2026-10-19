document
.getElementById("run")
.addEventListener(
"click",
runTests
);

async function runTests(){

    const status =
    document.getElementById("status");

    const result =
    document.getElementById("result");

    const logs =
    document.getElementById("logs");

    const report = {
        created:new Date().toISOString(),
        tests:[]
    };

    try{

        status.textContent =
        "Hole Daten vom Worker...";

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
        const json =
        await res.json();

        result.textContent =
        JSON.stringify(
            json,
            null,
            2
        );

        report.tests.push({
            worker:true
        });

    }

    catch(err){

        report.tests.push({
            worker:false,
            error:err.message
        });

    }

    logs.textContent =
        JSON.stringify(
            report,
            null,
            2
        );

}
