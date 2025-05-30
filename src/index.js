export default {
  async fetch(request, env, ctx) {
    // Write to KV
    await env.MAGENTO_KV.put("exampleKey", "This is stored in KV");

    // Read from KV
    const value = await env.MAGENTO_KV.get("exampleKey");

    return new Response(`KV Value: ${value}`);
  }
};
