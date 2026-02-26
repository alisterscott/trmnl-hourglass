import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

test("can see 'Day' view across all the viewports", async ({ page }) => {
  const sourceFile = path.join(__dirname, "day.trmnlp.yml");
  const destFile = path.join(__dirname, "..", ".trmnlp.yml");

  if (!fs.existsSync(sourceFile)) {
    throw new Error(`Source file not found: ${sourceFile}`);
  }

  if (!fs.existsSync(destFile)) {
    throw new Error(`Destination file not found: ${destFile}`);
  }

  const originalContent = fs.readFileSync(destFile, "utf-8"); // Save original content to restore later

  fs.copyFileSync(sourceFile, destFile);

  try {
    const routes = ["/quadrant", "/full", "/half_vertical", "/half_horizontal"];

    for (const route of routes) {
      await test.step(`Testing route: ${route}`, async () => {
        await page.goto(route);
        await page.getByRole("link", { name: "Poll" }).click();
        const trmnlFrame = page.frameLocator("iframe");
        await expect
          .soft(trmnlFrame.locator('text[data-testing="label"]'))
          .toHaveText("Today");
        await expect
          .soft(trmnlFrame.locator("svg.hourglass"))
          .toHaveAttribute("data-elapsed", "0.5");
        await expect
          .soft(trmnlFrame.locator("svg.hourglass"))
          .toHaveAttribute("data-remaining", "0.5");
      });
    }
  } finally {
    fs.writeFileSync(destFile, originalContent, "utf-8"); // Restore original content
  }
});

test("can see 'Week' view across all the viewports", async ({ page }) => {
  const sourceFile = path.join(__dirname, "week.trmnlp.yml");
  const destFile = path.join(__dirname, "..", ".trmnlp.yml");

  if (!fs.existsSync(sourceFile)) {
    throw new Error(`Source file not found: ${sourceFile}`);
  }

  if (!fs.existsSync(destFile)) {
    throw new Error(`Destination file not found: ${destFile}`);
  }

  const originalContent = fs.readFileSync(destFile, "utf-8"); // Save original content to restore later

  fs.copyFileSync(sourceFile, destFile);

  try {
    const routes = ["/quadrant", "/full", "/half_vertical", "/half_horizontal"];

    for (const route of routes) {
      await test.step(`Testing route: ${route}`, async () => {
        await page.goto(route);
        await page.getByRole("link", { name: "Poll" }).click();
        const trmnlFrame = page.frameLocator("iframe");
        await expect
          .soft(trmnlFrame.locator('text[data-testing="label"]'))
          .toHaveText("This Week");
        await expect
          .soft(trmnlFrame.locator("svg.hourglass"))
          .toHaveAttribute("data-elapsed", "0.5");
        await expect
          .soft(trmnlFrame.locator("svg.hourglass"))
          .toHaveAttribute("data-remaining", "0.5");
      });
    }
  } finally {
    fs.writeFileSync(destFile, originalContent, "utf-8"); // Restore original content
  }
});

test("can see 'Week' view across all the viewports when week starts on Sunday", async ({
  page,
}) => {
  const sourceFile = path.join(__dirname, "week_sunday.trmnlp.yml");
  const destFile = path.join(__dirname, "..", ".trmnlp.yml");

  if (!fs.existsSync(sourceFile)) {
    throw new Error(`Source file not found: ${sourceFile}`);
  }

  if (!fs.existsSync(destFile)) {
    throw new Error(`Destination file not found: ${destFile}`);
  }

  const originalContent = fs.readFileSync(destFile, "utf-8"); // Save original content to restore later

  fs.copyFileSync(sourceFile, destFile);

  try {
    const routes = ["/quadrant", "/full", "/half_vertical", "/half_horizontal"];

    for (const route of routes) {
      await test.step(`Testing route: ${route}`, async () => {
        await page.goto(route);
        await page.getByRole("link", { name: "Poll" }).click();
        const trmnlFrame = page.frameLocator("iframe");
        await expect
          .soft(trmnlFrame.locator('text[data-testing="label"]'))
          .toHaveText("This Week");
        await expect
          .soft(trmnlFrame.locator("svg.hourglass"))
          .toHaveAttribute("data-elapsed", "0.5");
        await expect
          .soft(trmnlFrame.locator("svg.hourglass"))
          .toHaveAttribute("data-remaining", "0.5");
      });
    }
  } finally {
    fs.writeFileSync(destFile, originalContent, "utf-8"); // Restore original content
  }
});

test("can see 'Month' view across all the viewports for 28 day month", async ({
  page,
}) => {
  const sourceFile = path.join(__dirname, "month_28_days.trmnlp.yml");
  const destFile = path.join(__dirname, "..", ".trmnlp.yml");

  if (!fs.existsSync(sourceFile)) {
    throw new Error(`Source file not found: ${sourceFile}`);
  }

  if (!fs.existsSync(destFile)) {
    throw new Error(`Destination file not found: ${destFile}`);
  }

  const originalContent = fs.readFileSync(destFile, "utf-8"); // Save original content to restore later

  fs.copyFileSync(sourceFile, destFile);

  try {
    const routes = ["/quadrant", "/full", "/half_vertical", "/half_horizontal"];

    for (const route of routes) {
      await test.step(`Testing route: ${route}`, async () => {
        await page.goto(route);
        await page.getByRole("link", { name: "Poll" }).click();
        const trmnlFrame = page.frameLocator("iframe");
        await expect
          .soft(trmnlFrame.locator('text[data-testing="label"]'))
          .toHaveText("This Month");
        await expect
          .soft(trmnlFrame.locator("svg.hourglass"))
          .toHaveAttribute("data-elapsed", "0.5");
        await expect
          .soft(trmnlFrame.locator("svg.hourglass"))
          .toHaveAttribute("data-remaining", "0.5");
      });
    }
  } finally {
    fs.writeFileSync(destFile, originalContent, "utf-8"); // Restore original content
  }
});
