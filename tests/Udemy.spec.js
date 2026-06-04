import { test } from '@playwright/test';
import UdemyPage from '../Pages/UdemyPage';

test('Validate Udemy Courses Navigation', async ({ page }) => {

    const udemycourses = new UdemyPage(page);

    await udemycourses.goto();

    await udemycourses.UdemycoursesValidation();

});