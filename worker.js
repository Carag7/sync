export default {

  async fetch(request) {

    const url = new URL(request.url);

    if (url.pathname === "/test") {

      try {

        const r =
          await fetch(
            "https://wol.jw.org/en/wol/meetings/r1/lp-e/2026/42"
          );

        const html =
          await r.text();

        return new Response(
          JSON.stringify(
            {
              status: r.status,
              length: html.length,
              first500: html.substring(0, 500)
            },
            null,
            2
          ),
          {
            headers: {
              "content-type": "application/json"
            }
          }
        );

      } catch (e) {

        return new Response(
          JSON.stringify({
            error: e.message
          }),
          {
            headers: {
              "content-type": "application/json"
            }
          }
        );

      }

    }

    return new Response("Worker aktiv");

  }

};
