// About Page
const AboutPage = () => {
  return (
    <div className="flex flex-1 flex-col bg-neutral-800 p-8 text-center md:px-20">
      <h1 className="mb-6 text-3xl">About</h1>
      <div className="flex flex-col gap-8 text-left text-white/[.90]">
        <div className="flex flex-col gap-4 indent-4">
          <p>
            EnviroGuard is an environmental monitoring solution designed to keep
            you informed about the conditions in your surroundings. This
            intelligent device provides real-time data on
            <span className="text-lime-500">&nbsp;temperature</span> and
            <span className="text-lime-500">&nbsp;humidity</span>, empowering
            you to set customized
            <span className="text-rose-400">&nbsp;alert </span>thresholds.When
            the data surpasses the defined thresholds, EnviroGuard promptly
            sends notifications to your Line chat room, enabling you to act
            swiftly.
          </p>
          <p>
            On our website, you can verify the normal connectivity of your
            sensors. Paired with real-time data panels and localized weather
            information, this ensures you remain well-informed and up-to-date.
          </p>
        </div>
        <div className="flex flex-col gap-4 indent-8">
          <p>
            EnviroGuard
            是一個環境監測解決方案，讓您隨時瞭解周圍環境的狀況。這款智慧設備提供有關
            <span className="text-lime-500">溫度</span>和
            <span className="text-lime-500">濕度</span>
            的即時數據，您可以設定
            <span className="text-rose-400">警報</span>
            閾值。當數據超過閾值時，EnviroGuard 會立即向您的 Line
            聊天室發送通知，讓您能夠迅速採取行動。
          </p>
          <p>
            在本網站中，可以確認您的感測器是否正常連線，搭配即時數據面板，及感測器所在區域的氣象資訊，能確保您保持更新。
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage