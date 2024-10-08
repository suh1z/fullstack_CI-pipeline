// @ts-check
import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('')
  await expect(page).toHaveTitle(/Anecdotes/)
})

test('get started link', async ({ page }) => {
  await page.goto('')
  await expect(page.getByText('has 0')).toBeVisible()
})
