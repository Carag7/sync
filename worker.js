export default {

async fetch(request){

    const url =
    new URL(request.url);

    if(url.pathname==="/update")
        return run();

    if(url.pathname==="/list")
        return list();

    return new Response(
        "WOL TEST"
    );

}

};









async function run(){

    const testUrl =
    "https://wol.jw.org/en/wol/meetings/r1/lp-e/2026/42";

    const report = {

        date:
        new Date()
        .toISOString(),

        methods:{},

        logs:[]

    };

    let html="";

    //
    // Methode 1
    //

    try{

        const r =
        await fetch(testUrl);

        html =
        await r.text();

        report.methods.fetch = {

            success:true,

            status:r.status,

            length:
            html.length

        };

    }

    catch(e){

        report.methods.fetch = {

            success:false,

            error:e.message

        };

    }

    //
    // Methode 2
    //

    try{

        const songs =
        [
            ...html.matchAll(
            /Song\s+(\d+)/gi
            )
        ]
        .map(
            v=>Number(v[1])
        );

        report.methods.regex={
            success:
            songs.length>0,

            count:
            songs.length,

            songs
        };

    }

    catch(e){

        report.methods.regex={
            success:false,
            error:e.message
        };

    }

    //
    // Methode 3
    //

    try{

        const scripts =
        [
            ...html.matchAll(
            /<script[\s\S]*?<\/script>/gi
            )
        ];

        report.methods.scripts={

            success:true,

            count:
            scripts.length

        };

    }

    catch(e){

        report.methods.scripts={

            success:false,

            error:e.message

        };

    }

    //
    // Methode 4
    //

    try{

        const jsonBlocks =
        html.match(
            /\{[\s\S]{100,}\}/g
        )||[];

        report.methods.json={

            success:
            jsonBlocks.length>0,

            count:
            jsonBlocks.length

        };

    }

    catch(e){

        report.methods.json={

            success:false,

            error:e.message

        };

    }

    return new Response(
        JSON.stringify(
            report,
            null,
            2
        ),
        {
            headers:{
                "content-type":
                "application/json"
            }
        }
    );

}
