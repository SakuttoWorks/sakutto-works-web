import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'yaml';

test.describe('Static File Format Validation (Local)', () => {
    test('mcp.json should be valid JSON', () => {
        const rawData = fs.readFileSync(path.join(__dirname, '../mcp.json'), 'utf-8');
        expect(() => JSON.parse(rawData)).not.toThrow();
        const data = JSON.parse(rawData);
        expect(data).toHaveProperty('mcpVersion');
    });

    test('openapi.yaml should be valid YAML', () => {
        const rawData = fs.readFileSync(path.join(__dirname, '../openapi.yaml'), 'utf-8');
        expect(() => yaml.parse(rawData)).not.toThrow();
        const data = yaml.parse(rawData);
        expect(data.openapi).toBe('3.1.0');
    });
});

test.describe('Status Badge UI Tests (Local)', () => {
    test('should display "Gateway Operational" when Gateway is healthy', async ({ page }) => {
        // Mock API request to simulate a healthy state
        await page.route('https://api.sakutto.works/v1/normalize_web_data', async route => {
            await route.fulfill({ status: 204 });
        });

        await page.goto('/');
        const badge = page.locator('#system-status');
        await expect(badge).toHaveText(/Gateway Operational/);
        await expect(badge).toHaveClass(/operational/);
    });

    test('should display "Gateway Unavailable" when Gateway returns a 503 error', async ({ page }) => {
        // Mock API request to simulate an error state
        await page.route('https://api.sakutto.works/v1/normalize_web_data', async route => {
            await route.fulfill({ status: 503 });
        });

        await page.goto('/');
        const badge = page.locator('#system-status');
        await expect(badge).toHaveText(/Gateway Unavailable/);
        await expect(badge).toHaveClass(/degraded/);
    });
});