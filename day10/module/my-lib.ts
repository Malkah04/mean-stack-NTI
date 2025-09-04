export function log(message: string): void;
export function log(message: string, level: "info" | "warn" | "error"): void;

export function log(message: string, level?: "info" | "warn" | "error"): void {
  if (level) {
    console.log(message, level);
  } else console.log(message);
}
