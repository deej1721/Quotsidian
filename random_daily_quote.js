module.exports = async (tp) => {
  try {
    const filePath = "Internal/Templates/Functions/randomQuotes/randomQuotes.txt";
    const file = app.vault.getAbstractFileByPath(filePath);

    if (!file) {
      return "> ❌ ERROR: Quotes file not found.";
    }

    const content = await app.vault.read(file);
    const quotes = content.split("\n").filter(q => q.trim() !== "");

    if (quotes.length === 0) {
      return "> ⚠️ WARNING: No usable quotes in the file.";
    }

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    return `\`\`\`ad-quote\n` +
           `title: Quote of the Day\n` +
           `💡 ${randomQuote}\n` +
           `\`\`\``;
  } catch (e) {
    return `> 🚨 ERROR: ${e.message}`;
  }
};
