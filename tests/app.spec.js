import { expect, test } from "@playwright/test";

test("home, chapter and quiz flows work", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /Học đúng trọng tâm/ })).toBeVisible();
  await expect(page.getByText("100", { exact: true }).first()).toBeVisible();

  await page.getByRole("button", { name: "Ôn theo chương" }).first().click();
  await expect(page.getByRole("heading", { name: "Chọn chương để bắt đầu" })).toBeVisible();
  await page.locator("[data-chapter='2']").click();
  await expect(page.getByRole("heading", { name: "Cung, cầu và chính sách chính phủ" })).toBeVisible();

  await page.getByRole("button", { name: /Luyện chương này/ }).click();
  await expect(page.locator(".quiz-card")).toBeVisible();
  await page.locator("[data-answer='0']").click();
  await expect(page.locator(".explanation")).toBeVisible();
  await expect(page.getByRole("button", { name: /Câu tiếp theo|Xem kết quả/ })).toBeVisible();
});
