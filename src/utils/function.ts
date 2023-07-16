export function formatDateString(dateString: string): string {
  const date = new Date(dateString);

  const formattedDate = date.toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return formattedDate;
}

export function formatPopulation(population: number): string {
  const suffixes = ["", "K", "M", "B", "T"];
  let suffixIndex = Math.floor(Math.log10(population) / 3);

  return (
    (population / Math.pow(1000, suffixIndex)).toFixed(3) +
    suffixes[suffixIndex]
  );
}