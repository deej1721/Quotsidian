module.exports = async (tp) => {
  const quotesFile = await tp.file.find_tfile("Internal/Templates/Functions/randomQuotes/randomquotes.txt");
  const quotesContent = await app.vault.read(quotesFile);
  const quotes = quotesContent.split("\n\n").filter(q => q.trim() !== "");
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return `> 💡 ${randomQuote}`;
};
