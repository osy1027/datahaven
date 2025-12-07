document.addEventListener("DOMContentLoaded", () => {
  const questionText = document.getElementById("questionText");
  const reactionText = document.getElementById("reactionText");
  const hintBox = document.getElementById("hintBox");
  const hintText = document.getElementById("hintText");

  const input = document.getElementById("foodInput");
  const submitBtn = document.getElementById("submitBtn");
  const retryBtn = document.getElementById("retryBtn");

  let attempt = 0;
  const target = "두바이쫀득쿠키";

  submitBtn.addEventListener("click", () => {
    const value = input.value.trim();
    if (!value) return;

    // 정답
    if (value === target) {
      reactionText.textContent = `맞아! 역시 ${target}지 😆`;
      hintBox.classList.add("hidden");
      retryBtn.classList.add("hidden");
      return;
    }

    attempt++;

    if (attempt === 1) {
      reactionText.textContent = `"${value}"? 음… 확실해? 🤔`;
      retryBtn.classList.remove("hidden");
      hintBox.classList.add("hidden");
    }
    else if (attempt === 2) {
      reactionText.textContent = `흠… 정말 "${value}"을(를) 제일 좋아해…?`;
      retryBtn.classList.remove("hidden");
      hintBox.classList.add("hidden");
    }
    else {
      reactionText.textContent = `그럼… 네 진짜 최애 음식을 직접 적어봐 😏`;
      hintBox.classList.remove("hidden");

      const hints = ["두...", "두바...", "두바이쫀...", target];
      hintText.textContent = `✨ 힌트: ${hints[Math.min(attempt - 3, 3)]}`;
    }
  });

  retryBtn.addEventListener("click", () => {
    input.value = "";
    reactionText.textContent = "";
    hintText.textContent = "";
    hintBox.classList.add("hidden");
  });
});



