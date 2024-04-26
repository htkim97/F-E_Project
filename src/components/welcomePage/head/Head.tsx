
export default function Head() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src="/img/logo.png" alt="" width="200" height="200" />
      <br /><br /><br />

      <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
      일기를 쓰고, &nbsp;
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-violet-500 relative inline-block ">
          <span className="relative text-white">나의 감정</span>
        </span>
        기록 해봐요.
      </blockquote>

      <div className="mt-4 text-xl font-semibold">나만의 하루, 기록하고 회고하는 다이어리를 만나보세요.</div>
    </div>
  )
}