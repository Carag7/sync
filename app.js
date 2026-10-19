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

      const res =
await fetch(
window.location.origin + "/update"
);
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
