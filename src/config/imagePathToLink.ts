export const imagePathToLink = {
  countryFlag(countryCode: string, width: number): string {
    return `https://flagcdn.com/w${width}/${countryCode.toLowerCase()}.png`;
  },
  countryFlagx2(countryCode: string, width: number): string {
    return `https://flagcdn.com/w${width}/${countryCode.toLowerCase()}.png 2x`;
  },
};