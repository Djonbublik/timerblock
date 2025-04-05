import { onCLS, onFID, onLCP, onTTFB, ReportCallback } from "web-vitals";

const reportWebVitals = (onPerfEntry?: ReportCallback) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry);
    onFID(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
