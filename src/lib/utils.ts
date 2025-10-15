import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Dynamically imports and executes the company profile PDF download
 * This reduces initial bundle size by loading PDF utilities only when needed
 */
export async function downloadCompanyProfilePDF() {
  try {
    const { downloadCompanyProfilePDF } = await import("./pdf-utils");
    downloadCompanyProfilePDF();
  } catch (error) {
    console.error("Error loading PDF utilities:", error);
    alert("Error loading PDF generator. Please try again.");
  }
}

/**
 * Dynamically imports and executes the catalog PDF download
 * This reduces initial bundle size by loading PDF utilities only when needed
 */
export async function downloadCatalogPDF() {
  try {
    const { downloadCatalogPDF } = await import("./pdf-utils");
    downloadCatalogPDF();
  } catch (error) {
    console.error("Error loading PDF utilities:", error);
    alert("Error loading PDF generator. Please try again.");
  }
}

/**
 * Dynamically imports and executes the capabilities PDF download
 * This reduces initial bundle size by loading PDF utilities only when needed
 */
export async function downloadCapabilitiesPDF() {
  try {
    const { downloadCapabilitiesPDF } = await import("./pdf-utils");
    downloadCapabilitiesPDF();
  } catch (error) {
    console.error("Error loading PDF utilities:", error);
    alert("Error loading PDF generator. Please try again.");
  }
}
