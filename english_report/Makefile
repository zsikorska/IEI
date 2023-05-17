.PHONY: all clean cleanall

all: document.pdf

document.pdf: document.tex bibliography.bib
	pdflatex document.tex
	biber document
	pdflatex document.tex
	pdflatex document.tex

clean:
	rm -f *.aux *.blg *.bbl *.toc *.log *.lof *.lot *.log.xml *.bcf *.out *.run.xml

cleanall: clean
	rm -f document.pdf

