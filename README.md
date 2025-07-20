# 📅 Recurring Date Picker

A modern and responsive Recurring Date Picker built using **Next.js**, **React**, and **Tailwind CSS**, with complete **unit and integration tests** using **Jest** and **React Testing Library**.

## ✨ Features

- Select a date and choose recurrence (Daily, Weekly, Monthly)
- Professional UI with clean and responsive layout
- Dark mode support using CSS variables
- Font customization using `next/font` with Google Fonts (Geist)
- Fully tested with 100% test case pass rate
- Built with modular, reusable components

## 🚀 Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/)

## 🧱 Project Structure

```
recurring-date-picker/
├── src/
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── globals.css
│   └── components/
│       ├── RecurringDatePicker.js
│       └── RecurrenceSelector.js
├── __tests__/
│   ├── RecurrenceSelector.test.js
│   └── RecurringDatePicker.integration.test.js
├── __mocks__/
│   └── next-font.js
├── public/
├── package.json
├── tailwind.config.js
└── jest.config.js
```

## 🧪 Testing

All test cases pass successfully:

```bash
npm run test
```

- Unit Test: `RecurrenceSelector.test.js`
- Integration Test: `RecurringDatePicker.integration.test.js`

## 📸 Screenshots

### Before Date selected

./assets/Initial_Image.PNG

### After date selected

./assets/date_picked_image.PNG

## 🛠️ How to Run Locally

1. Clone the repo

```bash
git clone https://github.com/KEERTHI1441/recurring-date-picker.git
cd recurring-date-picker
```

2. Install dependencies

```bash
npm install
```

3. Run the dev server

```bash
npm run dev
```

4. Run tests

```bash
npm run test
```

## 🔍 Demo

CodeSandbox link: [CodeSandbox](https://codesandbox.io/p/github/KEERTHI1441/recurring-date-picker)

