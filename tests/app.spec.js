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

test("switches to SAP subject and keeps its modules separate", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Đổi môn học/ }).first().click();
  await expect(page.getByRole("heading", { name: "Chọn môn học" })).toBeVisible();
  await page.locator("[data-subject='sap']").click();

  await expect(page.getByText("SAP S/4HANA", { exact: true }).first()).toBeVisible();
  await expect(page.getByText("100", { exact: true }).first()).toBeVisible();
  await page.getByRole("button", { name: /Làm đề 100 câu/ }).click();
  await expect(page.getByText("Câu 1 / 100", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: /Thoát/ }).click();
  await page.getByRole("button", { name: "Ôn theo chương" }).first().click();
  await expect(page.getByRole("heading", { name: "Chọn module để bắt đầu" })).toBeVisible();
  await expect(page.locator("[data-chapter]")).toHaveCount(4);

  await page.locator("[data-chapter='3']").click();
  await expect(page.getByRole("heading", { name: "Sales and Distribution — Order to Cash" })).toBeVisible();
  await expect(page.locator(".beginner-guide")).toBeVisible();
  await expect(page.getByText("Ví dụ xuyên suốt", { exact: true })).toBeVisible();
  await expect(page.locator(".example-box").first()).toBeVisible();
  await page.getByRole("button", { name: /Luyện chương này/ }).click();
  await page.locator("[data-answer='0']").click();
  await expect(page.locator(".explanation")).toBeVisible();
});
