.PHONY: develop
develop:
	@npm run dev

.PHONY: build
build:
	@npm run build

.PHONY: update
update: build
	git add docs
	git commit -m "Update docs"
	git push origin main
