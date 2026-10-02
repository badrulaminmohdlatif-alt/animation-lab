# animation-lab

Remotion animation experiments.

## Videos

| Composition   | Output          | Description                                                                        |
| ------------- | --------------- | ---------------------------------------------------------------------------------- |
| `HelloBadrul` | `out/video.mp4` | 5 s, 1920×1080 @ 30 fps. "Hello Badrul" fades in over soft pastel floating shapes. |

Source layout:

- `src/HelloBadrul.tsx`: the scene and its `<Composition>` registration
- `src/FloatingShape.tsx`: a reusable pastel shape that bobs gently in place (editable in Studio)
- `public/fonts/`: the Quicksand Bold font (SIL Open Font License)

## Commands

Install dependencies:

```console
npm i
```

Start the Studio preview:

```console
npm run dev
```

Render the video:

```console
npx remotion render HelloBadrul out/video.mp4
```

If Remotion cannot download its own headless browser (e.g. a restricted network),
point it at a locally installed Chromium:

```console
npx remotion render HelloBadrul out/video.mp4 --browser-executable=/path/to/chrome
```

Lint and type-check:

```console
npm run lint
```

## Agent skills

`.claude/skills/` contains the Remotion agent skills from
[remotion-dev/skills](https://github.com/remotion-dev/skills) (v4.0.532), which
Claude Code picks up automatically when working in this repo.

## License

Some entities need a Remotion company license. [Read the terms here](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).
