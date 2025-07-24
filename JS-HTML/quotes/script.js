// Initial quotes
    let quotes = [
      { text: "You are your best thing", author: "Toni Morrison", year: 1987 },
      { text: "Live love laugh", author: "Unknown", year: 2000 },
      { text: "Do your best", author: "Your Mom", year: 1995 }
    ];

    const quoteText = document.getElementById("quote-text");
    const quoteAuthor = document.getElementById("quote-author");
    const newQuoteBtn = document.getElementById("new-quote-btn");

    // Show random quote
    function showRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const q = quotes[randomIndex];
      quoteText.textContent = `"${q.text}"`;
      quoteAuthor.textContent = `– ${q.author}, ${q.year}`;
    }

    showRandomQuote();

    // Button to show another random quote
    newQuoteBtn.addEventListener("click", showRandomQuote);

    // Form to add a new quote
    const addForm = document.getElementById("add-form");
    addForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const newText = document.getElementById("new-quote").value.trim();
      const newAuthor = document.getElementById("new-author").value.trim();
      const newYear = document.getElementById("new-year").value.trim();

      if (newText && newAuthor && newYear) {
        quotes.push({
          text: newText,
          author: newAuthor,
          year: newYear
        });

        // Clear inputs
        addForm.reset();
        alert("Quote added successfully! 🎉");
        showRandomQuote();
      }
    });
