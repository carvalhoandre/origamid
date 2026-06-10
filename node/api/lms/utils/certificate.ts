import { jsPDF } from "jspdf";
import type { CertificateFullData } from "../query.ts";

export function generateCertificate(c: CertificateFullData) {
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "pt",
    format: "a4",
  });
  const width = doc.internal.pageSize.getWidth();
  const height = doc.internal.pageSize.getHeight();

  doc.setFillColor('#ff00');
  doc.rect(0, 0, width, height, "F");

  doc.setDrawColor('#fff');
  doc.setLineWidth(2);
  doc.rect(20, 20, width - 40, height - 40);
  doc.rect(30, 30, width - 60, height - 60);


  doc.setFontSize(40);
  doc.text("Certificado de Conclusão", width / 2, 100, { align: "center" });

  return Buffer.from(doc.output("arraybuffer"));
}
