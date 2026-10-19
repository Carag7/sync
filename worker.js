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
