import { FC, useState } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { AppTheme } from "../styles/theme";
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const useStyles = createUseStyles((theme: AppTheme) => ({
  pdfViewer: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  pdfDocument: {
    borderRadius: 4,
    overflow: "hidden",
    "& canvas": {
      width: "100% !important",
      height: "100% !important",
    }
  },
  loadingPlaceholder: {
    height: "calc((5 * ((100vw - (2 * 120px)) / 12)) * 11 / 8.5)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `${theme.colors.ui[1].base}`,
    borderRadius: 4,
    ...theme.typography.body,
    color: `${theme.colors.ui[1].text.primary}`,
  },
  navArrow: {
    position: "absolute",
    top: `calc(50% - 16px)`,
    "& > .material-icons": {
      fontSize: 36,
      color: theme.colors.ui[0].text.primary.toString(),
      cursor: "pointer",
    },
  },
  arrowBack: {
    left: -48,
  },
  arrowForward: {
    right: -48,
  },
  paginationContainer: {
    position: "absolute",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: 12,
    left: 0,
    bottom: -36,
  },
  paginationDot: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: theme.colors.ui[0].text.primary.opacity(0.5),
    cursor: "pointer",
    "&.active": {
      backgroundColor: theme.colors.ui[0].text.primary.toString(),
    },
  },
}));

export interface PdfViewerProps {
  file: string
}

export const PdfViewer: FC<PdfViewerProps> = ({ file }) => {
  const theme = useTheme<AppTheme>();
  const classes = useStyles({ theme });
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [numPages, setNumPages] = useState<number>(0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className={classes.pdfViewer}>
      {pageNumber > 1 &&
        <div
          className={`${classes.navArrow} ${classes.arrowBack}`}
          onClick={() => setPageNumber(pageNumber - 1)}
        >
          <span className="material-icons">chevron_left</span>
        </div>
      }
      <Document
        file={{ url: file }}
        className={classes.pdfDocument}
        loading={<div className={classes.loadingPlaceholder}>Loading Resource...</div>}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      {numPages - pageNumber > 1 &&
        <div
          className={`${classes.navArrow} ${classes.arrowForward}`}
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          <span className="material-icons">chevron_right</span>
        </div>
      }
      <div className={classes.paginationContainer}>
        {[...Array(numPages).keys()].map((_, i) => (
          <div
            className={`${classes.paginationDot}${(i + 1) === pageNumber ? " active" : ""}`}
            onClick={() => setPageNumber(i + 1)}
          />
        ))}
      </div>
    </div>
  );
};