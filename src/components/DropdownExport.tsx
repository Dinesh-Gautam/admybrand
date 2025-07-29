import { customersData } from "@/components/dashboard/CustomersData";
import { INCOME_EXPENSES_DATA } from "@/components/dashboard/IncomeExpensesData";
import { RECENT_ACTIVITY_DATA } from "@/components/dashboard/RecentActivityData";
import Transition from "@/utils/Transition";
import jsPDF from "jspdf";
import { unparse } from "papaparse";
import { useEffect, useRef, useState } from "react";
import AiIcon from "./icons/AiIcon";
import html2canvas from "html2canvas-pro";
import { Download } from "lucide-react";

function DropdownExport() {
  const aiSummary =
    "AI Summary: Key Insights for This Period - Overall sales show a 12% increase this month. The 'Google' channel is the top performer, and we predict a 5% growth in new customers next quarter.";
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const dropdown = useRef<HTMLUListElement>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target as Node) ||
        trigger.current?.contains(target as Node)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  const handleExportToPdf = () => {
    let dashboard =
      document.getElementById("dashboard-content") ?? document.body;

    const options = {
      useCORS: true,
      width: dashboard.scrollWidth,
      height: dashboard.scrollHeight,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    };

    html2canvas(dashboard, options).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("l", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const ratio = canvasWidth / canvasHeight;

      const imgWidth = pdfWidth;
      const imgHeight = imgWidth / ratio;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      // Add AI Summary
      const summaryMargin = 14;
      const summaryLines = pdf.splitTextToSize(
        aiSummary,
        pdfWidth - summaryMargin * 2
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

      pdf.save("dashboard-export.pdf");
    });
    setDropdownOpen(false);
  };

  const handleExportToCsv = () => {
    const csvSections = [];

    // Customer List
    csvSections.push(
      unparse({
        fields: ["Customer List"],
        data: [],
      })
    );
    const sanitizedCustomers = customersData.map(({ image, ...rest }) => rest);
    csvSections.push(unparse(sanitizedCustomers));

    // Income/Expenses
    csvSections.push(
      unparse({
        fields: ["\nIncome/Expenses"],
        data: [],
      })
    );
    csvSections.push(unparse(INCOME_EXPENSES_DATA));

    // Recent Activity
    csvSections.push(
      unparse({
        fields: ["\nRecent Activity"],
        data: [],
      })
    );
    csvSections.push(unparse(RECENT_ACTIVITY_DATA));

    csvSections.push(
      unparse({
        fields: ["\nAI Summary"],
        data: [],
      })
    );
    csvSections.push(
      unparse({
        fields: [aiSummary],
        data: [],
      })
    );

    const csv = csvSections.join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    if (link.href) {
      URL.revokeObjectURL(link.href);
    }
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.setAttribute("download", "dashboard-export.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDropdownOpen(false);
  };

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="btn bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300 shadow-lg "
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <Download className="w-4 h-4 text-muted-foreground" />
        <span className="hidden sm:initial ml-2">Export</span>
      </button>

      <Transition
        show={dropdownOpen}
        appear
        tag="div"
        className="origin-top-right z-10 absolute top-full min-w-44  bg-white/50 backdrop-blur-md dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/60 py-1.5 rounded-lg shadow-lg overflow-hidden mt-1 -right-10 sm:right-0"
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <ul
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <li>
            <a
              className="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 flex py-1 px-3"
              href="#0"
              onClick={handleExportToPdf}
            >
              Export to PDF
            </a>
          </li>
          <li>
            <a
              className="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 flex py-1 px-3"
              href="#0"
              onClick={handleExportToCsv}
            >
              Export to CSV
            </a>
          </li>
        </ul>
      </Transition>
    </div>
  );
}

export default DropdownExport;
