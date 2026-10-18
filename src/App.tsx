import { useEffect, useRef, useSyncExternalStore } from 'react'
import type { ReactNode } from 'react'
import { subjects } from './data/content'
import { SlideLearning } from './components/SlideLearning'
import './App.css'

function subscribe(onChange: () => void) {
  window.addEventListener('hashchange', onChange)
  return () => window.removeEventListener('hashchange', onChange)
}

function Page({ title, children }: { title: string; children: ReactNode }) {
  return <><h1>{title}</h1>{children}</>
}

function Content({ path }: { path: string }) {
  const parts = path.split('/').filter(Boolean)
  const [resource, id, action] = parts
  if (path === '/') {
    const firstLesson = subjects[0]?.sections[0]?.lessons[0]
    return <Page title="一歩ずつ、ボイラーを学ぼう。">
      <p className="intro">2級ボイラー技士試験に向けて、仕組みから少しずつ。<br />1回5〜10分、自分のペースで学べます。</p>
      {firstLesson && <aside className="recommendation">
        <span className="eyebrow">はじめての方におすすめ</span>
        <h2>{firstLesson.title}</h2>
        <p>{firstLesson.description}</p>
        <a className="button" href={`#/lessons/${firstLesson.id}/slides/1`}>最初のレッスンへ →</a>
      </aside>}
      <h2>科目から探す</h2>
      <ul className="cards">{subjects.map(subject => <li className="card" key={subject.id}>
        <span className="eyebrow">学習科目</span>
        <h3><a href={`#/subjects/${subject.id}`}>{subject.title}</a></h3>
        <p>{subject.description}</p>
        <p className="meta">{subject.sections.length}セクション</p>
        <a className="text-link" href={`#/subjects/${subject.id}`}>セクションを見る →</a>
      </li>)}</ul>
    </Page>
  }
  if (resource === 'subjects' && parts.length === 2) {
    const subject = subjects.find(item => item.id === id)
    if (subject) return <Page title={subject.title}>
      <p className="intro">{subject.description}</p>
      <h2>セクション一覧</h2>
      <ul className="cards">{subject.sections.map((section, index) => <li className="card" key={section.id}>
        <span className="eyebrow">セクション {index + 1}</span>
        <h3><a href={`#/sections/${section.id}`}>{section.title}</a></h3>
        <p>{section.description}</p>
        <p className="meta">{section.lessons.length}レッスン ・ 確認テスト{section.testQuestions.length}問</p>
        <a className="text-link" href={`#/sections/${section.id}`}>レッスンを見る →</a>
      </li>)}</ul>
    </Page>
  }
  const subject = subjects.find(item => item.sections.some(section =>
    resource === 'sections' ? section.id === id : section.lessons.some(lesson => lesson.id === id)))
  const section = subject?.sections.find(item =>
    resource === 'sections' ? item.id === id : item.lessons.some(lesson => lesson.id === id))
  if (resource === 'sections' && section && subject && parts.length === 2) {
    return <Page title={section.title}>
      <a className="back-link" href={`#/subjects/${subject.id}`}>← 科目のセクション一覧へ</a>
      <p className="intro">{section.description}</p>
      <p className="notice">上から順に学ぶのがおすすめです。どのレッスン・確認テストからでも始められます。</p>
      <h2>レッスン一覧</h2>
      <ol className="cards">{section.lessons.map((lesson, index) => <li className="card lesson-card" key={lesson.id}>
        <span className="lesson-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
        <div><h3>{lesson.title}</h3><p>{lesson.description}</p>
          <p className="meta">約{lesson.estimatedMinutes}分 ・ スライド{lesson.slides.length}枚 ・ 練習{lesson.practiceQuestions.length}問</p>
          <div className="actions">
            <a className="button" href={`#/lessons/${lesson.id}/slides/1`}>スライドで学ぶ →</a>
            <a className="text-link" href={`#/lessons/${lesson.id}/practice`}>練習問題へ</a>
          </div>
        </div>
      </li>)}</ol>
      <aside className="recommendation"><span className="eyebrow">学んだことを振り返る</span>
        <h2>セクション確認テスト</h2>
        <p>全{section.testQuestions.length}問。セクション全体の理解度を確かめましょう。</p>
        <a className="button" href={`#/sections/${section.id}/test`}>確認テストへ →</a>
      </aside>
    </Page>
  }
  const lesson = section?.lessons.find(item => item.id === id)
  if (resource === 'lessons' && lesson && section && action === 'slides' && (parts.length === 3 || parts.length === 4)) {
    return <SlideLearning lesson={lesson} sectionId={section.id} position={parts[3] ?? '1'} />
  }
  const lessonPlaceholder = resource === 'lessons' && lesson && action === 'practice'
  const testPlaceholder = resource === 'sections' && section && action === 'test'
  if (section && parts.length === 3 && (lessonPlaceholder || testPlaceholder)) {
    const title = testPlaceholder ? 'セクション確認テスト' : '練習問題'
    return <Page title={title}>
      <p className="eyebrow">{lessonPlaceholder ? lesson.title : section.title}</p>
      <div className="card placeholder"><h2>この学習画面は準備中です</h2>
        <p>今後のステップで追加予定です。現在はレッスン一覧をご覧いただけます。</p>
        <a className="button" href={`#/sections/${section.id}`}>レッスン一覧に戻る</a>
      </div>
    </Page>
  }
  return <Page title="ページが見つかりません"><p>URLを確認するか、学習ホームから選び直してください。</p><a className="button" href="#/">学習ホームへ</a></Page>
}

function App() {
  const path = useSyncExternalStore(subscribe, () => window.location.hash.slice(1) || '/')
  const mainRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const title = mainRef.current?.querySelector('h1')?.textContent
    document.title = `${title} | BoilerGate`
    mainRef.current?.focus()
    window.scrollTo(0, 0)
  }, [path])
  return <>
    <a className="skip-link" href="#main-content" onClick={event => { event.preventDefault(); mainRef.current?.focus() }}>本文へスキップ</a>
    <header className="site-header"><div className="header-inner">
      <a className="brand" href="#/">BoilerGate<span>2級ボイラー技士の学習</span></a>
      <nav aria-label="メインナビゲーション"><a href="#/" aria-current={path === '/' ? 'page' : undefined}>学習ホーム</a></nav>
    </div></header>
    <main id="main-content" ref={mainRef} tabIndex={-1}>
      {path !== '/' && <nav className="breadcrumb" aria-label="ホームへの導線"><a href="#/">学習ホーム</a><span aria-hidden="true"> / </span></nav>}
      <Content path={path} />
    </main>
    <footer>本アプリは非公式の学習補助アプリであり、合格を保証するものではありません。<br />現在の教材は開発用のサンプルです。</footer>
  </>
}

export default App
