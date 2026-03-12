import { useEffect, useRef, useState } from "react";

export const CodeFromSms = (): JSX.Element => {
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const [countdown, setCountdown] = useState<number>(32);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleChange = (index: number, value: string) => {
    const sanitized = value.replace(/\D/g, "").slice(-1);
    const newCode = [...code];
    newCode[index] = sanitized;
    setCode(newCode);
    if (sanitized && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (pasted.length > 0) {
      const newCode = [...code];
      for (let i = 0; i < 6; i++) {
        newCode[i] = pasted[i] || "";
      }
      setCode(newCode);
      const nextIndex = Math.min(pasted.length, 5);
      inputRefs.current[nextIndex]?.focus();
    }
  };

  const firstGroupIndices = [0, 1, 2];
  const secondGroupIndices = [3, 4, 5];

  return (
    <div
      className="w-[1280px] h-[800px] flex flex-col gap-3 bg-deepblue-100"
      data-model-id="417:9153"
    >
      <div className="flex flex-1 max-h-16 relative w-[1280px] items-center justify-between pl-7 pr-6 pt-7 pb-0">
        <img
          className="relative w-9 h-9 aspect-[1]"
          alt="Logo"
          src="https://c.animaapp.com/9CcUeH6V/img/logo.svg"
        />

        <div className="flex w-8 h-8 items-center justify-center gap-1 relative aspect-[1]">
          <img
            className="relative w-6 h-6 aspect-[1]"
            alt="X"
            src="https://c.animaapp.com/9CcUeH6V/img/x.svg"
          />
        </div>
      </div>

      <div className="flex ml-[370px] w-[540px] h-[292px] relative flex-col items-start justify-center pt-6 pb-8 px-8 bg-deepblue-140 rounded-3xl">
        <div className="flex flex-col items-start pt-2 pb-7 px-0 relative self-stretch w-full flex-[0_0_auto]">
          <h1 className="relative self-stretch mt-[-1.00px] font-header-1 font-[number:var(--header-1-font-weight)] text-white text-[length:var(--header-1-font-size)] tracking-[var(--header-1-letter-spacing)] leading-[var(--header-1-line-height)] [font-style:var(--header-1-font-style)]">
            Code from SMS
          </h1>

          <div className="relative self-stretch w-full h-0.5" />

          <p className="relative self-stretch [font-family:'PP_Neue_Montreal-Medium',Helvetica] font-medium text-gray-70 text-base tracking-[0] leading-[22px]">
            We sent it to +234 ··· 000
          </p>
        </div>

        <div className="flex-col items-start gap-1 px-0 py-2 inline-flex relative flex-[0_0_auto]">
          <div className="inline-flex gap-2 h-[52px] items-center relative rounded-[14px]">
            <div className="items-center gap-2 inline-flex relative flex-[0_0_auto]">
              {firstGroupIndices.map((index) => (
                <div
                  key={index}
                  className="flex flex-col w-10 items-start gap-1 relative"
                >
                  <div
                    className={`flex justify-center px-4 py-0 self-stretch w-full h-[52px] items-center relative rounded-[14px] ${
                      index === 0
                        ? "bg-deepcloudyblue-80"
                        : "bg-deepcloudyblue-100"
                    }`}
                  >
                    {index === 0 && !code[0] ? (
                      <img
                        className="relative w-px h-[22px] object-cover"
                        alt="Cursor"
                        src="https://c.animaapp.com/9CcUeH6V/img/cursor.svg"
                      />
                    ) : null}
                    <input
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={code[index]}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={handlePaste}
                      className="absolute inset-0 w-full h-full text-center text-white text-base [font-family:'PP_Neue_Montreal-Medium',Helvetica] font-medium bg-transparent outline-none cursor-text rounded-[14px] z-10"
                      aria-label={`SMS code digit ${index + 1}`}
                      autoFocus={index === 0}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="relative w-fit [font-family:'PP_Neue_Montreal-Medium',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-[22px] whitespace-nowrap">
              –
            </div>

            <div className="items-center gap-2 inline-flex relative flex-[0_0_auto]">
              {secondGroupIndices.map((index) => (
                <div
                  key={index}
                  className="flex flex-col w-10 items-start gap-1 relative"
                >
                  <div className="flex justify-center px-4 py-0 self-stretch w-full bg-deepcloudyblue-100 h-[52px] items-center relative rounded-[14px]">
                    <input
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={code[index]}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={handlePaste}
                      className="absolute inset-0 w-full h-full text-center text-white text-base [font-family:'PP_Neue_Montreal-Medium',Helvetica] font-medium bg-transparent outline-none cursor-text rounded-[14px] z-10"
                      aria-label={`SMS code digit ${index + 1}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-5 relative self-stretch w-full" />

        <div className="flex flex-col items-start pl-0.5 pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative self-stretch mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-gray-70 text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]">
            {countdown > 0
              ? `Get a new code in ${countdown} sec`
              : "Resend code"}
          </p>

          <div className="h-2 relative self-stretch w-full" />

          <a
            href="#"
            className="relative self-stretch font-body-medium-link font-[number:var(--body-medium-link-font-weight)] text-white text-[length:var(--body-medium-link-font-size)] tracking-[var(--body-medium-link-letter-spacing)] leading-[var(--body-medium-link-line-height)] underline [font-style:var(--body-medium-link-font-style)]"
          >
            Edit phone number
          </a>
        </div>
      </div>
    </div>
  );
};
