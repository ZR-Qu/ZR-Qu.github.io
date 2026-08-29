# ZR-Qu's Personal Homepage

The source for [ZR-Qu's personal homepage and blog](https://zr-qu.github.io/).

The site is a lightweight static Astro site focused on systems security, trusted computing,
heterogeneous computing, AI systems, selected projects, and technical blog posts.

## Development

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Build the static site with:

```bash
npm run build
```

## Structure

- `src/pages/` — homepage, About, Projects, Blog, search, archives, tags, and RSS routes
- `src/content/blog/` — Markdown and MDX blog posts
- `src/components/` — site-specific components
- `src/layouts/` — site layouts built on Astro Pure
- `packages/pure/` — the vendored Astro Pure theme package

## Related projects

- [LLM-TZ](https://github.com/ZR-Qu/llm-tz)
- [ARM CCA 2026](https://github.com/ZR-Qu/ARM-CCA-2026)
- [OP-TEE OS](https://github.com/ZR-Qu/optee_os)
- [NPU Driver](https://github.com/ZR-Qu/driver-npu)

## License

This site uses [Astro](https://astro.build/) and [Astro Pure](https://github.com/cworld1/astro-theme-pure).
See [LICENSE](./LICENSE) for the repository license and the relevant upstream notices.
