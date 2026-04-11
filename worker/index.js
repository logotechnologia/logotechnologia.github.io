export default {
  async fetch(request, env, ctx) {
    const response = await fetch(request);

    const contentType = response.headers.get("Content-Type") || "";
    if (!contentType.includes("text/html")) {
      return response;
    }

    const country = request.cf?.country ?? "";

    // Prepend a tiny inline script so the early language-detection code in
    // <head> can read window.__CC__ synchronously — no client-side API call.
    return new HTMLRewriter()
      .on("head", {
        element(el) {
          el.prepend(
            `<script>window.__CC__=${JSON.stringify(country)};</script>`,
            { html: true }
          );
        },
      })
      .transform(response);
  },
};
