import { test, expect } from '@playwright/test';
import * as yaml from 'yaml';

// Specify production URL directly
const PROD_URL = 'https://sakutto.works';

test.describe('Production Environment File Delivery Tests (Production)', () => {
    test('should fetch mcp.json and parse it as valid JSON', async ({ request }) => {
        const response = await request.get(`${PROD_URL}/mcp.json`);
        expect(response.ok()).toBeTruthy();
        expect(response.headers()['content-type']).toContain('application/json');
        const data = await response.json();
        expect(data).toHaveProperty('mcpVersion');
    });

    test('should fetch openapi.yaml and parse it as valid YAML', async ({ request }) => {
        const response = await request.get(`${PROD_URL}/openapi.yaml`);
        expect(response.ok()).toBeTruthy();
        const rawData = await response.text();
        expect(() => yaml.parse(rawData)).not.toThrow();
    });

    test('should fetch llms.txt successfully', async ({ request }) => {
        const response = await request.get(`${PROD_URL}/llms.txt`);
        expect(response.ok()).toBeTruthy();
        const text = await response.text();
        expect(text).toContain('Agent-Commerce-OS');
    });
});

test.describe('Production Environment UI Integration Tests (Production)', () => {
    test('should communicate with the real Gateway API and determine status', async ({ page }) => {
        // Do not use mocks; open the actual page and wait for the API response
        await page.goto(PROD_URL);

        const badge = page.locator('#system-status');
        // Wait for the state to change from Checking to Operational or Degraded (Max 10 seconds)
        await expect(badge).not.toHaveText(/Checking Gateway Status/, { timeout: 10000 });

        // Verify that the status text is successfully set in the badge
        const text = await badge.innerText();
        expect(['Gateway Operational', 'Gateway Unavailable'].some(t => text.includes(t))).toBeTruthy();
    });
});