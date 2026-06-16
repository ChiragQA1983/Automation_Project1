import { test } from '@playwright/test';
import CourseTable from '../Pages/CourseTable';

test('Validate Java Courses', async ({ page }) =>
{
    const course = new CourseTable(page);

    await course.goto();

    await course.validateJavaCourses();
});