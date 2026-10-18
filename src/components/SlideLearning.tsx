import type { Lesson } from '../types/content'

export function SlideLearning({ lesson, sectionId, position }: {
  lesson: Lesson
  sectionId: string
  position: string
}) {
  const number = /^[1-9]\d*$/.test(position) ? Number(position) : NaN
  const slide = Number.isSafeInteger(number) ? lesson.slides[number - 1] : undefined
  const base = `#/lessons/${lesson.id}`
  const backLink = <a className="back-link" href={`#/sections/${sectionId}`}>← レッスン一覧に戻る</a>
  if (!slide) return <>
    <h1>スライドが見つかりません</h1>
    {backLink}
    <p>「{lesson.title}」に指定されたスライドはありません。先頭から学習を始められます。</p>
    <a className="button" href={`${base}/slides/1`}>先頭のスライドへ</a>
  </>

  return <>
    <p className="eyebrow">スライド学習</p>
    <h1>{lesson.title}</h1>
    {backLink}
    <div className="slide-progress">
      <label htmlFor="slide-progress">スライド {number} / {lesson.slides.length}</label>
      <progress id="slide-progress" value={number} max={lesson.slides.length} />
    </div>
    <article className="card slide-content" aria-labelledby="slide-title">
      <h2 id="slide-title">{slide.title}</h2>
      {slide.body.map((block, index) => block.type === 'paragraph'
        ? <p key={index}>{block.text}</p>
        : <ul key={index}>{block.items.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}</ul>)}
      {slide.image ? <figure className="slide-figure"><img src={slide.image.src} alt={slide.image.alt} /></figure>
        : slide.diagramPlaceholder && <figure className="slide-figure diagram-placeholder">
          <span>図解（準備中）</span><figcaption>{slide.diagramPlaceholder}</figcaption>
        </figure>}
    </article>
    <nav className="slide-navigation" aria-label="スライドの移動">
      {number === 1 ? <button className="button secondary" disabled>← 前へ</button>
        : <a className="button secondary" href={`${base}/slides/${number - 1}`}>← 前へ</a>}
      {number === lesson.slides.length
        ? <a className="button" href={`${base}/practice`}>練習問題へ →</a>
        : <a className="button" href={`${base}/slides/${number + 1}`}>次へ →</a>}
    </nav>
  </>
}
