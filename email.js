function maskEmail(email) {
  const atIndex = email.indexOf("@");
  const namePart = email.slice(0, atIndex);
  const domainPart = email.slice(atIndex);

  if (namePart.length <= 2) {
    // Jika nama hanya satu atau dua karakter, tidak perlu masking tengah
    return namePart + domainPart;
  }

  const masked = namePart[0] + "*".repeat(namePart.length - 2) + namePart[namePart.length - 1];
  return masked + domainPart;
}

// Contoh penggunaan
const email = "freecodecamp@example.com";
console.log(maskEmail(email)); // Output: f**********p@example.com
