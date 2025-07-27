export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/sub") {
      return new Response("پاسخ مسیر /sub با موفقیت ارسال شد ✅", {
        headers: { "Content-Type": "text/plain" },
      });
    }
    return new Response("مسیر یافت نشد ❌", { status: 404 });
  },
};
