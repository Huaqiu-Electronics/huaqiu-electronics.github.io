# KiCad Huaqiu Docs

The homepage and docs for KiCad Huaqiu

## Prerequisites

1. install nodejs

Download and install nodejs from:

https://nodejs.org/en/download/package-manager/current

2. install pnpm

npm install -g pnpm

## Dev

### Homepage

```bash
pnpm install
pnpm dev

```

### Docs

```bash
pnpm install
pnpm docs:dev

```

### Build all

```bash
pnpm build:all
cd dist

python -m http.server
```

## Update Docs

Simply put the markdown files in the docs folder. The directory structure under docs is just for the convenience of organization.

### Extended syntax explanation

1. tag

All the markdown files are organized by its tags, e.g.

---

tag:

- 插件
- KiCad

---

2. top

This attr influences the order of the articles displayed on the top of the blog , the lower the number, the higher the priority.

3. sticky

This attr indicates whether the article is shown on the "Recommended bar" , the higher the number, the higher the priority.

4. sidebar

Whether to display the sidebar in the article , default is true.

5. readingTime

Whether to display the reading time in the article , default is true.

```

```
