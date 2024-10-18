const { chromium } = require("playwright")(async () => {
  const browser = await chromium.launch({ Headers: false });
  const page = await browser.newPage();
  //acessando a pagina de login
  await page.goto("http://onebitcode.com/login");

  await page.fill('input[name="email]",Th@gmail.com');
  await page.fill('input[name="password"]', 123);
  await page.click('button[type="submit"]');

  //aguarde a navegacao para a proxima pagina
  await page.waitForNavigation();

  //acessando o curso desejado
  await page.goto("https://cursos.onebitcode.com/fullstack-javascript");

  //marcando as aulas do curso fullstack javascript como concluidas
  const numAulas = 363;
  for (let i = 1; i < numAulas; i++) {
    await page.click('button[arial-label="concluir aula ${1}"]');
    await page.waitForNavigation(5000);
  }

  console.log("aulas concluidas com sucesso");

  await browser.close();
});
