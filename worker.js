export default {
  async fetch() {
    return new Response(
      JSON.stringify({
        ok: true,
        test: "worker läuft"
      }),
      {
        headers: {
          "content-type": "application/json"
        }
      }
    );
  }
};
