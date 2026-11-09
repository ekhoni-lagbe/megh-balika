export function formatBengaliNumber(n: number): string {
  const digits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return n
    .toString()
    .split('')
    .map((d) => (/\d/.test(d) ? digits[Number(d)] : d))
    .join('');
}

export function truncate(text: string, max: number): string {
  return text.length > max ? `${text.slice(0, max).trimEnd()}…` : text;
}
