OUPUTDIR=dist
DOCSDIR=docs

default: build

build: clean
	npm install
	export NODE_ENV=production && export PUBLIC_PATH=//www.mcaws.ga/ && npm run build
	export NODE_ENV=production && export TARGET=githubpages && export PUBLIC_PATH=./ && npm run build
	
clean:
	rm -rf $(OUPUTDIR)
	rm -rf $(DOCSDIR)