export PUBLIC_PATH = ./
OUPUTDIR=dist
DOCSDIR=docs

default: build

build: clean
	npm install
	export NODE_ENV=production && npm run build
	export TARGET=githubpages && export NODE_ENV=production && npm run build

clean:
	rm -rf $(OUPUTDIR)
	rm -rf $(DOCSDIR)