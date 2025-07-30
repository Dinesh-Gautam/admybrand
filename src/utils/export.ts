import jsPDF from 'jspdf';
import html2canvas from 'html2canvas-pro';
import { unparse } from 'papaparse';
import { customersData } from '@/components/dashboard/CustomersData';
import { INCOME_EXPENSES_DATA } from '@/components/dashboard/IncomeExpensesData';
import { RECENT_ACTIVITY_DATA } from '@/components/dashboard/RecentActivityData';

export const handleExportToPdf = (aiSummary: string) => {
  let dashboard = document.getElementById('dashboard-content') ?? document.body;

  const options = {
    useCORS: true,
    width: dashboard.scrollWidth,
    height: dashboard.scrollHeight,
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  };

  html2canvas(dashboard, options).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('l', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const ratio = canvasWidth / canvasHeight;

    const imgWidth = pdfWidth;
    const imgHeight = imgWidth / ratio;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;
    }

    // Add AI Summary
    const summaryMargin = 14;
    const summaryLines = pdf.splitTextToSize(
      aiSummary,
      pdfWidth - summaryMargin * 2,
    );
    const summaryHeight = summaryLines.length * 5; // Approximate height

    const lastPageContentHeight =
      imgHeight % pdfHeight || (imgHeight > 0 ? pdfHeight : 0);

    if (lastPageContentHeight + summaryHeight + 10 > pdfHeight) {
      pdf.addPage();
      pdf.setFontSize(12);
      pdf.text(summaryLines, summaryMargin, 20);
    } else {
      pdf.setFontSize(12);
      pdf.text(summaryLines, summaryMargin, lastPageContentHeight + 10);
    }

    pdf.save('dashboard-export.pdf');
  });
};

export const handleExportToCsv = (aiSummary: string) => {
  const csvSections = [];

  // Customer List
  csvSections.push(
    unparse({
      fields: ['Customer List'],
      data: [],
    }),
  );
  const sanitizedCustomers = customersData.map(({ image, ...rest }) => rest);
  csvSections.push(unparse(sanitizedCustomers));

  // Income/Expenses
  csvSections.push(
    unparse({
      fields: ['\nIncome/Expenses'],
      data: [],
    }),
  );
  csvSections.push(unparse(INCOME_EXPENSES_DATA));

  // Recent Activity
  csvSections.push(
    unparse({
      fields: ['\nRecent Activity'],
      data: [],
    }),
  );
  csvSections.push(unparse(RECENT_ACTIVITY_DATA));

  csvSections.push(
    unparse({
      fields: ['\nAI Summary'],
      data: [],
    }),
  );
  csvSections.push(
    unparse({
      fields: [aiSummary],
      data: [],
    }),
  );

  const csv = csvSections.join('\n');

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  if (link.href) {
    URL.revokeObjectURL(link.href);
  }
  const url = URL.createObjectURL(blob);
  link.href = url;
  link.setAttribute('download', 'dashboard-export.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
