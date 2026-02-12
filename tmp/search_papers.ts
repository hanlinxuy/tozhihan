import { connect, waitForPageLoad } from "./src/client";

async function main() {
  const client = await connect();
  const page = await client.page("scholar1");

  await page.goto("https://scholar.google.com/scholar?q=Dynamic-LLaVA+Efficient+Multimodal+Large+Language+Models+Dynamic+Vision-language+Context+Sparsification+ICLR+2025");
  await waitForPageLoad(page);

  // Get the first result
  const firstResult = await page.evaluate(() => {
    const result = document.querySelector('.gs_ri');
    if (!result) return null;
    const title = result.querySelector('.gs_rt')?.textContent;
    const authors = result.querySelector('.gs_a')?.textContent;
    const citations = result.querySelector('.gs_fl a')?.textContent;
    return { title, authors, citations };
  });

  console.log(firstResult);
  await client.disconnect();
}

main();
