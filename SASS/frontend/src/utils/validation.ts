export function isUtasEmail(email: string): boolean {
  return email.trim().toLowerCase().endsWith("@utas.edu.om");
}

export function requireText(value: string, label: string): string | null {
  if (!value.trim()) return `${label} is required`;
  return null;
}
