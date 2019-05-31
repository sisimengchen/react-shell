OUPUTDIR=dist
DOCSDIR=docs

default: build

build: clean
	npm run build
	npm run github

clean:
	rm -rf $(OUPUTDIR)
	rm -rf $(DOCSDIR)