import { jsPDF } from "jspdf";
import type { CertificateFullData } from "../types.d.ts";
import { SERVER_NAME } from "../../../env.ts";

export function generateCertificate(c: CertificateFullData) {
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "pt",
    format: "a4",
  });
  const width = doc.internal.pageSize.getWidth();
  const height = doc.internal.pageSize.getHeight();

  doc.setFillColor("#ff00");
  doc.rect(0, 0, width, height, "F");

  doc.setDrawColor("#fff");
  doc.setLineWidth(2);
  doc.rect(20, 20, width - 40, height - 40);
  doc.rect(30, 30, width - 60, height - 60);

  function text(
    text: string,
    y: number,
    opts: {
      size?: number;
      color?: string;
      style?: "normal" | "bold";
      font?: string;
      align?: "center" | "left" | "right" | "justify" | undefined;
    },
  ) {
    const {
      size = 16,
      color = "#FFF",
      style = "normal",
      font = "times",
      align = "center",
    } = opts;

    doc.setTextColor(color);
    doc.setFont(font, style);
    doc.setFontSize(size);
    doc.text(text, width / 2, y, { align });
  }

  text("Certificado de Conclusão", 140, {
    align: "center",
    size: 48,
    style: "bold",
  });
  text("Certifico que", 200, { size: 18, color: "#bbb" });
  text(c.name, 250, { size: 36, style: "bold" });
  text("Concluiu o curso", 300, { size: 18, color: "#bbb" });
  text(c.title, 345, { size: 28, style: "bold" });
  text(`em ${c.completed}`, 385, { size: 16, color: "#bbb" });
  text(`Carga Horaria: ${c.hours * 2}h`, 440, { size: 24 });
  text(`${SERVER_NAME}/api/lms/certificate/${c.id}`, 540, {
    size: 16,
    color: "#aaa",
    font: "courier",
  });

  return Buffer.from(doc.output("arraybuffer"));
}
