export default {
  async fetch(request, env, ctx) {
    // Write to KV
    await env.MAGENTO_KV.put("690a18d714744d79b3162bff025c69b0", "This is stored in KV");

    // Read from KV
    const value = await env.MAGENTO_KV.get("690a18d714744d79b3162bff025c69b0");

    return new Response(`KV Value: ${value}`);
  }
};
