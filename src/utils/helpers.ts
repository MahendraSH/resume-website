/**
 * Copies a string of text to the clipboard.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      textArea.remove();
      return successful;
    }
  } catch (err) {
    console.error("Clipboard copy failed: ", err);
    return false;
  }
}

/**
 * Triggers a client-side file download.
 */
export function downloadFile(filename: string, content: string, contentType: string = 'text/plain') {
  const blob = new Blob([content], { type: contentType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Saves a structured object/value to localStorage.
 */
export function saveToLocalStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("Error saving to localStorage", e);
  }
}

/**
 * Loads a structured object/value from localStorage with a fallback default.
 */
export function loadFromLocalStorage<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) as T : defaultValue;
  } catch (e) {
    console.error("Error reading from localStorage", e);
    return defaultValue;
  }
}

/**
 * Converts headers and 2D row arrays into a formatted CSV string.
 */
export function convertToCSV(headers: string[], rows: any[][]): string {
  const escapeField = (field: any) => {
    const stringified = field === null || field === undefined ? '' : String(field);
    if (stringified.includes(',') || stringified.includes('"') || stringified.includes('\n') || stringified.includes('\r')) {
      return `"${stringified.replace(/"/g, '""')}"`;
    }
    return stringified;
  };

  const csvRows = [
    headers.map(escapeField).join(','),
    ...rows.map(row => row.map(escapeField).join(','))
  ];

  return csvRows.join('\r\n');
}
