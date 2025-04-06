<%*
const quotesFile = tp.file.find_tfile("InspirationalQuotes/quotes.txt");
const quotesContent = await app.vault.read(quotesFile);
const quotes = quotesContent.split("\n").filter(q => q.trim() !== "");
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
tR += `> 💡 ${randomQuote}`;
%>
