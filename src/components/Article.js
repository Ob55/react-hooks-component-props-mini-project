import React from "react";

function Article({ title, date, preview }) {
  // Calculate minutes to read
  const minutesToRead = Math.ceil((preview.split(" ").length / 200) * 5);

  // Determine emoji based on minutes to read
  let emoji = "";
  if (minutesToRead < 30) {
    const coffeeCups = Math.ceil(minutesToRead / 5);
    emoji = "☕️".repeat(coffeeCups);
  } else {
    const bentoBoxes = Math.ceil(minutesToRead / 10);
    emoji = "🍱".repeat(bentoBoxes);
  }

  // Default date if not provided
  const formattedDate = date ? date : "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
      <p>{emoji} {minutesToRead} min read</p>
    </article>
  );
}

export default Article;
